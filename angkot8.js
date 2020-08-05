// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.tambahPenumpang = namaPenumpang => {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  }

  this.hapusPenumpang = (namaPenumpang, bayar) => {
    if (this.penumpang.length === 0) {
      alert('Angkot masih kosong!');
      return false;
    }

    for (i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  }
}

const angkot1 = new Angkot("Dimas Nurhilman", ["Cicaheum", "Cibiru"], [], 0);
const angkot2 = new Angkot("Tom Holland", ["Antapani", "Ciroyom"], [], 0);