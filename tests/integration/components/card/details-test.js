import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const cardData = {
      Headline: 'fake Headline',
      SubHeadline: 'fake Sub-headline',
    };
    this.set('Headline', cardData.Headline);
    this.set('SubHeadline', cardData.SubHeadline);

    await render(
      hbs`<Card::Details @headline={{Headline}} @subtitle={{SubHeadline}} />`
    );

    assert.dom('.details').exists();
    assert.dom('[data-test-title]').hasText('fake title');
    assert.dom('[data-test-subtitle]').hasText('fake subtitle');
  });
});
