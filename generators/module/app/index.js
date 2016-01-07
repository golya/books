'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this.argument('modulename', { type: String, required: true });
    },

    generateController: function(){
        var context = {
            moduleName: this.modulename,
            restCapitalName: this.modulename[0].toUpperCase() + this.modulename.slice(1)
        };

        var path = "app.js",
            file = this.readFileAsString(path);

        file += "dependencies.push('"+this.modulename+"');\n";
        file += "routes.push({'module': '"+this.modulename+"'});\n";

        this.write(path, file);

        this.template("module.js", "modules/"+this.modulename+"/"+this.modulename+".js", context);
        this.template("controller.js", "modules/"+this.modulename+"/"+this.modulename+"-controller.js", context);
        this.template("template.html.tpl", "modules/"+this.modulename+"/"+this.modulename+".html.tpl", context);
        this.template("style.scss", "modules/"+this.modulename+"/"+this.modulename+".scss", context);

        this.log('After gulp build you can check your new module at http://localhost:8080/#/'+this.modulename);

    }
});

module.exports = ModuleGenerator;
