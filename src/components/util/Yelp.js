const apiKey = 'HZnQOr_0ngSl3A8gyNj0IWQ6vq22rIa71MutHLQg9lNST0b2QL6leUF7HntI6fqRwVZL6sdvLIK4yUPT_lrz8lziRQ_0sRJw4sNzZZjf2ZNb4eH7IWcAj3rFrnvGX3Yx';

const Yelp = {
 async search(term, location, sortBy) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipcode: business.location.zipcode,
                    catagory: business.catagories,
                    rating: business.rating,
                    reviewCount: business.review_count
                };
            });
        }
}
};

export default Yelp;