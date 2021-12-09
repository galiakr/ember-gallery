import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | not-found', function (hooks) {
  setupTest(hooks); // setup lifecycle hooks

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:not-found'); // get the instance of the route
    assert.ok(route); // verify the route exists
  });
});
