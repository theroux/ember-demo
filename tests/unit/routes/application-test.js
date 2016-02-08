import { moduleFor, test, module } from 'ember-qunit';

import Ember from 'ember';

import startApp from '../../helpers/start-app';


moduleFor('route:application', 'Unit | Route | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

//******

var application;

module('Acceptance: Welcome message', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('checking welcome h2', function() {
  visit('/messages');

  andThen(function() {
    equal(currentPath(), '/messages');
  });
});
