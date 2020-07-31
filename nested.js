let s = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    s += '*';
  }
  s += '\n';
}
for (let i = 0; i < 5; i++) {
  for (let j = i; j < 4; j++) {
    s += '*';
  }
  s += '\n';
}
console.log(s);