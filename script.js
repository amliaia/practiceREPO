(function($){
    var Object = {
        fire: function(config) {    //bootstrap method
            this.config = config;   //make the config available to all the components
            this.bindEvents();      // bind events if any
    
            // here you can remove or show the DOM elements to be used in javascript only
        },
    // bind all the events
        bindEvents: function() {
            var self = Object;
            this.config.target.on('click', self.eventFunction);
        },
    // function fired by event
        eventFunction: function() {
            //Perform a task after an event
        },
        // other functions
        other: function() {
            //other action
        }
    };
    
    Object.fire({
        target: $('#box')
    });
    
    }(jQuery));