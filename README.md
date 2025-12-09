# Next.js Portfolio Website

This is a portfolio website built with Next.js and statically exported for deployment.

## Deployment Instructions

Since this is a static export of a Next.js application, it needs to be deployed correctly to avoid MIME type issues and broken asset paths.

### For GitHub Pages Deployment:

1. Build the static export:
   ```bash
   npm run build
   ```

2. The static files will be generated in the `out` directory

3. Deploy the contents of the `out` directory to your hosting provider

### For Vercel Deployment:

This project will automatically deploy correctly on Vercel with zero configuration.

### Common Issues and Fixes:

1. **MIME Type Errors**: Make sure your server is configured to serve `.js` and `.css` files with correct MIME types
2. **Asset Loading Failures**: Ensure the `assetPrefix` in `next.config.js` matches your deployment URL
3. **Routing Issues**: For GitHub Pages with custom paths, uncomment and adjust the `basePath` in `next.config.js`

## Development

To run this project locally:
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.