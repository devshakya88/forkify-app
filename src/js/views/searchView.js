class searchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    return this.#parentEl.querySelector('.search_field').value;
  }
}
export default new searchView();
