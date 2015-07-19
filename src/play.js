require([
    'pages/streams',
    'pages/tasks'
], function(streams, tasks) {
    function showIt() {
        if (bool) {
            streams.render();
        } else {
            tasks.render();
        }
        bool = !bool;
    }

    var bool = true;
    showIt();
    $('#toggle').click(showIt);
});
