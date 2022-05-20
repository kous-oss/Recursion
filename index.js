// Recursion

// Print N to 1

function printForward(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printForward(n - 1);
}

//printForward(17);

// Print 1 to N
//Method-1 NOT A TAIL RECURSION
//(Recursion step should be the last step of the function)
function printBackWard(n) {
  if (n === 0) {
    return;
  }
  printBackWard(n - 1);
  console.log(n);
}

//printBackWard(17);

// Print 1 to N
//Method-2  A TAIL RECURSION
//(Recursion step should be the last step of the function)

function printBackWard2(start, n) {
  if (start > n) {
    return;
  }
  console.log(start);
  printBackWard2(start + 1, n);
}

printBackWard2(1, 17);

// Sum of Numbers using Recursion
function sum(index, curr, n) {
  if (index > n) {
    console.log(curr);
    return;
  }
  sum(index + 1, curr + index, n);
}

sum(1, 0, 5);

// String is Pallindrome or not
function palindrome(str, start, end) {
  if (start >= end) {
    return true;
  }

  return str[start] === str[end] && palindrome(str, start + 1, end - 1);
}

console.log(palindrome("aba", 0, 2));

// Sum of digits of a number

function sumD(n) {
  if (n < 10) {
    return n;
  }

  return (n % 10) + sumD(Math.floor(n / 10));
}

console.log(sumD(27526));

// Rope-Cutting problem

function maxCuts(n, a, b, c) {
  if (n === 0) {
    return 0;
  }
  if (n <= -1) {
    return -1;
  }

  let res = Math.max(
    maxCuts(n - a, a, b, c),
    Math.max(maxCuts(n - b, a, b, c), maxCuts(n - c, a, b, c))
  );

  if (res === -1) {
    return -1;
  } else {
    return res + 1;
  }
}

console.log(maxCuts(5, 2, 1, 5));

function generateSubsets(str, curr, index) {
  if (index === str.length) {
    console.log(curr);
    return;
  }

  generateSubsets(str, curr, index + 1);
  generateSubsets(str, curr + str[index], index + 1);
}

generateSubsets("abc".split(""), "", 0);

//TOWERS OF HANOI
function toH(n, src, aux, des) {
  if (n === 1) {
    console.log(`Disc 1 from ${src} to ${des}`);
    return;
  }

  toH(n - 1, src, des, aux);
  console.log(`Disc ${n} from ${src} to ${des}`);
  toH(n - 1, aux, src, des);
}

toH(3, "A", "B", "C");

//josephus
function jos(n, k) {
  if (n == 1) return 0;
  else return (jos(n - 1, k) + k) % n;
}

//generate sum of subsets
function generateSubsetsum(str, curr, index) {
  if (index === str.length) {
    console.log(curr.split("").reduce((a, b) => a + b));
    return;
  }

  generateSubsets(str, curr, index + 1);
  generateSubsets(str, curr + +str[index], index + 1);
}

generateSubsetsum("1234".split(""), 0, 0);

// palindrome
function permute(str, l, r) {
  if (l == r) document.write(str + "<br>");
  else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}

function swap(a, i, j) {
  let temp;
  let charArray = a.split("");
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

permute("ABC", 0, 2);
