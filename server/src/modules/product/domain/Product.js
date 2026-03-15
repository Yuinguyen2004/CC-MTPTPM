const PRODUCT_CATEGORIES = Object.freeze({ DRINK: 'drink', FOOD: 'food', SNACK: 'snack' });

function createProduct({ name, category, price, stock = 0, image = null }) {
  return Object.freeze({
    getName: () => name,
    getCategory: () => category,
    getPrice: () => price,
    getStock: () => stock,
    getImage: () => image,
    toObject: () => ({ name, category, price, stock, image }),
  });
}

module.exports = { createProduct, PRODUCT_CATEGORIES };
