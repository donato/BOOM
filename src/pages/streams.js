define([
    'assets/streams',
    'text!templates/streams.html'
], function(streams, h) {
    var template = Handlebars.compile(h);

    function render() {
        var html = template({
            streams : streams
        });

        $('#mylist').html(html);
    }
    return {
        render : render
    };
});
