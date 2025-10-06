for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`data ke-${i}`); // menampilkan data genap
    }
}

let x = 1;
while (x <= 10) {
    if (x % 2 !== 0) {
        console.log(`data ke-${x}`); // menampilkan data ganjil
    }
    x++;
}

let y = 1;
do {
    if (y % 2 === 0) {
        console.log(`data ke-${y}`); // menampilkan data genap
    }
    y++;
} while (y <= 10);