function hitungJumlahKarakter() {
    // Ambil nilai dari input
    const inputString = document.getElementById('inputString').value;
  
    // Hitung jumlah karakter
    const jumlahKarakter = inputString.length;
  
    // Tampilkan hasil
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Jumlah karakter: ${jumlahKarakter}`;
  }
  