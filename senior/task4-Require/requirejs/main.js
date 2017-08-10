requirejs.config({
    baseUrl: "../js",
    paths: {
        "jquery": "../../../jquery"
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

requirejs(["../index/index"])