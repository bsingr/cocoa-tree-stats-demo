# CocoaTree Stats

A little Backbone.js show-case using the GitHub API via AJAX/CORS meant to be used at [CocoaTree](http://cocoa-tree.github.io) someday.

**Features**

1. Search for repositories on GitHub.
2. Render a bar chart based on last year of commit activity data for a specific repository.

Please see [public/javascripts](public/javascripts) for implementation details.

## Getting Started

1. Setup dependencies

    	npm install
    	bower install

2. Start the development server    

    	npm start
    
3. Visit the demo page

    	open http://localhost:3000

4. Run the specs

    	open http://localhost:3000/specs.html

## Technologies

**Development Environment**

  * Node.js
  * Express.js to host development site
  * Bower.js to manage client side dependencies

**Application**

  * Backbone.js as controller layer
  * jQuery to manipulate DOM
  * Morris.js to draw a beautiful graph
  * Bootstrap to layout the site
  * Require.js to modularize the code

**Testing**

  * Mocha.js
  * Chai.js as assertion library

## License

Copyright (2014) by Jens Bissinger.
