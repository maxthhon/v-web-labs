const searchInput = document.getElementById('search');
const products = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  
  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    if (name.includes(query)) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  });
});

const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = "В корзине";
    button.classList.add("in-cart");
    button.disabled = true; // чтобы нельзя было нажать снова
  });
});
