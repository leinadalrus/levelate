# Levelate

## A Remix (run) web-app mainly used for Beyblade cataloging

###### Loading data

Data, components and URL routing segments are often coupled together,
and with this coupling we'll need to use `loader` and `useLoaderData` API functions.

Simply having a getter for an array/list of values which we can return,
we can append these trivial functions inside of the `loader` API function,
(trivial functions coinciding and corresponding with API used in and for: ORM)
coupled with the `useLoaderData` API function
which then acts as an interface for the `loader` API function.

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

-   `build/server`
-   `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
