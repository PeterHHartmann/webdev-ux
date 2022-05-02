'use strict';

document.getElementById('convertForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const temperature = Number(document.getElementById('temperature').value);

    const from = document.getElementById('from').value
    const to = document.getElementById('to').value

    let conversion;

    switch (from + to) {
        case 'CF':
            conversion = (temperature * 1.8) + 32;
            break;
        case 'CK':
            conversion = temperature + 273.15;
            break;
        case 'FC':
            conversion = (temperature - 32) / 1.8;
            break;
        case "FK":
            conversion = ((temperature - 32) / 1.8) + 273.15;
            break;
        case 'KC':
            conversion = temperature - 273.15;
            break;
        case 'KF':
            conversion = ((temperature - 273.15) * 1.8) + 32
            break;
        default:
            conversion = temperature;
            break;
    }

    const outputStr = `${from}&deg;${temperature} = <b>${to}&deg;${conversion}</b>`
    document.getElementById('output').innerHTML = outputStr

    console.log('conversion choice', from + to);
    console.log('conversion result', conversion);

});