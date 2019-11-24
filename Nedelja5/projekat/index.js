const income = document.querySelector('#income');
const expenses = document.querySelector('#expenses');
const addBtn = document.querySelector('#add-btn');
const inpDesc = document.querySelector('#desc');
const inpAmount = document.querySelector('#amount');
const typeSelect = document.querySelector('#type');
const mBalance = document.querySelector('#mBalance');
const mIncome = document.querySelector('#mIncome');
const mExpenses = document.querySelector('#mExpenses');

let monthlyInc = 0;
let monthlyExp = 0;

mBalance.textContent = 'RSD 0';

let nMIncome = document.createElement('span');
nMIncome.className = 'nmincome';
mIncome.appendChild(nMIncome);
nMIncome.textContent = 'RSD 0';

let nMExpenses = document.createElement('span');
nMExpenses.className = 'nmexpenses';
mExpenses.appendChild(nMExpenses);
nMExpenses.textContent = 'RSD 0';

let ePerc = document.createElement('span');
ePerc.className = 'ePerc';
mExpenses.appendChild(ePerc);

addBtn.addEventListener('click', () => {
  let desc = inpDesc.value.trim();
  let amount = inpAmount.value.trim();

  if (desc === '' || isNaN(amount) || amount <= 0) return;

  let transCont = document.createElement('div');
  transCont.className = 'trans-item';

  let nDesc = document.createElement('span');
  nDesc.className = 'desc';
  nDesc.textContent = desc;

  let nAmount = document.createElement('span');
  nAmount.className = 'amount';

  let rmBtn = document.createElement('button');
  rmBtn.textContent = 'Ukloni';
  rmBtn.className = 'rm-btn';
  rmBtn.style.display = 'none';

  let perc = document.createElement('span');
  perc.className = 'perc';

  if (typeSelect.value === 'income') {
    monthlyInc += Number(amount);
    nMIncome.textContent = monthlyInc.toLocaleString('rs-RS', { style: 'currency', currency: 'RSD' });
    nAmount.textContent = `+ ${Number(amount).toLocaleString('rs-RS', { style: 'currency', currency: 'RSD' })}`;
    ePerc.textContent = ` ${Math.round((Number(monthlyExp) * 100) / monthlyInc)}%`;
    transCont.appendChild(nDesc);
    transCont.appendChild(nAmount);
    transCont.addEventListener('mouseenter', () => rmBtn.style.display = 'block');
    transCont.addEventListener('mouseleave', () => rmBtn.style.display = 'none');
    transCont.appendChild(rmBtn);
    rmBtn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });
    income.appendChild(transCont);
    console.log(monthlyInc);
  } else {
    monthlyExp += Number(amount);
    nMExpenses.textContent = monthlyExp.toLocaleString('rs-RS', { style: 'currency', currency: 'RSD' });
    nAmount.textContent = `- ${Number(amount).toLocaleString('rs-RS', { style: 'currency', currency: 'RSD' })}`;
    monthlyInc === 0 ? ePerc.textContent = '' : ePerc.textContent = ` ${Math.round((Number(monthlyExp) * 100) / monthlyInc)}%`;
    monthlyInc === 0 ? perc.textContent = `100%` : perc.textContent = `${Math.round((Number(amount) * 100) / monthlyInc)}%`;
    transCont.appendChild(nDesc);
    transCont.appendChild(nAmount);
    transCont.appendChild(perc);
    transCont.addEventListener('mouseenter', () => rmBtn.style.display = 'block');
    transCont.addEventListener('mouseleave', () => rmBtn.style.display = 'none');
    transCont.appendChild(rmBtn);
    rmBtn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });
    expenses.appendChild(transCont);

  }
  mBalance.textContent = (monthlyInc - monthlyExp > 0) ? `+ ${(monthlyInc - monthlyExp).toLocaleString('rs-RS', { style: 'currency', currency: 'RSD' })}` : (monthlyInc - monthlyExp).toLocaleString('rs-RS', { style: 'currency', currency: 'RSD' });
  inpDesc.value = '';
  inpAmount.value = '';
});
