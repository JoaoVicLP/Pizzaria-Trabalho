document.addEventListener("DOMContentLoaded", () => {
    // Adiciona evento de clique para botões de incremento
    document.querySelectorAll('.qty button.increment').forEach((button: HTMLElement) => {
      button.addEventListener('click', () => {
        const span = button.parentElement!.querySelector('span')!;
        span.textContent = String(parseInt(span.textContent!) + 1);
        updateTotal();
      });
    });
  
    // Adiciona evento de clique para botões de decremento
    document.querySelectorAll('.qty button.decrement').forEach((button: HTMLElement) => {
      button.addEventListener('click', () => {
        const span = button.parentElement!.querySelector('span')!;
        const currentValue = parseInt(span.textContent!);
        if (currentValue > 0) {
          span.textContent = String(currentValue - 1);
          updateTotal();
        }
      });
    });
  
    // Adiciona evento de clique para botões de remoção
    document.querySelectorAll('.remove').forEach((button: HTMLElement) => {
      button.addEventListener('click', () => {
        const row = button.closest('tr');
        row!.remove();
        updateTotal();
      });
    });
  
    // Atualiza o total sempre que a quantidade for alterada
    function updateTotal() {
      const rows = document.querySelectorAll('tbody tr');
      let total = 0;
      rows.forEach((row: HTMLElement) => {
        const quantity = parseInt(row.querySelector('.qty span')!.textContent!);
        const price = parseFloat(row.querySelector('td:nth-child(2)')!.textContent!.replace('R$ ', ''));
        total += quantity * price;
      });
      (document.querySelector('footer span:last-child') as HTMLElement).textContent = 'R$ ' + total.toFixed(2);
    }
  });
  