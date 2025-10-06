// 1. Buat looping dari suatu variabel bertipe array, contoh x = [3,5,12]
// 2. Lakukan looping untuk menjumlahkan semua isi array
// 3. Tampilkan hasil penjumlahan tersebut

const x = [3, 5, 12];
let total = 0;

for (let i = 0; i < x.length; i++) {
    total += x[i];
}
console.log(`Total penjumlahan array adalah ${total} karena ${x.join(' + ')} = ${total}`);