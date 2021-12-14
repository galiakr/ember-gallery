import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const cardData = {
      title: 'fake title',
      subtitle: 'fake subtitle',
    };
    this.set('title', cardData.title);
    this.set('subtitle', cardData.subtitle);

    await render(
      hbs`<Card::Details @title={{title}} @subtitle={{subtitle}} />`
    );

    assert.dom('.details').exists();
    assert.dom('[data-test-title]').hasText('fake title');
    assert.dom('[data-test-subtitle]').hasText('fake subtitle');
  });
});
