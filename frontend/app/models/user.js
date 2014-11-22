import DS from 'ember-data';

export default DS.Model.extend({
  like: function(dog) {
    return this._createUserDog(dog, true);
  },

  dislike: function(dog) {
    return this._createUserDog(dog, false);
  },

  _createUserDog: function(dog, liked) {
    var user_dog_attrs = { dog_id: dog.get("id"), liked: liked, user_id: this.get("id") }
    var user_dog = this.get("store").createRecord("user_dog", user_dog_attrs);
    return user_dog.save();
  }
});
