requirejs.config({
    baseUrl: "../js",
    paths: {
        "jquery": "//cdn.bootcss.com/jquery/1.9.1/jquery"
    }
})

requirejs(["../index/index"])