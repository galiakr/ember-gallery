import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const cardData = {
      'imageSrc': 'https://rockcelebrities.net/wp-content/uploads/2021/06/jim-morrison-3.jpg',
      'altText': 'fake alt text',
    }
    this.set('src', cardData.imageSrc);
    this.set('alt', cardData.altText);

    await render(hbs`<Card::Image @imageSrc={{src}} @altText={{alt}} />`);
    assert.dom('[data-test-card-image]').hasProperty('src', 'https://rockcelebrities.net/wp-content/uploads/2021/06/jim-morrison-3.jpg')
    assert.dom('[data-test-card-image]').hasProperty('alt', 'fake alt text');
  });
});
