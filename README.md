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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---
### 01-Intro_SetUp

1. Make changes to index.js in the pages folder, remove the code inside the return of the Home() and replace it by an h2 tah inside a div tag.
---

### 02-Pages_Routes

1. Inside the pages folder we create all of our page components, each page in nextjs is driven by a react component.So for an about page we will have an about component etc and etc.
2. Each page component has its own file inside the pages folder, so the file name and location of each page component is tied to the route for that particular page. For Eg: If we create a new file inside this called about.js, then next will create a route for us which would be /about which is the name of the file to serve up this component, so we create a react component for this page inside this file, so the route name is tied  to the file name
3. The only exception to this is index.js, which is called using only the /
4. So Let us create an about(about.js) component inside the pages directory.
5. Inside the pages folder we can create subfolders and create out components in the subfolder 
6. So let us create a folder "friends" inside the pages folder.
7. Also create 2 components - index and test inside the "friends" Subfolder
---

### 03-More_Components

1. Just like in react, in nextjs also we can have dropping components that are not page components , so things like a navbar component or a contact us component which we can use in multiple different page components.
2. We do not create those dropping component in the pages folder we can create them some where else.
3. In the root of the project create a directory comps and place Navbar and Footer component in them.
4. Once the components are created place them in the index.js page
---
### 04-Linking_Pages

1. Now let us hook up all the components we have created, so if we click on one of them it directs us to the correct page component.
2. The way we do this in next application is by a special component called the Link component 
3. The link component adds the ability to do client side navigation in the browser meaning that different pages are loaded in via javascript and not new html page requests to the server, so it results in a much quicker website experience when  going between pages.
4. Update the Navbar.js and use the Link Tag/Component, do the same for index.js
---
