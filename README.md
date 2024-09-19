# Gold Country Model Horse Show

## Project Description

This Nuxt application is a rebuild of a client's event information and registration website The application leverages the NuxtUI component library and Tailwind CSS to create a fully responsive user interface. The app implements advanced features such as conditional rendering, sub-navigation menus, and dark mode to improve usability and aesthetics.

- Note: The next GCMHS event has not been scheduled. This application is a prototype to replace an existing website. All names that appear on this application are fictional.

## Features

Class List view: Complete event information mapped from an updatable JSON file into NuxtUI accordion components.

Show Rules view: Detailed information about all show rules. The page is divided into sections that are navigable using the NuxtUI accordion (mobile only) and vertical navigation components.

Registration Form: Users may input their name, email, and attendance details into the interactive form on the Event Form view. The form is live-validated using Zod.

- Note: The form is used for demonstration purposes only. User data is not submitted or saved.

## Dependencies

### App Dependencies

- Vue.js
- Nuxt
- @nuxt/ui (component library)
- @nuxtjs/google-fonts
- @nuxt/scripts
- nuxt-viewport
- Zod

### Dev Dependencies:

- @nuxt/eslint-config
- @nuxtjs/color-mode
- @nuxtjs/tailwindcss
- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- prettier
- prettier-plugin-tailwindcss

## Build

- Build script:
  `npm run build` or `nuxt build`

- Run the app in development mode:
  `npm run dev` or `nuxt dev`

## Deployment

- Deployed project URL: https://gcmhs.netlify.app/

- The application is deployed to Netlify directly from this repo.
