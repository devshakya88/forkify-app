import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    console.log(numPages);
    //Page 1, and there are other pages

    if (this._data.page === 1 && numPages > 1) {
      return 'Page 1, others';
    }
    //Last Page
    if (this._data.page === numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page 1</span>
          </button>
          <button class="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
      </button>
      `;
    }
    //Other Page
    if (this._data.page < numPages) {
      return 'other page';
    }
    //Page 1, and there are No other Pages
    return 'only 1 page';
  }
}

export default new PaginationView();
