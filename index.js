document.getElementById('Yo').value = 0;
document.getElementById('wct').addEventListener('input', e => {
    const wct = document.getElementById('wct').valueAsNumber;
    console.log(wct);
    document.getElementById('Yo').valueAsNumber = wct * 1000;
})