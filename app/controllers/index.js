import Ember from 'ember';

export default Ember.ArrayController.extend({
  searchTerm: "",
  setDebouncedSearchTerm: function() {
    this.set("debouncedSearchTerm", this.get("searchTerm"));
  },
  observeSearchTerm: Ember.observer("searchTerm", function() {
    Ember.run.debounce(this, this.setDebouncedSearchTerm, 250);
  }),
  filteredList: Ember.computed("content.@each", "debouncedSearchTerm", function() {
	var _this = this;
	var filter = function() {
	  return this.get("content").filter(function(item) {
		if(!_this.get("debouncedSearchTerm")) { return false; }

		return item.get("Title").toLowerCase().indexOf(_this.get("debouncedSearchTerm").toLowerCase()) > -1;
	  });
	};

	return Ember.run(this, filter, 150);
  })
});
