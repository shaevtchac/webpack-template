# Webpack 5 template for simple HTML/SASS/CSS/JS page
If you want to quickly create a HTML/SASS/CSS/JS web page using the newest features of Java Sript and CSS and not want to worry about browsers coverage, the template is for you.
## Installation
Clone the repository and install dependencies using your favourite package manager e.g.:
```
npm i
```
## How to use
1. Create first build by running build script:
  ```
  npm run build
  ```
  This step is not mandatory as webpack dev server runs on RAM stored files, however I noticed it works a bit better when it starts from disk stored dist.
  
2. start dev server:
  ```
  npm start
  ```
3. Code
4. Run build when finished coding. Your production website code is in `dist` folder.

## Features
### HTML/SASS/JS boilerplate
* semantic HTML
* SASS config
* responsive JS hamburger menu
* 4 pages
### Development mode
* opens the page on a local server
* super fast response to changes
* no need to reload manually
### Production build
* minimizes HTML, JS and CSS
* uses [Babel](https://babeljs.io/docs/en/) with super smart @babel/preset-env which by default has 99.5% market coverage (setting "> 0.5%, last 2 versions, Firefox ESR, not dead"), 
* uses [PostCSS with smart postcss-preset-env](https://preset-env.cssdb.org/) preset to prefix your CSS with "browsers: 'last 2 versions'" setting
### Webpack config
* split into common dev and prod to avoid code repetition
* written to the latest Webpack 5 recommendations
* configured tu use one JS bundle for simplicity, but its configuration allows to add more easily 
