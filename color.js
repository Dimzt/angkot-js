// button
const button = document.getElementById('tUbahWarna');
button.addEventListener('click', function () {
  document.body.classList.toggle('merah-muda');
});

// create button
const buttonNew = document.createElement('button');
const textButton = document.createTextNode('Ubah Warna');
buttonNew.append(textButton);
// add attribut button
buttonNew.setAttribute('type', 'button');

button.after(buttonNew);

// events
buttonNew.addEventListener('click', function () {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

// range
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})