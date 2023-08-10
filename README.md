# DogArt

The story of the Internet is well known: at the height of the cold war, The US Military (ARPA) spent over 20 years and billions of dollars creating a decentalized network of networks that would ensure that, even after a nuclear attack, we would be able so send pictures of kittens to each other ;)

Having recently made a terrible mistake in letting the rest of the family choose a puppy, I decided to put a little gallery together of the first round of dog pics: https://dogart.vercel.app/.

Every little helps when redressing the balance on the domestic animal front!

![DogArt Gallery](./public/DogArt.gif)

## The Why?

When we brought a new puppy home and I realized how many photos we were going to take of her, my first reaction was that it would be great to build some kind of gallery to collate them all ...and this is it.

I followed a You Tube tutorial (https://www.youtube.com/watch?v=HVyct9EUNP8) by Clint Briley for the navigation and large image slider, then added the rest myself.

The main reason for choosing Clint&apos; tutorial was that I wanted to learn how to use the effect at the top of the app, where the content slides up over an image as you scroll down. I really like this effect and have been noticing it being used more and more on commercial sites.

I tried to add a little animation and movement to some of the elements to keep it fun, after all, the product testers were my kids!

The biggest challenge was the responsive design. Even with Tailwind (what an amazing library, btw!) it took me longer than expected to make it work on a phone screen. Frustratingly, what Chrome Dev Tools on my laptop showed me would be displayed did not match what the Chrome browser on my iPhone actually displayed. I had to deploy the site (thank you Vercel!) and push my changes each time to see what the actual effects were.

This was a fun challenge and has actually produced simething useful. I feel that I still need to raise the bar quite a bit before my code becomes production-level, but I feel that I'm a little closer than I was before, especially on the CSS side of things.

## Tech Stack

[![Javascript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
[![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://whatwg.org/)
[![CSS](https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)


## Note

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Raleway, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
