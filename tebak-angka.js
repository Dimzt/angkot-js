// looping
let nyawa = 3;
alert(`tebak angka dari 1 - 10\nkamu punya ${nyawa} kesempatan`);
// computer
let comp = Math.floor(Math.random() * 10) + 1;
while (nyawa > 0) {
  // player
  let p = prompt("masukkan angka tebakan :");


  // rules
  hasil = '';
  if (p > comp) {
    hasil = "TINGGI!";
    // end
    if (nyawa == 1) {
      alert(`terlalu ${hasil}\nkesempatan anda habis`);
      alert(`anda GAGAL!\nangka yang dicari adalah ${comp}`);
      break;
    }
    alert(`terlalu ${hasil}\nayo masih ada ${nyawa-1} kesempatan`);

  } else if (p < comp) {
    hasil = "RENDAH!";
    if (nyawa == 1) {
      alert(`terlalu ${hasil}\nkesempatan anda habis`);
      alert(`anda GAGAL!\nangka yang dicari adalah ${comp}`);
      break;
    }
    alert(`terlalu ${hasil}\nayo masih ada ${nyawa-1} kesempatan`);
  } else {
    alert(`anda BENAR!\nangka yang dicari adalah : ${comp}`);
    break;
  }

  nyawa--;
}


alert("terima kasih");