import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image_url: DS.attr()
});
