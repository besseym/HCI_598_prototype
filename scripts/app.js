requirejs.config({
    paths: {
        d3: '/bower_components/d3/d3.min'
    }
});

require(
    [
        "d3"
    ],
    function(d3) {

        console.log("hello world");
    }
);