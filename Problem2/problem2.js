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
  var t = strs[0];
  for (var i = 0; i < t; i++) {
    var li = strs[i + 1].split(' ');
    var a = li[0];
    var b = li[1];
    var c = li[2];
    if (
      (a > c && c > b) ||
      (b > a && a > c) ||
      (b > c && c > a) ||
      (c > a && a > b)
    ) {
      console.log(0);
    } else {
      var cnt = 0;
      var mn = 0;
      var eq = 0;
      if (a == c) {
        eq = 1;
      }
      mn = Math.min(a, c);
      mn -= eq;
      cnt = b - mn + 1;
      b -= cnt;
      cnt += eq;
      if (mn <= 0 || b <= 0) cnt = -1;

      console.log(cnt);
    }
  }
});
