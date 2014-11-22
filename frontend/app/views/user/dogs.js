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

            this.$("img").animate({left: "-2500px", top: "-30px"},
                500,
                function () {
                    this.controller.send("like");
                    this.$("img").css({left: "0px", top: "0px"});
                }.bind(this));
        },

        dislike: function () {
            "use strict";
            console.log("dislike");

            this.$("img").animate({left: "2500px", top: "-30px"},
                500,
                function () {
                    this.controller.send("dislike");
                    this.$("img").css({left: "0px", top: "0px"});
                }.bind(this));
        }
    }
});
