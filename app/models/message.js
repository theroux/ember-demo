import Ember from 'ember';
import DS from 'ember-data';

var cleanName = function(name) {
  var newName = name.charAt(0).toUpperCase() + name.substr(1);
  newName = newName.replace(/[0-9]/g, "");
  return newName;
};

export default DS.Model.extend({
  date: DS.attr('date'),
  useragent: DS.attr('string'),
  message: DS.attr('string'),
  username: DS.attr('string'),
  pic: DS.attr('string'),
  firstName: Ember.computed('username', function() {
    var first = this.get('username').split('.')[0];
    return cleanName(first);
  }),
  lastName : Ember.computed('username', function() {
    var last = this.get('username').split('.')[1];
    last = last.charAt(0).toUpperCase() + last.substr(1);
    return cleanName(last);
  }),
});
