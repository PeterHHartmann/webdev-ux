'use strict';

document.getElementById('taxForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const monetary = Number(document.getElementById('monetary').value);
    const rate = Number(document.getElementById('tax_rate').value) / 100;

    const tax_amount = monetary * rate;
    const final_amount = monetary - tax_amount;

    document.getElementById('tax_amount').innerHTML = tax_amount.toFixed(2);
    document.getElementById('final_amount').innerHTML = final_amount.toFixed(2);

});