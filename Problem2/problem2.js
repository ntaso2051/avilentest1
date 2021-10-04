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
    var a = Number(li[0]);
    var b = Number(li[1]);
    var c = Number(li[2]);
    if (
      (a > c && c > b) ||
      (b > a && a > c) ||
      (b > c && c > a) ||
      (c > a && a > b)
    ) {
      console.log(0);
    } else if (b > a && b > c) {
      if (a == c && a != 1) {
        console.log(1);
      } else {
        console.log(-1);
      }
    } else if (a > b && c > b) {
      if (a - 1 != b) {
        console.log(1);
      } else {
        if (a - 3 <= 0) {
          console.log(-1);
        } else {
          console.log(5);
        }
      }
    } else if (a == c && b == a) {
      if (a - 2 <= 0) {
        console.log(-1);
      } else {
        console.log(3);
      }
    } else {
      var mn = Math.min(a, c);
      var mx = Math.max(a, c);
      var cnt1 = b - mn + 1;
      var cnt2 = mx - b + 1;
      if (mn - 1 <= 0) {
        cnt1 = -2;
      }
      if (b - 1 == mn && mn - 1 <= 0) {
        cnt2 = -2;
      } else if (b - 1 == mn) {
        cnt2++;
      }

      if (cnt1 < 0 && cnt2 < 0) {
        console.log(-1);
      } else {
        if (cnt1 < 0) ans = cnt2;
        else if (cnt2 < 0) ans = cnt1;
        else ans = Math.min(cnt1, cnt2);
        console.log(ans);
      }
    }
  }
});
