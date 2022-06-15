# Webpack 5 template for simple HTML/SASS/CSS/JS page
If you want to quickly create a HTML/SASS/CSS/JS web page using the newest features of Java Sript and CSS and not want to worry about browsers coverage, the template is for you.
## Installation
Clone the repository and install dependencies using your favourite package manager e.g.:
```
npm i
```
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
* uses Babel with super smart @babel/preset-env which by default has 99.5% market coverage (setting "> 0.5%, last 2 versions, Firefox ESR, not dead"), 
* uses PostCSS to prefix your CSS with "browsers: 'last 2 versions'" setting
### Webpack config
* split into common dev and prod to avoid code repetition
* written to the latest Webpack 5 recommendations
