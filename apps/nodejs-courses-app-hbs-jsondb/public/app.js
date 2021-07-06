const toCurrency = price => new Intl.NumberFormat('ua-UA', {
  currency: 'uah',
  style: 'currency'
}).format(price);

document.querySelectorAll('.price').forEach(node => {
  node.textContent = toCurrency(node.textContent);
});

const $cart = document.querySelector('#cart');
if ($cart) {
  $cart.addEventListener('click', event => {
    if (event.target.classList.contains('js-remove')) {
      const id = event.target.dataset.id;
      fetch('/cart/remove/' + id, { method: 'delete' })
        .then(res => res.json())
        .then(cart => {
          console.log('cart', cart);
          if (cart.courses.length) {
            const html = cart.courses.map(item => {
              return `
                <tr>
                  <td>${item.title}</td>
                  <td>${item.count}</td>
                  <td>
                    <button class="btn btn-small js-remove" data-id="${item.id}">Видалити</button>
                  </td>
                </tr>
              `;
            }).join('');
            $cart.querySelector('tbody').innerHTML = html;
            $cart.querySelector('.price').textContent = toCurrency(cart.price);
          } else {
            $cart.innerHTML = '<p>Кошик пустий</p>';
          }
        });
    }
  });
}
