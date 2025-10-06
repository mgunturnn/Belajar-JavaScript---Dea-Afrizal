// 2. Menghitung total gaji yang didapatkan dalam satu bulan dengan input berikut:
//    - Nama Karyawan
//    - Gaji Perhari
//    - Jumlah Hari Masuk Kerja

function totalGaji() {
    const nama = document.getElementById("namaKaryawan").value;
    const gajiPerHari = document.getElementById("gajiPerHari").value;
    const jumlahHariMasuk = document.getElementById("jumlahHariMasuk").value;

    const total = gajiPerHari * jumlahHariMasuk;
    alert(`Halo ${nama}, total gaji yang kamu dapatkan adalah Rp ${total}`);
}
