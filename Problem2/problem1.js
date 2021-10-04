process.stdin.resume();
process.stdin.setEncoding('utf8');

var strs = [];

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', (line) => {
  strs.push(line);
});

reader.on('close', () => {
  var first = strs[0].split(' ');
  var A = strs[1].split(' ');
  var n = first[0];
  var N = first[1];

  var l = false;
  var r = false;

  for (var i = 0; i < n; i++) {
    if (A[i] == N) {
      l = true;
      r = true;
    }
    if (A[i] > N) {
      r = true;
    }
    if (A[i] < N) {
      l = true;
    }
  }

  if (l && r) {
    console.log('Yes');
  } else {
    console.log('No');
  }
});
