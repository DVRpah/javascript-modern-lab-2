let cart = [];

function addProduct(product) {
  const { id, name, price, quantity } = product;
  const produsExistent = cart.find(p => p.id === id);

  if (produsExistent) {
    cart = cart.map(p =>
      p.id === id ? { ...p, quantity: p.quantity + quantity } : p
    );
  } else {
    cart = [...cart, { id, name, price, quantity }];
  }
  return cart;
}

function removeProduct(id) {
  const produsExistent = cart.find(p => p.id === id);
  if (!produsExistent) {
    throw new Error(`Produsul cu id-ul ${id} nu există în coș.`);
  }
  cart = cart.filter(p => p.id !== id);
  return cart;
}

function updateQuantity(id, newQuantity) {
  const produsExistent = cart.find(p => p.id === id);
  if (!produsExistent) {
    throw new Error(`Produsul cu id-ul ${id} nu există în coș.`);
  }
  cart = cart.map(p => (p.id === id ? { ...p, quantity: newQuantity } : p));
  return cart;
}

function calculateTotal() {
  return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
}

addProduct({ id: 1, name: "Laptop", price: 5000, quantity: 1 });
addProduct({ id: 2, name: "Mouse", price: 150, quantity: 2 });
updateQuantity(2, 5);
console.log(`Total: ${calculateTotal()} lei`);

try {
  removeProduct(99);
} catch (eroare) {
  console.log(`Eroare: ${eroare.message}`);
}