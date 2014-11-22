import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('shelter', {path:'/shelter/:shelter_id'});
  this.resource('user', {path:'/user/:user_id'});
});

export default Router;
