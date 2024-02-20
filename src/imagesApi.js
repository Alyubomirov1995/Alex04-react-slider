
export const getImages = (length = 6) => {
  return fetch(`https://api.thecatapi.com/v1/images/search?limit=${length}`)
  
    .then((response) => response.json())
    .then((response) => {
      const images = [];
      response.forEach((c) => {
        const title = c?.description;
        const url = c?.url;

        images.push({ title, url });
      });
      return images.slice(0, length); 
    });
};

