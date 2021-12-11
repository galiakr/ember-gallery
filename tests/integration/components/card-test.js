import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Card />`);

    assert.dom(this.element).hasText('');
    // const cardData = {
    //   fields: {
    //     'HeaderImageUrl': 'fake HeaderImageUrl',
    //     'Headline': 'fake Headline',
    //     'Sub-headline': 'fake Sub-headline'
    //   }
    // }
    // this.set('card', cardData);
    // await render(hbs`<Card @card={{cardData}} />`);
    // await this.pauseTest();
    // assert.dom(this.element).hasText('555');
    // assert.dom('.yyy').exists();
  });
});
