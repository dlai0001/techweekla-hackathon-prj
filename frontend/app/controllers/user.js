import Ember from 'ember';

export default Ember.ObjectController.extend({
    unreadCount: null,

    init: function() {
        this._super();
        "use strict";

        setTimeout(this._poll.bind(this), 5000);
    },

    _poll: function() {
        "use strict";
        console.log("polling channels");

        var channels = pollChannels();
        var count = 0;
        for(var i=0; i < channels.length; i++) {
            count += channels[i].unread;
        }

        if(count) {
            this.set("unreadCount", count);
        } else {
            this.set("unreadCount", null);
        }

        setTimeout(this._poll.bind(this), 5000);
    }
});


function pollChannels() {
    "use strict";

    return [
        {id:1, name:"Awesome Shelter", unread: 1},
        {id:1, name:"Shelter in Next Town", unread: 2}
    ];
}