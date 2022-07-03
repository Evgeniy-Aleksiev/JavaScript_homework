window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish').addEventListener('submit', publish)
  let inputs = document.querySelectorAll('input');
  let tableBody = document.getElementById('table-body');

  function publish(event) {
    event.preventDefault();
    if(![inputs].some(i => i.value == '')){
      let tr = document.createElement('tr');
      
      for (let i = 0; i < inputs.length; i++) {
        let td = document.createElement('td');
        td.textContent = inputs[i].value;
        tr.appendChild(td);
      }

      tableBody.appendChild(tr);

      let td = document.createElement('td');
      const editBtn = document.createElement('button');
      editBtn.classList.add('editBtn');
      editBtn.textContent = "Edit";
      editBtn.addEventListener('click', edit);

      const sellBtn = document.createElement('sellBtn');
      sellBtn.classList.add('sellBtn');
      sellBtn.textContent = "Sell";
      sellBtn.addEventListener('click', sell);
    }
  }
}

solve()