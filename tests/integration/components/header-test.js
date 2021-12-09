import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('greeting', 'good morning');
    await render(hbs`<Header @greeting={{greeting}} />`);

    assert.dom(this.element).hasText('Hello, good morning');
  });
});
