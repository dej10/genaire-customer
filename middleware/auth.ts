import { useAccount } from '@wagmi/vue'

export default defineNuxtRouteMiddleware(() => {
  const { isConnected } = useAccount()

  // const pageIntended = useState('page_intended')

  // pageIntended.value = to.path !== '/login' ? to.path : pageIntended.value

  if (!isConnected.value)
    return navigateTo('/restake')
})
