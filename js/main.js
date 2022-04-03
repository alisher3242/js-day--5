//assignment  operators

let a = 7;
console.log(a = 8); //8
console.log(a += 5); //13
console.log(a -= 5); //8
console.log(a *= 2); //16
console.log(a /= 4); //4
console.log(a %= 3); //1
console.log(a ** 3); //1


//arifmetic operators

let x = 5, y = 6;
console.log(x + y); //11 
console.log(x - y); //-1
console.log(x * y);// 30
console.log(x / y);// 0.8333333
console.log(x % y);// 5

console.log(x++);//5
console.log(x)//6
console.log(++x);//7

console.log(y--);//6
console.log(y);//5
console.log(--y);//4

console.log(x ** y);// 2401

//solishtiruv operators
let b = 5, z = '5';
console.log(b == z); //true
console.log(b != z);// false
console.log(b === z); //false
console.log(b !== z);//true
console.log(b > z); //false
console.log(b >= z); //true
console.log(b < z); //false
console.log(b <= z);// true


//logical operators

let c = 5, d = 0;
console.log(c && d); // 0 qiymat qaytaradi false bo'lgani u-n
console.log(c || d);// 5 qiymat qaytaradi true bo'lgani u-n
console.log(!c); // false
console.log(!d);// true

//string operators

let l = 'Java';
console.log(l += 'Script'); // JavaScript
let name = 'Alisher'
console.log(name += ' Tojimov');

//boshqa operatorlar
let nums = (1, 2, 3, 5);
console.log(nums); //5

let n = 5;
(5 < n) ? console.log("error") : (5 > n) ? console.log("error repeat") : console.log("!!!"); //!!!
let text = "Hello World"
console.log(typeof text);

let university = {
    faculity : "Kif",
    student: "Alisher",
    kurs: 3
};
console.log('pupil' in university);// false
console.log('student' in university);//true

let f = Array(1,2,3,4);
console.log(f instanceof Array);//true


//math library

console.log(Math.floor(4.9));//4
console.log(Math.ceil(4.4)); //5
console.log(Math.round(4.4));//4
console.log(Math.round(4.5));//5
console.log(Math.random()*100);//56....
let g = 1.4334545
console.log(g.toFixed(3));//1.433

//if else

let = passport = true;
let = student = false;
let = developer = false;


if (passport && developer) {
    console.log("Siz bemalol domen olishingiz mumkin");
} else if( student || developer) {
    console.log("Siz dasturchi bo'lishingiz zarur!");
} else{
    console.log("Uzur sizga domen bera olmaymiz");
}