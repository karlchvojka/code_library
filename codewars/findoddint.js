var A = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

function findOdd(A) {
    var a = [], b = [], prev;

    A.sort();
    for ( var i = 0; i < A.length; i++ ) {
        if ( A[i] !== prev ) {
            a.push(A[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = A[i];
    }

    return [a, b];
}

var result = findOdd(A);
console.log(result);
var totalRes = result[0];
return totalRes;
