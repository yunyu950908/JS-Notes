requirejs.config({
    baseUrl: "../js",
    paths: {
        "jquery": "../../../jquery"
    }
})

requirejs(["../index/index"])