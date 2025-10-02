// TUGAS KECIL

/** 
1. Prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. Menentukan hari dari tanggal yang ada saat ini di pc
 */

// 1. Prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
let saldoAwal = prompt("Masukkan saldo awal anda:");
let saldoTambahan = prompt("Masukkan saldo tambahan anda:");
const saldoAkhir = parseInt(saldoAwal) + parseInt(saldoTambahan);
alert(`Saldo akhir anda adalah Rp.${saldoAkhir}`);

// 2. Menentukan hari dari tanggal yang ada saat ini di pc
let hari = new Date().getDay();

switch (hari) {
    case 0:
        console.log("Hari ini adalah Minggu");
        break;
    case 1:
        console.log("Hari ini adalah Senin");
        break;
    case 2:
        console.log("Hari ini adalah Selasa");
        break;
    case 3:
        console.log("Hari ini adalah Rabu");
        break;
    case 4:
        console.log("Hari ini adalah Kamis");
        break;
    case 5:
        console.log("Hari ini adalah Jumat");
        break;
    case 6:
        console.log("Hari ini adalah Sabtu");
        break;
    default:
        break;
}