import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('activePage', 1);
    // this.set('numberOfPages', 3);

    this.set('externalActionNext', (actual) => {
      let expected = 'next';
      assert.deepEqual(actual, expected, ' next - is passed to external action');
    });

    this.set('externalActionPrev', (actual) => {
      let expected = 'prev';
      assert.deepEqual(actual, expected, 'prev - value is passed to external action');
    });

    await render(hbs`<Pagination @activePage={{activePage}} @onChangePage={{this.externalActionNext}} />`);
    await click('[data-test-next-page]');

    await render(hbs`<Pagination @activePage={{activePage}} @onChangePage={{this.externalActionPrev}} />`);
    await click('[data-test-prev-page]');
  });
});
