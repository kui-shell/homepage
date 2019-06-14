# Kui's landing page

[![Build Status](https://travis.ibm.com/ETX/kui-landing.svg?token=xyzxnZp9ALxp71M92JLp&branch=master)](https://travis.ibm.com/ETX/kui-landing)

This is the landing page for the Kui project.

## Quick start

**The project is automated so any change pushed to the `master` branch will be automatically deployed into the right cluster.**

If you want to work in your local machine, because the project uses [Gatsby](https://www.gatsbyjs.org/), there are some commands that could be useful.

`npm install -g gatsby-cli` will install the Gatsby CLI to make things easier.

`gatsby develop` will deploy a local server with all the changes available with hot-deploy.

`gatsby build` will build all the site static files.

`gatsby serve` will serve all the previously built files.

## Important files

`src/components/layout.css` and `src/components/layout.js` are the files related to the general layout of the site.

`src/pages` contain all the pages of the site, they will be translated into HTML static pages.

## Analytics

The analytics configuration is hardcoded in the file `src/config.json` but if it is required the values can be overwritten using environment variables. This is useful if we want to have more than one environment and cleaner analytics data.

* `KUI_COUNTLY_SERVER`: URL to the Countly server.
* `KUI_COUNTLY_KEY`: Application Key provided by Countly.

## References

* [Understanding the Gatsby lifecycle](https://www.narative.co/articles/understanding-the-gatsby-lifecycle)
* [Sequence of Gastby's bootstrap lifecycle](https://gist.github.com/sw-yx/09306ec03df7b4cd8e7469bb74c078fb)

