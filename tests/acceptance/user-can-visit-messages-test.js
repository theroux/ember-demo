import { test } from 'qunit';
import moduleForAcceptance from 'mariana/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user can visit messages');

test('Visiting /messages confirming markup', function(assert) {
  visit('/messages');

  andThen(function() {
    assert.equal(currentURL(), '/messages', '/messages route defined');
    assert.equal(find('.welcome').text(), 'Welcome to Ember.js', 'Page heading is present');
    assert.equal(find('.message').length, 4, 'Correct number of messages displayed');
  });
});
