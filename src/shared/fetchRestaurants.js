import yelpAPI from "./yelpApi";

const fetchRestaurants = async (city, type, limit = 10) => {
  const params = {
    location: city,
    limit,
    categories: type,
  };

  const { data } = await yelpAPI.get("businesses/search", { params });

  const items = data.businesses.map((business) => {
    const address = `${business.location.address1}, ${business.location.zip_code}`;
    return {
      id: business.id,
      name: business.name,
      imageUrl: business.image_url,
      address,
    };
  });

  return items;
};

export default fetchRestaurants;
