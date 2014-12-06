import Ember from 'ember';

export default Ember.ArrayController.extend({
  searchTerm: "",
  filteredList: Ember.computed("content.@each", "searchTerm", function() {
	var _this = this;
	var filter = function() {
	  return this.get("content").filter(function(item) {
		if(!_this.get("searchTerm")) { return false; }

		return item.get("Title").toLowerCase().indexOf(_this.get("searchTerm").toLowerCase()) > -1;
	  });
	};

	return Ember.run(this, filter, 150);
  })
});
