import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import CONSTANTS from '../models/constants';

export default class PageComponent extends Component {
  slice = {
    start: 0,
    end: CONSTANTS.MAX_ITEMS_PER_PAGE
  }

  @tracked isMobile = window.screen.width < 420;
  @tracked activePage = 1;
  @tracked numberOfPages = Math.ceil(this.args.model.length / CONSTANTS.MAX_ITEMS_PER_PAGE);
  @tracked data = this.isMobile ? this.args.model : this.args.model.slice(this.slice.start, this.slice.end);

  @action onChangePage(page) {
    const isLastPage = page === 'next' && this.activePage === this.numberOfPages;
    const isFirstPage = page === 'prev' && this.activePage === 1;

    if (isLastPage || isFirstPage) {
      return;
    }

    if (page === 'next') {
      this.activePage++;
      this.slice.start = this.slice.start + CONSTANTS.MAX_ITEMS_PER_PAGE;
      this.slice.end = this.slice.end + CONSTANTS.MAX_ITEMS_PER_PAGE;
    }

    if (page === 'prev') {
      this.activePage--;
      this.slice.start = this.slice.start - CONSTANTS.MAX_ITEMS_PER_PAGE;
      this.slice.end = this.slice.end - CONSTANTS.MAX_ITEMS_PER_PAGE;
    }

    this.data = this.args.model.slice(this.slice.start, this.slice.end);
  }
}
