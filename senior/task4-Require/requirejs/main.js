requirejs.config({
    baseUrl: "../js",
    paths: {
        "jquery": "./jquery.min"
    },
    // shim: {
    //
    //     'underscore': {
    //         exports: '_'
    //     },
    //     'backbone': {
    //         deps: ['underscore', 'jquery'],
    //         exports: 'Backbone'
    //     }
    // }
})

requirejs(["../js/index"])