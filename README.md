# Overview

This is the codebase for the frontend of my personal website. It was developed using Gatsby from a blank template file.

# Structure

The website has there static pages (Home, About and Contact).

There are two types of posts - Blog Posts and Projects. All are indexed at initialization in `gatsby-node.js` from template files, `src/templates/blogPost.js` and `src/templates/projectPost.js`.

# APIs

The CMS backend was built using Strapi and uses its GraphQL API.
The contact page uses (Getform)[https://getform.io/] to manage form submissions.

# Styling

All styling and animations were build using CSS modules.
