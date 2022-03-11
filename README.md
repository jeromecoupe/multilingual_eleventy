# Multilingual sites with Eleventy

Testing Eleventy multilingual capabilities following these two posts:

- [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)
- [Language switcher for multilingual JAMstack sites](https://www.webstoemp.com/blog/language-switcher-multilingual-jamstack-sites/)

## Features

- default locale (netlify.toml backed up by HTML file)
- localised collections
- locales managed using directory data files
- date filters taking locales into account
- language switcher based on a `translationKey` set in YAML front matters (falls back to the locale's homepage if there is no corresponding page another locale)

## Installation

- clone repository
- install node and npm
- run `npm i`
- run `npm run build` to build the project
- run `npm run dev` to spin up a dev server
