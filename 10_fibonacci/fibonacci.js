const fibonacci = function(n) {
    let x1 = 1
    let x2 = 1
    for (let i = 3; i <= n;i++){
        m = x1
        x1=x2
        x2 = x2+m

    }
    if (n < 0) {return "OOPS"}
    else if (n ==0) {return 0}
    else if(n ==1) {return 1}
    else if(n ==2) {return 1}
    else{return x2}
};

// Do not edit below this line
module.exports = fibonacci;
