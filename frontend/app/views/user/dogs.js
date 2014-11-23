import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement: function () {
        "use strict";

        this._initSwipeGestures();
    },

    _initSwipeGestures: function() {
        "use strict";
        var mc = new Hammer(this.$()[0]);
        mc.on("swipeleft", function (evt) {
            console.log("swipe left detected", evt);
            this.send("like");

            return false;
        }.bind(this));

        mc.on("swiperight", function (evt) {
            console.log("swipe rigth detected", evt);
            this.send("dislike");

            return false;
        }.bind(this));
    },

    actions: {
        like: function () {
            "use strict";
            console.log("like");

            this.$("img#dog-img").addClass("like");
            setTimeout(function() {
                this.controller.send("like");
                this.$("img#dog-img").removeClass("like");
            }.bind(this), 400);
        },

        dislike: function () {
            "use strict";
            console.log("dislike");

            this.$("img#dog-img").addClass("dislike");
            setTimeout(function() {
                this.controller.send("dislike");
                this.$("img#dog-img").removeClass("dislike");
            }.bind(this), 400);
        }
    }
});
