const button = document.getElementById('tUbahWarna');
button.addEventListener('click', function () {
  document.body.classList.toggle('merah-muda');
});

// create button
const buttonNew = document.createElement('button');
const textButton = document.createTextNode('Ubah Warna');
buttonNew.append(textButton);
// add attribut
buttonNew.setAttribute('type', 'button');

button.after(buttonNew);

// events
buttonNew.addEventListener('click', function () {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})