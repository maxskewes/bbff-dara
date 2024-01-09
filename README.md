# [bridgetownbluegrass.com](https://bridgetownbluegrass-com.vercel.app/)
## official website for a Portland-based annual music festival

### This [ReactJS](https://react.dev/) application is a [Next.js 13](https://nextjs.org/) project, utilizing their page directory routing system. It was created by running npx [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and styled using [Chakra UI](https://chakra-ui.com/). Animaitions of components utilized [Framer's Motion library](https://www.framer.com/motion/animation/). Icons were provided by the [npm](https://www.npmjs.com/) package [React Icons](https://react-icons.github.io/react-icons/).

## API and SMTP

### All commerce is built using [Stripe's integration API](https://stripe.com/docs/api), and linking their services with all ticket and merchandise sales.

### The artist application, volunteer application, and contact page are linked to Max's email using a self-hosted gateway that allows making REST requests against IMAP and SMTP servers, provided by the open-source [Nodemailer](https://nodemailer.com/) module.

## Deployment
Initial testing of this repository was deployed using [Vercel](https://vercel.com/).
