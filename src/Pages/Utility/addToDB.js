const getStoredInfo = () => {
  const storeInfo = localStorage.getItem("cart");
  if (storeInfo) {
    return JSON.parse(storeInfo);  
  }
  return [];
};

const addToStoredDB = (id) => {
  const cart = getStoredInfo();

  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export { addToStoredDB, getStoredInfo };
