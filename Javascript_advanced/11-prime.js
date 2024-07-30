function countPrimeNumbers() {
    var result = 0;


        for (var i=2; i<=100; i++) {
                for (let n = 2; n <= i; n++) {

            if (n % i === 0) {
                // This number is evenly divisible by i, so it is not prime.
                result = result;
            }
            result += 1
        }
    }

    return result;
}
function way() {
    var time1 = performance.now();
    setTimeout(() => {
        let i;
        for (i = 0; i < 100; i++) {
            countPrimeNumbers();
        }
    }
        , 0)
    var time2 = performance.now();

    console.log(`Execution time of calculating prime numbers 100 times was ${time2 - time1} milliseconds`);
}

way();
