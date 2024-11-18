function countPrimeNumbers() {
    var result = 0;
    

        // We only need to check up 
        for (var i=2; i<=100; i++) {
                for (let n = 2; n <= i; n++) {

            if (n % i === 0) {
                // This number is evenly divisible by i, it is not prime.
                result = result;
                
            }
            result += 1
        }
    }
    
    return result;
}
var time1 = performance.now();
countPrimeNumbers();
var time2 = performance.now();
console.log(`Execution time of printing countPrimeNumbers 100 was ${time2 - time1} milliseconds.`);
