import DS from 'ember-data';

export default DS.Model.extend({
  dog_id: DS.attr(),
  user_id: DS.attr(),
  liked: DS.attr()
});
