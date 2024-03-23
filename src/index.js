const prime = (n) => {
  let primeArr = [];
  primeFound: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue primeFound;
    }
    primeArr.push(i);
  }
  console.log("prime- ", primeArr);
};
prime(10);
