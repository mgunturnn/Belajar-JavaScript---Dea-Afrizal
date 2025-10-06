// TUGAS BESAR
// 1. Membuat Perhitungan Matematika
function luasLingkaran(r) {
    let phi = 3.14;
    let luas = phi * r * r;
    return luas;
}

function luasSegitiga(a, t) {
    let luas = a * t / 2;
    return luas;
}

function LuasPersegiPanjang(p, l) {
    let luas = p * l;
    return luas;
}

function luasJajarGenjang(a, t) {
    let luas = a * t;
    return luas;
}

console.log("Luas Lingkaran: " + luasLingkaran(10));
console.log("Luas Segitiga: " + luasSegitiga(15, 20));
console.log("Luas Persegi Panjang: " + LuasPersegiPanjang(10, 5));
console.log("Luas Jajar Genjang: " + luasJajarGenjang(12, 5));