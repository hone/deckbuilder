import Ember from 'ember';

export default Ember.ObjectController.extend({
  imagePath: Ember.computed.alias("model.Front.ImagePath")
});
