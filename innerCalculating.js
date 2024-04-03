document.getElementById('ingputt').addEventListener('submit', function(event) {
    event.preventDefault();
let a = parseFloat ( document.getElementById('beratBadan').value);
let b = parseFloat ( document.getElementById('tinggiBadan').value);

hiitung(a,b);
});

function calculate(num1, num2) {
    let result = num1 + num2;
    alert(`Hasil penjumlahan adalah: ${result}`);
}