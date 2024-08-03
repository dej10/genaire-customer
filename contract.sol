// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract StakingContract is Ownable, ReentrancyGuard {
    IERC20 public stakingToken;
    address public multiSigWallet;
    uint256 public apr; // Annual Percentage Rate
    uint256 public totalValueLocked;

    struct UserInfo {
        uint256 balance;
        uint256 rewardDebt;
        uint256 lastDepositTime;
    }

    mapping(address => UserInfo) public userInfo;
    mapping(address => bool) public authorizedAddresses;

    event Deposit(address indexed user, uint256 amount);
    event RewardDistributed(address indexed user, uint256 reward);
    event TransferToMultiSig(uint256 amount);

    constructor(IERC20 _stakingToken, address _multiSigWallet, uint256 _apr) {
        stakingToken = _stakingToken;
        multiSigWallet = _multiSigWallet;
        apr = _apr;
    }

    modifier onlyAuthorized() {
        require(authorizedAddresses[msg.sender], "Not authorized");
        _;
    }

    function setAuthorizedAddress(address _address, bool _status) external onlyOwner {
        authorizedAddresses[_address] = _status;
    }

    function deposit(uint256 _amount) external nonReentrant {
        UserInfo storage user = userInfo[msg.sender];
        updateRewards(msg.sender);

        stakingToken.transferFrom(msg.sender, address(this), _amount);
        user.balance += _amount;
        user.lastDepositTime = block.timestamp;

        totalValueLocked += _amount;

        emit Deposit(msg.sender, _amount);
    }

    function updateRewards(address _user) internal {
        UserInfo storage user = userInfo[_user];
        if (user.balance > 0) {
            uint256 reward = calculateReward(_user);
            user.rewardDebt += reward;
        }
    }

    function calculateReward(address _user) public view returns (uint256) {
        UserInfo storage user = userInfo[_user];
        uint256 timeStaked = block.timestamp - user.lastDepositTime;
        uint256 reward = (user.balance * apr * timeStaked) / (365 days * 10000);
        return reward;
    }

    function distributeRewards() external onlyAuthorized nonReentrant {
        for (uint i = 0; i < userList.length; i++) {
            address userAddress = userList[i];
            UserInfo storage user = userInfo[userAddress];
            updateRewards(userAddress);
            uint256 reward = user.rewardDebt;
            user.rewardDebt = 0;
            stakingToken.transfer(userAddress, reward);
            emit RewardDistributed(userAddress, reward);
        }
    }

    function transferToMultiSig(uint256 _amount) external onlyAuthorized nonReentrant {
        stakingToken.transfer(multiSigWallet, _amount);
        emit TransferToMultiSig(_amount);
    }

    function balanceOf(address _user) external view returns (uint256) {
        return userInfo[_user].balance;
    }

    function totalLocked() external view returns (uint256) {
        return totalValueLocked;
    }

    function pauseWithdrawals() external onlyOwner {
        // Logic to pause withdrawals can be implemented here
    }

    function resumeWithdrawals() external onlyOwner {
        // Logic to resume withdrawals can be implemented here
    }
}