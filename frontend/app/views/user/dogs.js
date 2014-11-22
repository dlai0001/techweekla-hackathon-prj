import Ember from 'ember';

export default Ember.View.extend({
    actions: {
        like: function() {
            "use strict";
            console.log("like");

            this.$("img").animate({left:"-2500px", top:"-30px"},
            500,
            function() {
                this.controller.send("like");
                this.$("img").css({left:"0px", top:"0px"});
            }.bind(this));
        },

        dislike: function() {
            "use strict";
            console.log("dislike");

            this.$("img").animate({left:"2500px", top:"-30px"},
                500,
                function() {
                    this.controller.send("dislike");
                    this.$("img").css({left:"0px", top:"0px"});
                }.bind(this));
        }
    }
});
