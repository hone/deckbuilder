import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
	var cardPayload = [{"id":"aragorn-core-set","Title":"Aragorn","IsUnique":true,"CardType":"Hero","CardSubType":"None","Sphere":"Leadership","Front":{"Subtitle":null,"ImagePath":"http://hallofbeorn.comhttps://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Aragorn.png","Stats":{"ThreatCost":"12","Willpower":"2","Attack":"3","Defense":"2","HitPoints":"5"},"Traits":["Dúnedain.","Noble.","Ranger."],"Keywords":["Sentinel."],"Text":["Response: After Aragorn commits to a quest, spend 1 resource from his resource pool to ready him."],"FlavorText":"`I am Aragorn son of Arathorn; and if by life or death I can save you, I will.` -The Fellowship of the Ring"},"Back":null,"CardSet":"Core Set","EncounterInfo":null,"Number":1,"Quantity":1,"Artist":"John Stanko","HasErrata":false},{"Title":"Théodred","IsUnique":true,"CardType":"Hero","CardSubType":"None","Sphere":"Leadership","Front":{"Subtitle":null,"ImagePath":"http://hallofbeorn.comhttps://s3.amazonaws.com/hallofbeorn-resources/Images/Cards/Core-Set/Théodred.png","Stats":{"ThreatCost":"8","Willpower":"1","Attack":"2","Defense":"1","HitPoints":"4"},"Traits":["Noble.","Rohan.","Warrior."],"Keywords":[],"Text":["Response: After Théodred commits to a quest, choose a hero committed to that quest. Add 1 resource to that hero\u0027s resource pool."],"FlavorText":"`Not all is dark. Take courage, Lord of the Mark...`\r\n\r\n-Gandalf, The Two Towers"},"Back":null,"CardSet":"Core Set","EncounterInfo":null,"Number":2,"Quantity":1,"Artist":"Jeff Himmelman","HasErrata":false}];

	this.cardPayload = cardPayload.map(function(item) {
	  //item.id = (item.Title + "-" + item.CardSet).dasherize();
	  item.Front.ImagePath = item.Front.ImagePath.replace(/^http:\/\/hallofbeorn.com/, '');

	  return Ember.Object.create(item);
	});
  },
  model: function() {
	return this.cardPayload;
  }
});
