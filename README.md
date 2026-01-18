# iPhone Animation with Spline

This project demonstrates an interactive iPhone animation effect using Spline 3D models within a Next.js application. It features a two-column layout with scrollable text content on the left and a fixed 3D Spline model on the right.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

-   **Spline 3D Integration**: Seamlessly integrates 3D models created with Spline into a React component using `@splinetool/react-spline`.
-   **Two-Column Layout**: A responsive layout with a dedicated section for text content and a fixed area for the 3D animation.
-   **Scrollable Text Content**: The left column provides scrollable text, allowing for narrative or contextual information alongside the animation.
-   **Custom Font**: Utilizes the `Spline Sans Mono` font for a distinct typographic style, integrated via `next/font/google` and configured with Tailwind CSS.
-   **Tailwind CSS**: Styled using Tailwind CSS for rapid and consistent UI development.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts, specifically `Geist` and `Spline Sans Mono`.

## Implementation Details

### `app/layout.tsx`
Configures the global layout, imports necessary fonts, and includes the Spline viewer script for proper custom element registration.

### `app/page.tsx`
Renders the main page content, including the two-column layout. The left column contains scrollable text sections, and the right column hosts the Spline 3D model.

### `components/Spline.tsx`
A React component that wraps the `@splinetool/react-spline` component to display the 3D scene from Spline.

### `tailwind.config.ts`
Extends the default Tailwind CSS configuration to include `Spline Sans Mono` as the `font-mono` family.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.