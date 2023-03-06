import NewsApiService from './NewsApiService.js';
import LoadMoreBtn from './components/LoadMoreBtn.js';

const form = document.getElementById('form');
const newsWrapper = document.getElementById('newsWrapper');
// const loadMoreBtn = document.getElementById('loadMore');

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '#loadMore',
  ishidden: true,
});
console.log(newsApiService);

form.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', fetchArticles);

function onSubmit(e) {
  e.preventDefault();

  // Визначаємо змінну форми
  const form = e.currentTarget;
  //буквально те, що ми вводимо в поле інпуту
  const value = form.elements.news.value.trim();

  newsApiService.searchQuery = value;
  //очищення сторінки після натискання кнопки
  newsApiService.resetPage();

  clearNewsToList();
  loadMoreBtn.show();
  //пошук за певним параментром(тим яким ми ввели в поле інпуту)
  fetchArticles().finally(() => form.reset());
}

function fetchArticles() {
  loadMoreBtn.disable();
  return newsApiService
    .getNews()
    .then(articles => {
      if (articles.length === 0) throw new Error('No data');
      return articles.reduce(
        (markup, article) => createMarkup(article) + markup,
        ''
      );
    })
    .then(markup => {
      appendNewsToList(markup);
      loadMoreBtn.enable();
    })
    .catch(onError);
}

function appendNewsToList(markup) {
  // newsWrapper.innerHTML = markup;
  newsWrapper.insertAdjacentHTML('beforeend', markup);
}
function clearNewsToList() {
  newsWrapper.innerHTML = '';
}

function createMarkup({ author, title, description, url, urlToImage }) {
  return `
  <div class="article-card">
  <img src = ${urlToImage} class="article-img />
  <h2 class="article-title">${title}</h2>
  <h3 class="article-author">${author || 'anonymous'}</h3>
  <p class="article-description">${description}</p>
  <a href =${url} class="article-link" target = "_blank">Read more</a>
  </div>
  `;
}

function onError(err) {
  console.error(err);
  appendNewsToList('<p>Articles not found</p>');
}
