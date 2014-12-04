import Ember from 'ember';
import cardPayload from '../card_payload';

export default Ember.Route.extend({
  beforeModel: function() {
    this.cardPayload = cardPayload.map(function(item) {
      item.id = (item.Title + "-" + item.CardSet).dasherize();

      item.Front.ImagePath = item.Front.ImagePath.replace(/^http:\/\/hallofbeorn.com/, '');

      return Ember.Object.create(item);
    });
  },

  model: function() {
    return this.cardPayload;
  }
});
