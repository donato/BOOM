define([
    'assets/tasks',
    'text!templates/tasks.html'
], function(tasks, h) {
    var template = Handlebars.compile(h);

    function render() {
        var html = template({
            tasklist : tasks
        });

        $('#mylist').html(html);
    }

    return {
        render : render
    };
});
