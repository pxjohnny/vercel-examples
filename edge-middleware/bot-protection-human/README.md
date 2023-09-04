---
name: Bot Protection with Human Security
slug: bot-protection-human
description: TODO!
framework: Next.js
useCase: Edge Middleware
deployUrl: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpxjohnny%2Fvercel-examples%2Ftree%2Fmain%2Fedge-middleware%2Fbot-protection-human&env=PX_APP_ID,PX_COOKIE_SECRET,PX_AUTH_TOKEN&project-name=bot-protection-human&repository-name=bot-protection-human
demoUrl: TODO!
---

# Bot Protection with Human Security

[Human](https://humansecurity.com/) <TODO! NEED TEXT FROM MARKETING> can provide real-time bot protection and other security protections to any website. In this demo we'll be using it at the edge.

## Demo

TODO!

## How to Use

You can choose from one of the following two methods for this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpxjohnny%2Fvercel-examples%2Ftree%2Fmain%2Fedge-middleware%2Fbot-protection-human&env=PX_APP_ID,PX_COOKIE_SECRET,PX_AUTH_TOKEN&project-name=bot-protection-human&repository-name=bot-protection-human)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to bootstrap the example:

```bash
npx create next-app --example https://github.com/vercel/examples/tree/main/edge-middleware/bot-protection-human bot-protection-datadome (??)
```

You'll need to have an account with [Human](https://humansecurity.com). Once that's done, copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

Then open `.env.local` and set the environment variables to match the ones in your DataDome dashboard. Your keys should be available at https://console.humansecurity.com/

Next, run Next.js in development mode:

```bash
npm run dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
