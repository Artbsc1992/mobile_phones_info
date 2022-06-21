const fetchArticles = async () => {
  const result = await fetch('https://fakestoreapi.com/products');
  const json = await result.json();
  const articles = json.map((article) => ({
    id: article.id,
    title: article.title,
    price: article.price,
    description: article.description,
    category: article.category,
    img: article.image,
    rate: article.rating.rate,
    count: article.rating.count,
  }));
  return articles;
};

export default fetchArticles;
