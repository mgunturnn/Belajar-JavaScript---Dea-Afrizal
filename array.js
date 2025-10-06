// const arrayBuah = ["Pisang", "Jeruk", "Apel", "Mangga", "Semangka"];

// const cekBuah = arrayBuah.includes("Apel"); // cek apakah ada buah "Apel" di dalam arrayBuah

// if (cekBuah) { // cek apakah variabel cekBuah bernilai true?
//     const posisiBuah = arrayBuah.indexOf("Apel"); // cari posisi buah "Apel" di dalam arrayBuah
//     const indexBefore = posisiBuah - 1; // cari index sebelum posisi buah "Apel"
//     const indexAfter = posisiBuah + 1; // cari index setelah posisi buah "Apel"
//     const buahBefore = arrayBuah[indexBefore]; // cari buah sebelum posisi buah "Apel"
//     const buahAfter = arrayBuah[indexAfter]; // cari buah setelah posisi buah "Apel"
//     console.log(`Buah sebelum Apel adalah ${buahBefore}`);
//     console.log(`Buah setelah Apel adalah ${buahAfter}`);
//     const buahAwal = arrayBuah.shift(); // hapus buah paling awal di dalam arrayBuah
//     console.log(`Buah yang dihapus adalah ${buahAwal}`);
//     const buahAkhir = arrayBuah.pop(); // hapus buah paling akhir di dalam arrayBuah
//     console.log(`Buah yang dihapus adalah ${buahAkhir}`);
//     console.log(`Sisa buah sekarang adalah ${arrayBuah}`);
// } else {
//     console.log("Buah yang dicari tidak ada");
// }

// const arrayBuah = []

// arrayBuah['alpukat'] = 'hijau';
// arrayBuah['anggur'] = 'ungu';
// arrayBuah['jeruk'] = 'oranye';

// console.log(arrayBuah);

// const arrayBuah = ["Pisang", "Jeruk", "Apel", "Mangga", "Semangka"];
// const newArrayBuah = arrayBuah.slice();

// newArrayBuah[0] = "Durian";

// console.log(arrayBuah);
// console.log(newArrayBuah);

// const arrayBuah = [
//   "Pisang",
//   10,
//   {
//     tomato: function () {
//       console.log("Tomat bukan buah");
//     },
//   },
//   [10, "Semangka"],
// ];

// arrayBuah[2].tomato();

// const arrayBuah = ["Pisang", "Jeruk", "Apel"];
// const arraySayur = ["Bayam", "Wortel", "Buncis"];

// const mergeArray = arrayBuah.concat(arraySayur);

// console.log(mergeArray);

// for (list of arrayMakanan) console.log(list);

// for (list in arrayMakanan) console.log(list);

// mergeArray.map((value, index) => console.log(index, value));

const datas = [
  {
    name: "guntur",
    stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    age: 22,
  },
  {
    name: "guntur",
    stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    age: 15,
  },
  {
    name: "guntur",
    stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    age: 45,
  },
  {
    name: "guntur",
    stack: ["HTML", "CSS", "JavaScript", "ReactJS"],
    age: 30,
  },
];

// datas.map((values, index) => {
//     console.log(values.name, values.stack);
// })

// datas.sort((a,b) => b.age - a.age).map((values) => console.log(values));

// datas.filter((x) => x.age > 30).map((values) => console.log(values));

datas
  .sort((a, b) => b.age - a.age)
  .filter((x) => x.age > 30)
  .map((values) => console.log(values));
