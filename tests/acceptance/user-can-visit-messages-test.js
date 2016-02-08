import { test } from 'qunit';
import moduleForAcceptance from 'mariana/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | user can visit messages');

test('visiting /messages', function(assert) {
  visit('/messages');

  andThen(function() {
    assert.equal(currentURL(), '/messages');
  });
});
