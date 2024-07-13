# Project Title

> ## Boilerplate  Specific

> #### Files compulsory to update

- [Configuration] package.json (update name of app),  nuxt.config, useDefault
- [Composables] useDefault
- [Middleware] all files in /middleware

> #### Files you can do away with if you don’t need

- [Styling] tailwind configs  ....although useToast/Toast.vue depends on tailwind styles
- [Composables] usePut, useWatch, useOnline, usePaginate (dependent on component Paginate.ts)
- [Middleware] all files in /middleware
- [Plugins] all files in /plugins
- [Utils] download.ts, image.ts

> #### Files you must do away with

- [Pages] all pages in the /pages directory
- [Assets] demo assets files in /public directory
- [DotFiles] .npmrc, .nvmrc, .yarn
- [Other Files]  02.analytics.global.ts, assets.d.ts
- [Components] items in -> /modals, /partials

## Description

*This is a short description of the project.*

### Libraries Used

- List the libraries or frameworks used in your project.
- Example: [Flatpickr](https://flatpickr.js.org/)

### Current Feature List

- Briefly list the existing features of the project.

### Incoming Features

- List any upcoming features or improvements planned for the project.

### Deployment

- The project is currently deployed at [Active URL].
  - Example: [https://www.yourproject.com](https://www.yourproject.com)
- Also put the link in the repo's `about` section

### Types of Tests Included

- Specify the types of tests included in the project list them out (e.g., unit tests, integration tests).

## How to Install and Run the Project

### Start the Development Server

1. Clone the repository: `git clone https://github.com/yourusername/yourproject.git`
2. Navigate to the project directory: `cd yourproject`
3. Install dependencies: `pnpm install` or `yarn install`
4. Start the development server: `npm dev` or `yarn dev`

### Build the Application for Production

- To build the application for production, run: `pnpm run build/generate` or `yarn build`

## How to Use the Project

1. Provide clear instructions on how to use the project.

### Authentication (if applicable)

- If your project requires authentication, include relevant credentials:
  - Username: [example]
  - Password: [example]
