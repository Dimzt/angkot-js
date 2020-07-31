let s = '';
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < i; k++) {
    s += ' ';
  }
  for (let j = i; j < 5; j++) {
    s += '*';
  }
  s += '\n';
}

console.log(s);