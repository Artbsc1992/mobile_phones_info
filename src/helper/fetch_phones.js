const fetchPhones = async () => {
  const result = await fetch ('https://api-mobilespecs.azharimm.site/v2/top-by-fans');
  const json = await result.json();
  const phones = json.map((phone) =>({
    id: new Date().getUTCMilliseconds(),
    name: phone.phone_name,
    slug: phone.slug,
    likes: phone.favorites,
    detail: phone.detail,
  }));
  console.log(phones)
  return phones
};

export default fetchPhones;