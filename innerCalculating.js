//memfungsikan tombol
document.querySelector('button[type="button"]').addEventListener('click', hitungBMI);

//mengambil data
function hitungBMI() {
    const weight = parseFloat(document.getElementById('beratBadan').value);
    const height = parseFloat(document.getElementById('tinggiBadan').value) / 100;
    const age = parseFloat(document.getElementById('usia').value);
//ini bagian memasukkan ke variabel
    console.log('Berat Badan:', weight);
    console.log('Tinggi Badan:', height);
    console.log('Usia:', age);
//kalo salah
    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Masukkan berat badan, tinggi badan, dan usia dalam bentuk angka.');
        return;
    }
//kalo benar lanjut perhitungan
    const bmi = weight / (height * height);
    const kategori = getKategoriBMI(bmi);
//hasilnya disimpan disini
    document.getElementById('hasilBMI').textContent = `BMI Anda: ${bmi.toFixed(2)} (${kategori})`;
}
//pengecekan hasil masuk ke kategori mana
function getKategoriBMI(bmi) {
    if (bmi < 18.5) {
        return 'Kekurangan berat badan';
    } else if (bmi < 24.9) {
        return 'Normal (ideal)';
    } else if (bmi < 29.9) {
        return 'Kelebihan berat badan';
    } else {
        return 'Kegemukan (Obesitas)';
    }
}

//tombol resetnya 

function resetForm() {
    document.getElementById('beratBadan').value = '';
    document.getElementById('tinggiBadan').value = '';
    document.getElementById('usia').value = '';
    document.getElementById('hasilBMI').textContent = '';
}