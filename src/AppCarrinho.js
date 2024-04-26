import React, { useEffect } from "react";
import "./AppCarrinho.css"
import "./styles.css.map"
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


function AppCarrinho() {

  useEffect(() => {

    document.querySelectorAll('.qty button.increment').forEach(button => {
      button.addEventListener('click', () => {
        const span = button.parentElement.querySelector('span');
        span.textContent = parseInt(span.textContent) + 1;
        updateTotal();
      });
    });


    document.querySelectorAll('.qty button.decrement').forEach(button => {
      button.addEventListener('click', () => {
        const span = button.parentElement.querySelector('span');
        const currentValue = parseInt(span.textContent);
        if (currentValue > 0) {
          span.textContent = currentValue - 1;
          updateTotal();
        }
      });
    });


    document.querySelectorAll('.remove').forEach(button => {
      button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.remove();
        updateTotal();
      });
    });


    document.getElementById('finalizarCompra').addEventListener('click', () => {
      document.getElementById('overlay').style.display = 'block';
    });

    document.getElementById('proceedToPayment').addEventListener('click', () => {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('overlay2').style.display = 'block';
    });

    document.getElementById('confirmPayment').addEventListener('click', () => {
      document.getElementById('overlay2').style.display = 'none';
      document.getElementById('overlay3').style.display = 'block';
      displayReceipt();
    });

    return () => {
      document.querySelectorAll('.qty button.increment').forEach(button => {
        button.removeEventListener('click', () => {});
      });
      document.querySelectorAll('.qty button.decrement').forEach(button => {
        button.removeEventListener('click', () => {});
      });
      document.querySelectorAll('.remove').forEach(button => {
        button.removeEventListener('click', () => {});
      });
      document.getElementById('finalizarCompra').removeEventListener('click', () => {});
      document.getElementById('proceedToPayment').removeEventListener('click', () => {});
      document.getElementById('confirmPayment').removeEventListener('click', () => {});
    };

  }, []);


  function updateTotal() {
    const rows = document.querySelectorAll('tbody tr');
    let total = 0;
    rows.forEach(row => {
      const quantity = parseInt(row.querySelector('.qty span').textContent);
      const price = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace('R$ ', ''));
      total += quantity * price;
    });
    document.querySelector('#subTotal').textContent = 'R$ ' + total.toFixed(2);
    document.querySelector('#totalPrice').textContent = 'R$ ' + total.toFixed(2);
  }

  function displayReceipt() {
    const receiptDetails = document.getElementById('receiptDetails');
    receiptDetails.innerHTML = '';
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const productName = row.querySelector('.info .name').textContent;
      const productPrice = row.querySelector('td:nth-child(2)').textContent;
      receiptDetails.innerHTML += `${productName}: ${productPrice}<br>`;
    });
    const total = document.querySelector('#totalPrice').textContent;
    receiptDetails.innerHTML += `<strong>Total: ${total}</strong>`;
  }

   return (  
    <body>
    <header>
      <span>Carrinho de compras do <b>Pizzaria</b></span>
    </header>
    <main>
      <div class="page-title"> Carrinho Pizzaria</div>
      <div class="content">
        <section>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="product">
                    <img src="img/calabresa-removebg-preview.png" alt="Pizza Calabresa" />
                    <div class="info">
                      <div class="name">Calabresa</div>
                      <div class="category">Pizza</div>
                    </div>
                  </div>
                </td>
                <td>R$ 60</td>
                <td>
                  <div class="qty">
                    <button class="decrement"><AiOutlineMinus /></button>
                    <span>1</span>
                    <button class="increment"><AiOutlinePlus /></button>
                  </div>
                </td>
                <td></td>
                <td>
                  <button class="remove"><AiOutlineClose /></button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div class="product">
                    <img src="img/chocolate-removebg-preview.png" alt="Pizza Chocolate" />
                    <div class="info">
                      <div class="name">Chocolate</div>
                      <div class="category">Pizza</div>
                    </div>
                  </div>
                </td>
                <td>R$ 60</td>
                <td>
                  <div class="qty">
                    <button class="decrement"><AiOutlineMinus /></button>
                    <span>1</span>
                    <button class="increment"><AiOutlinePlus /></button>
                  </div>
                </td>
                <td></td>
                <td>
                  <button class="remove"><AiOutlineClose /></button>
                </td>
              </tr>
              
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div class="product">
                    <img src="img/frango-removebg-preview.png" alt="Pizza Frango" />
                    <div class="info">
                      <div class="name">Frango</div>
                      <div class="category">Pizza</div>
                    </div>
                  </div>
                </td>
                <td>R$ 60</td>
                <td>
                  <div class="qty">
                    <button class="decrement"><AiOutlineMinus /></button>
                    <span>1</span>
                    <button class="increment"><AiOutlinePlus /></button>
                  </div>
                </td>
                <td></td>
                <td>
                  <button class="remove"><AiOutlineClose /></button>
                </td>
              </tr>
              
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div class="product">
                    <img src="img/portuguesa-removebg-preview.png" alt="Pizza Portuguesa" />
                    <div class="info">
                      <div class="name">Portuguesa</div>
                      <div class="category">Pizza</div>
                    </div>
                  </div>
                </td>
                <td>R$ 60</td>  
                <td>
                  <div class="qty">
                    <button class="decrement"><AiOutlineMinus /></button>
                    <span>1</span>
                    <button class="increment"><AiOutlinePlus /></button>
                  </div>
                </td>
                <td></td>
                <td>
                  <button class="remove"><AiOutlineClose /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <aside>
          <div class="box">
            <header>Resumo da compra</header>
            <div class="info">
              <div><span>Sub-total</span><span id="subTotal">R$ 240</span></div>
              <div><span>Frete</span><span>Gratuito</span></div>
              <div>
                <button>
                  Adicionar cupom de desconto
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
            <footer>
              <span>Total</span>
              <span id="totalPrice">R$ 240</span>
            </footer>
          </div>
          <button id="finalizarCompra">Finalizar Compra</button>
        </aside>
  
        <div class="overlay" id="overlay" style={{display: 'none'}}>
          <div class="modal" id="customerInfoModal">
            <h2>Informações do Cliente</h2>
            <input type="text" placeholder="Nome" id="customerName" required />
            <input type="text" placeholder="CPF" id="customerCPF" required />
            <input type="text" placeholder="Endereço" id="customerAddress" required />
            <input type="tel" placeholder="Telefone" id="customerPhone" required />
            <button id="proceedToPayment">Prosseguir com o Pagamento</button>
          </div>
        </div>
  
        <div class="overlay" id="overlay2" style={{display: 'none'}}>
          <div class="modal" id="paymentInfoModal">
            <h2>Informações de Pagamento</h2>
            <input type="text" placeholder="Número do Cartão" id="cardNumber" required />
            <input type="text" placeholder="Validade (MM/AA)" id="cardExpiration" required />
            <input type="text" placeholder="CVV" id="cardCVV" required />
            <input type="text" placeholder="Nome Impresso no Cartão" id="cardHolderName" required />
            <button id="confirmPayment">Confirmar Pagamento</button>
          </div>
        </div>
  
        <div class="overlay" id="overlay3" style={{display: 'none'}}>
          <div class="modal" id="receiptModal">
            <h2>Recibo da Compra</h2>
            <div id="receiptDetails"></div>
            <button onclick="window.location.reload();">Fechar</button>
          </div>
        </div>
      </div>
    </main>
  </body>
);
}

export default AppCarrinho;
