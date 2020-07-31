// looping
let tanya = true;
while (tanya) {

  // player
  let p = prompt("pilih : gajah, orang, semut");

  // algoritma computer
  let comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // rules game
  let hasil = '';
  if (p === comp) {
    hasil = "SERI!";
  } else if (p === "gajah") {
    hasil = (comp === "orang") ? "MENANG!" : "KALAH!";
  } else if (p === "orang") {
    hasil = (comp === "semut") ? "MENANG!" : "KALAH!";
  } else if (p === "semut") {
    hasil = (comp === "gajah") ? "MENANG!" : "KALAH!";
  } else {
    hasil = "Anda memasukan pilihan yang salah!";
  }

  // interface
  alert(`Kamu memilih : ${p} dan Komputer memilih : ${comp}` + `\n Kamu ${hasil}`);


  // end looping?
  tanya = confirm("Ingin mencoba lagi?");
}

// game over
alert("Terima kasih telah bermain!");