import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import CONSTANTS from '../models/constants';

export default class PageComponent extends Component {
  firstItemOnPage = 0;
  isMobile = window.screen.width < 420;
  numberOfPages = Math.ceil(
    this.args.model.length / CONSTANTS.MAX_ITEMS_PER_PAGE
  );

  @tracked itemsData = this.isMobile ? this.args.model : this.slicePages();
  @tracked activePage = 1;
  @tracked greeting = `good ${this.getTimeOfDay()}!`;

  @action onChangePage(page) {
    const isLastPage =
      page === 'next' && this.activePage === this.numberOfPages;
    const isFirstPage = page === 'prev' && this.activePage === 0;

    if (isLastPage || isFirstPage) {
      return;
    }

    if (page === 'next') {
      this.setActivePage(this.activePage + 1);
      this.setPage(this.firstItemOnPage + CONSTANTS.MAX_ITEMS_PER_PAGE);
    }

    if (page === 'prev') {
      this.setActivePage(this.activePage - 1);
      this.setPage(this.firstItemOnPage - CONSTANTS.MAX_ITEMS_PER_PAGE);
    }

    if (Number.isInteger(page)) {
      this.setActivePage(page);
      this.setPage((page -1) * CONSTANTS.MAX_ITEMS_PER_PAGE);
    }
    this.itemsData = this.slicePages();
  }

  setActivePage(page) {
    this.activePage = page;
  }

  slicePages() {
    return this.args.model.slice(
      this.firstItemOnPage,
      this.firstItemOnPage + CONSTANTS.MAX_ITEMS_PER_PAGE
    );
  }

  setPage(start) {
    this.firstItemOnPage = start;
  }

  getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 4 && hour <= 11) return 'morning';
    if (hour >= 12 && hour <= 16) return 'afternoon';
    if (hour >= 17 && hour <= 20) return 'evening';
    if (hour >= 21 || hour <= 3) return 'night';
  }
}
