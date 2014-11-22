import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true },
  },

  model: function(params) {
    return this.get("store").findQuery("dog", params);
  }
});
