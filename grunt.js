module.exports=function(e){e.initConfig({requirejs:{almond:!1,replaceRequireScript:[{files:["build/index.html"],module:"main"}],modules:[{name:"main"}],dir:"build/",appDir:".",baseUrl:"js",inlineText:!0,wrap:!0,mainConfigFile:"js/main.js",paths:{jquery:"empty:",remotestorage:"empty:"},stubModules:["utils/log","text"]},watch:{files:[],tasks:""}}),e.loadNpmTasks("grunt-requirejs"),e.registerTask("build","requirejs"),e.registerTask("b","requirejs"),e.registerTask("default","server watch")}