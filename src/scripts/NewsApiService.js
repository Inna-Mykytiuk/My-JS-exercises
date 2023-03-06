const ENDPOINT = `https://newsapi.org/v2/everything`;

//задаємо ключ через заголовок
const options = {
  headers: {
    'X-Api-Key': 'e085078306eb45ddbc19d2dfb94659d4',
  },
};

export default class NewsApiService {
  constructor() {
    this.page = 5;
    this.searchQuery = '';
  }
  getNews() {
    const URL = `${ENDPOINT}?q=${this.searchQuery}&pageSize=5&page=${this.page}`;
    return fetch(URL, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.nextPage();
        return articles;
      });
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
