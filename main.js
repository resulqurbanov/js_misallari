// 1ci misal

let arr = [1, 25, 244, 44, 55, 22, 64]
let sum = 0;
let ededi_orta = 0;
function orta() {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return ededi_orta = sum / arr.length
}
console.log(orta(arr));

// 2ci misal
const array = [1,5,2,7]
arr.push(32)
console.log(array)

// 3cu misal

let str = "Salam Necesen";
let count = 0;
function sayi() {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "N") {
            count++
        }
    }
    return count
}
console.log("n herfinin sayi  " + sayi(str) + "denedir");

// 4cu misal

let letter = "TFuhuTTuHUH";
let metn= Array.from(letter)
let lower = 0;
let upper = 0;
for (let i = 0; i < metn.length; i++) {
    if (metn[i].toUpperCase() == metn[i] ) {
        upper++
    }
    else if ( metn[i].toLowerCase() == metn[i]){
        lower++
    }
}
if (lower >= 1 && upper>=1 ){ 
        console.log("true")
}
else{
    console.log("false")
}