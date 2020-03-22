// function eval() {
//     // Do not use eval!!!
//     return;
// }

// function expressionCalculator(expr) {
//     // write your solution here
// }

// module.exports = {
//     expressionCalculator
// }

// -----------------test in browser------------------
function simpleCalc(arr){
    let res = 0;
    let temp;
    for (let i = 0; i < arr.length; i++){
        if (arr[i]  == '*' || arr[i]  == '/'){
            if(arr[i]  == '*'){
                res = Number(arr[i - 1]) * Number(arr[i + 1]);
                arr.splice(i - 1, 3, res);
                i = 0;
            }
            else {
                res = Number(arr[i - 1]) / Number(arr[i + 1]);
                arr.splice(i - 1, 3, res);
                i = 0;
            }
            
        }
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i]  == '+' || arr[i]  == '-'){
            if(arr[i]  == '+'){
                res = Number(arr[i - 1]) + Number(arr[i + 1]);
                arr.splice(i - 1, 3, res);
                i = 0;
            }
            else {
                res = Number(arr[i - 1]) - Number(arr[i + 1]);
                arr.splice(i - 1, 3, res);
                i = 0;
            }
            
        }
    }


    return arr[0]
}
function expressionCalculator(expr){
    let arr = [];
    
    if (expr.includes(' ')){
        arr = expr.split(' ');
    for (let i = 0; i < arr.length;){
        if (arr[i] == ""){
            arr.splice(i, 1);
            i = 0;
        }
        else {
            i++;
        }
    }
    }
    else{
        arr = expr.split('');
    }
    console.log(arr);
    let res;
    let temp;
    let stop;
    let tempArr = [];
    
    
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] == '('){
            tempArr = [];
            for (let j = i + 1; j < arr.length; j++){
                if(arr[j] == ')'){
                    for(let y = 0; y < j - i - 1; y++){
                        tempArr[y] = arr[i + y + 1];

                        
                        
                        
                    }
                    if (!isFinite(simpleCalc(tempArr))){
                        throw "TypeError: Division by zero.";
                    }

                    arr.splice(i, j - i + 1, simpleCalc(tempArr));
                    console.log(arr);
                    debugger;
                    break;
                    
                    
                    

                }
            }
            i = arr.length - 1;
        }
    }
    simpleCalc(arr);
    for(let i = 0; i < arr.length; i++){
        if (isNaN(arr[i])){
            throw "ExpressionError: Brackets must be paired"
        }
    }

    res = arr[0];
    if (!isFinite(res)){
        throw "TypeError: Division by zero.";
    }
    console.log(arr);
    res = (Math.round(res * 10000) / 10000);
    return res
}

// console.log(expressionCalculator(" 31 * 21 + 14 / (  (  18 * 52 / (  43 - 74 / 89 - 12  ) + 8  ) + 3 / 0 + (  9 + 81 + 19 * 94 / (  0 * 71 + 53 - 20 * 94  )  )  ) "))
// console.log(expressionCalculator("39.02569832402235 + 3 / 0 + 89.0224411603722"))


module.exports = {
    expressionCalculator
}





