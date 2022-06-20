const fetchPhones = async () => {
  const result = await fetch ('https://api-mobilespecs.azharimm.site/v2/top-by-fans');
  const json = await result.json();
  const phones = json.data.phones.map((phone) =>({
    name: phone.phone_name,
    slug: phone.slug,
    likes: phone.favorites,
    detail: phone.detail,
  }))
  return phones
  
};

export default fetchPhones;