document.querySelector('button[type="button"]').addEventListener('click', hitungBMI);

function hitungBMI() {
    const weight = parseFloat(document.getElementById('beratBadan').value);
    const height = parseFloat(document.getElementById('tinggiBadan').value) / 100;

    console.log('Berat Badan:', weight);
    console.log('Tinggi Badan:', height);

    if (isNaN(weight) || isNaN(height)) {
        alert('Masukkan berat badan, tinggi badan, dan usia dalam bentuk angka.');
        return;
    }

    const bmi = weight / (height * height);
    const kategori = getKategoriBMI(bmi);

    document.getElementById('hasilBMI').textContent = `BMI Anda: ${bmi.toFixed(2)} (${kategori})`;
}

function getKategoriBMI(bmi) {
    if (bmi < 18.5) {
        return 'Kurus';
    } else if (bmi < 24.9) {
        return 'Normal';
    } else if (bmi < 29.9) {
        return 'Gemuk';
    } else {
        return 'Obesitas';
    }
}

function resetForm() {
    document.getElementById('ingputt').reset();
}