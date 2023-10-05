# And Voila Community TurboRepo Starter with Shadcn/UI

This project is a TurboRepo monorepo that uses Next.js, TypeScript, and other technologies to build a web application. It's organized into several packages and applications, each with its own responsibilities. This README is a stub after realizing that cursor.so could probably help with this too. Not a bad start.

## Environment Details

- NextJS Version: 13.x.x
- Router Type: App Router
- Package Manager: PNPM
- Repo Manager: Turbo Repo
- Database ORM: Prisma
- Database: Planetscale
- Auth: Clerk Auth
- CSS Framework: Tailwind CSS
- UI Library: Shadcn
- Language: TypeScript

## Project Structure

The project is organized into several packages and applications:

- `web`: A Next.js application that serves as the main web interface.
- `lms`: Another Next.js application that serves as the Learning Management System.
- `ui`: A shared React component library used by both `web` and `lms` applications.
- `eslint-config-custom`: Contains custom ESLint configurations.
- `tsconfig`: Contains TypeScript configurations used throughout the monorepo.

All packages and applications are written in TypeScript.

## Getting Started

To get started with the project, clone the repository and install the dependencies using PNPM:

```sh
git clone https://github.com/and-voila/community.git
cd community
pnpm install
```

To add UI components, use the pre-made script:

```sh
pnpm ui:add <component-name>
```

To build all apps and packages, run:

```sh
cd community
pnpm build
```

To develop all apps and packages, run:

```sh
cd community
pnpm dev
```

## TurboRepo

TurboRepo is used to manage the monorepo. It provides features like task running, caching, and remote caching. To enable remote caching, you need to authenticate with your Vercel account:

```sh
cd community
npx turbo login
```

Then, link your TurboRepo to your Remote Cache:

```sh
npx turbo link
```

## Dependabot

Dependabot is configured to check for updates in the npm package ecosystem on a weekly basis.

## Code Quality

The project uses ESLint for code linting and Prettier for code formatting. The configurations for these tools are located in the `eslint-config-custom` package.

## UI Library

The `ui` package contains a shared React component library powered by Shadcn/UI. It exports various components and utilities that can be used in the `web` and `lms` applications.

## Shoutouts

We'd like to thank **[Daniele Luisetto @dan5py](https://github.com/dan5py)** for making our life so much easier with their OSS contributions including where we cloned this Turborepo from, their project **[turborepo-shadcn-ui](https://github.com/dan5py/turborepo-shadcn-ui)**.
