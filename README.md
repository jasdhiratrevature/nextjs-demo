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
### 05-Creating_Layout_Component

1. We would like the Navbar and Footer component to be available on all page, so the bad solution for this would be copy and paste those components to every page component. and if either the Navbar or the Footer changes, we have to change it in every page where we have used them.
2. Ideally we would create a Layout component instead and that Layout component will contain the Navbar and Footer and other reusable component like that.
3. Then that Layout component would wrap all of our different pages.
4. In essence what we need to do is create that Layout and wrap the `<Component>` inside the _app.js file.
5. Let out create a Layout component inside the comps folder.
6. Now open the _app.js and import the Layout component and wrap the `<Component>` with the `<Layout>`
7. Modify the Layout component, in the Layout component we can access the children as the props .
8. the children property is basically any thing nested inside the Layout component 
9. From the index.js delete the Navbar and Footer component
---
### 06-Adding_Styles

1. Let us now add some styles/css to our application.
2. There are different ways to add CSS to your next project.
	- Global Style Sheets
	- Style JSX
	- CSS modules
3. The global style sheet is available inside the styles folder - globals.css
4. Remove the content of the global.css and define your css rules(Can copy from the repo)
5. For Page specific styles we will be using CSS Modules, which allows us to write a style for each page component 
6. In the styles folder we already have a Home.module.css which is imported in the Home component (index.js) 
7. Update the index.js to use the styles from the Home.module.css
---
### 07-Custom_404_Page

1. What if the user tries to go to a url that doesn't exist, you will get a built in 404 page
2. You can create your own 404 page and customize the content on that page
3. In the pages folder create a new file 404.js . If the user trys to access a url that does not exist this page would be rendered
4. Update the globals css as well
---
### 08-Redirecting_Users

1. Some time we need to redirect a user to a different page without them clicking on any thing. For example a user submits a form, we might want them to redirect back to the home page. 
2. We in our case we want an automatic redirect from the 404 page to the home page.
3. We will use the useEffect hook.
4. Make changes in the 404.js page
---
### 09-Images_Metadata

1. Let us now replace the Logo Text with the logo image.
2. The static assests are placed inside the public folder and any thing here is made accessible from the browser
3. We will be using the image in the Navbar.js component.
4. Open the Navbar.js and update it.
5. We can use the html `<img>` Tag for this.
6. NextJS uses the `<Image>` component and we can use this inplace of `<img>`
7. Some of the benifits of using the Image component is size optimization, Faster page load etc.
8. Sometimes we might want to add a custom title in the head for each page, and also we can add metadata.
9. We can use the `<Head>` component which is built in NextJS.
10. Let us open the index.js. The `<Head>` tag take the meta data nd insert it into the head of our documents.
11. Similarly update the About component as well.
---
### 10-Fetching_Data_getStaticProps

1. Time to fetch some data from the API
2. In a React app, we would fetch this data from a hook like useEffect hook that would make a request in the browser. 
3. In nextjs we don't do that because remember the component are all pre rendered by the time they reach browser  so ideally we want to fetch the data before thry're rendered so the rendered component have data in the template and to do this we can use a special function provided by nextjs.
4. We are going to fetch our data inside the index.js inside of the friends folder.
5. so the special function is used in the index.js inside of friends folder and the function is called getStaticProps() and we need to export this
6. The function getStaticProps() runs at build time, as our app is built and our components rendered, at this point we can add a fetch call to the API to get any data we need for our component .  
7. The function getStaticProps() never runs in the browser only at build time, so do not write any code here you expect to run in the browser.
8. getStaticProps() return an object with the props property 
9. All add some style for the page (using Friends.module.css)
---
### 11-Dynamic_Routes 

1. So we have listed all the friends on the page, it would be nice if we can click on any one of the friend and that would open up the friend details page and see some information about them.
2. For this we need to create a page for each of our friends and a route for each one of those and to do that we need to discuss about route parameters.
3. Depending upon the number of friends we are listing we need to have a route generated for each one of those, to understand this better. we will discuss in terms of Static Site Generation (SSG)
4. Once we have completed developing our application next is going to generate a static site for us based on all of our page components and its at this point that nextjs renders all of our page components into html files and JS bundles that goes with them for any interactivity on those pages so now we have a load of pages which are ready to deploy to the web a static site containing just these html pages and JS , so it is going to generate in our case at the minute an index,about and friends page.
5. So when it comes to building our friendDetails pages, nextjs is going to need to generate an html file for eash friend listed.
6. The template and the component will be same for each one of these pages, so we don't need to make multiple components for them, but nextjs still needs to pre render a seperate html page for every single friend and assign each one its own route.
7. Let us create a friendDetails component that these pages are going to be based on, we will create that compont inside the friends folder
8. Lets name the component as id, but this will be a literal , not changable, but in the present scenerio that id is changeable as per the friend id, and the way we do that is by putting square brackets around the file name, which in our case is "id". It can be named any thing, but must be inside the [] brackets.
9.Create the Details component [id].js 
10. Next update the friends listing page and add a Link for each friend in the list.(friends-->index.js)
---
### 12-Dynamic_Routes-2 

1. Now we have the friendDetails page set up , the [] indicates that this route path is changeable, its a route parameter  and that means that there will be a friend Details page for each different friend id that we have so ultimately when we build our app for production next needs to be able to generate a route and an html page for each friend.
2. But next doesn't automatically know what routes and html pages to generate because that depends on external data.
3. So we need a way to explicitly tell next what friend details route and pages we need to create at build time based on our data and to do this we use a function getStaticPaths() 
4. getStaticPaths() function runs at build time and inside it we return all the possible values for our route parameter the id paramater for this component and nextjs will know to generate a route and html page for each of those ids.
5. So Let us create this function getStaticPaths()  at the top of `[id].js` page and we need to export this function
6. At the end of this function we want to return an object and inside that we want a paths property.
7. That paths property needs to be an array  of objects where each object represents a route if you  like and in each of those objects we need to specify any route parameters in our case the id.
8. the second return value is the fallback which is for fallback pages. we will set it to false so that if the user tries to visit a route with an id that doesn't exist it will show the 404 page.
9. So when we build are app nextjs will build a page and a route for each one using the parameter we specified, the id in our case
---



