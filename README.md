
## Environment Installation
### Development tools prerequesities
Node v4.x (although v0.12.x should work as well)

### After nodejs is installed
```sh
npm install -g gulp
npm install -g bower
npm install -g yo
npm install -g http-server
```

## Project Installation
### Build project dependencies
```sh
$ npm install
$ bower install
```
### Build the project
```sh
$ gulp build
```

### Watch the project files for continuous project build
```sh
$ gulp watch
```

## Run the project
```sh
$ http-server
```

## Project structure

```
    ├───directives
    │   ├───book-directive
    │   │   ├───book-directive.html.tpl
    │   │   ├───book-directive.js
    │   │   ├───book.scss
    ├───generators
    │   ├───module
    │   │   ├───yeoman directory structure ...
    ├───models
    │   ├───user.js
    ├───modules
    │   ├───books
    │   │   ├───books-controller.js
    │   │   ├───books.html.tpl
    │   │   ├───books.js
    │   │   ├───books.scss
    ├───scss
    │   ├───_variable
    │   ├───main.scss
    ├───services
    │   ├───book-service
    │   │   ├───book-service.js
```
Every new page has to be in the modules directory, these pages can use any top level directives. In the directives directory you can place any non page specific
directive. Every directive and page specific style definitions, own controller, template and module file and these files have to be in their own directories.
The page controllers can use services, and every service has to be in the services directory and these services can use the models to transform the service responses
to models. Every general style definition has to be in scss directory and every generator has to be in generators directory.

## Generators
In the generators directory you can create a new generator using the yeoman directory structure.
    http://yeoman.io/authoring/

### Available generators

#### module generator
Using the yeoman you can generate new page using the following command
```sh
$ yo module newpage
```
With this command you generated the newpage module to modules directory where you can start implementing the newpage module.
The new module is appended to the app.js as a dependency and the page is bound to #/newpage route, you can change this default route in app.js file.

## Routing
Using the module generator the new module is added automatically to the application as a dependency and a route for the new page.

```js
    dependencies.push('newpage');
    routes.push({'module': 'newpage'});
```

If you want to change the default route, templateUrl or controller name then you can use the following properties.
```js
    routes.push({
        'module': 'newpage',
        'path': '/newpage/:id',
        'templateUrl': '/modules/newpage/newpage.html.tpl',
        'controller': 'newpageController'
    });
```

## Directives
In the directives directory you can create a new directive.

### Available directives

#### backgroundImage

You can add cover background image to sections.
```html
    <div background-image="{{image}}"></div>
```

#### book

You can add a book info box using the book property from the scope.
```html
    <book></book>
```
