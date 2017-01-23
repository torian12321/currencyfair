CurrencyFair
=============

Example site for [CurrencyFair(https://www.currencyfair.com)

SetingUp
---------------

Use a php server to run the project


Install [Nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) with it in the computer.

On the project folder, install the node modules running:

```npm install```


Development phase
---------------

All the web content than should be modified is located on **app** folder.

Any page (HTML or PHP) should be located on **app** root folder, thel **views** folder is used for templates or components used for php, angular, etc.


**Scripts and Style**

To compile less and js files **once**, open the console in the project and run:

```gulp build```

To compile less and js files **each time we save a less file**, open the console in the project and run:

```gulp watch ```

For more information on tasks, open **gulpfile.js**


Distribution phase (publish)
---------------

To compile the distribution version of the site, on the root folder run in console:

```gulp build-all```

After this, all the content on 'dist' folder should be ready to directly copy into the server. In that version, php is compiled into .html, and *.js *.css and *.html are minified



Styleguide
---------------

To access the styleguide, open the proyect on the browser and add '/styleguide' to the url

The Styleguide has been configurated to work with the less files from the proyect

If including styleguide folder, also add the less files 'inc/less/*.less'


Technologies
---------------

- [LESS](http://lesscss.org/)
- [KaleyStyleguide](https://github.com/thomasdavis/kaleistyleguide)
- [Gulp](http://gulpjs.com/)


Autor
---------------
[Aitor](http://aitorpalomares.esy.es/)