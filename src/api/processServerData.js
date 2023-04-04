/* eslint-disable max-len */
export const request = (url, options) => fetch(
  `https://mate-academy.github.io/react_phone-catalog/api/${url}`, options,
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}-${response.statusText}`);
    }

    return response.json();
  });

export const getAllProducts = () => request('products.json');

export const getProduct = id => getAllProducts()
  .then(data => data.find(el => el.id === id));

export const getHotPriceProducts = () => getAllProducts()
  .then(data => data.filter(el => el.discount > 0).sort((a, b) => {
    const firstDiscount = a.price * (a.discount / 100);
    const secondDiscount = b.price * (b.discount / 100);

    return secondDiscount - firstDiscount;
  }));

export const getBrandNewProducts = () => getAllProducts()
  .then(data => data.filter(el => el.discount === 0).sort((a, b) => b.price - a.price));

export const getSuggestedProducts = () => getAllProducts()
  .then((data) => {
    const suggestedArr = data;

    for (let i = suggestedArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));

      [suggestedArr[i], suggestedArr[j]] = [suggestedArr[j], suggestedArr[i]];
    }

    return suggestedArr;
  });

export const getPhones = () => getAllProducts()
  .then(data => data.filter(el => el.type === 'phone'));

export const getTablets = () => getAllProducts()
  .then(data => data.filter(el => el.type === 'tablet'));

export const getAccessories = () => getAllProducts()
  .then(data => data.filter(el => el.type === 'accessory'));

export const getProductDetails = url => request(`products/${url}.json`);
