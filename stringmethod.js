// //4 point
//ASCII=>American standard code for information interchange
// string method
// string property
// length
// typeof

// method
// valueof
// charAt
// charCodeAt
// toUpperCase
// toLowerCase
// replace
// replaceAll
// split
// includes
// indexOf
// LastIndexOf
// / concatenation
// at TBD
// slice
// /substring
// trim
// trimStart
// trimEnd
// repeate
// search
// padStart TBD
// padEnd  TBD

// substr
// startsWith
// endsWith
// match
// matchAll TBD
// parseInt
var str='Hello   Hello   js     ';
var str1='js';
console.log(str.length);//length start from 1
console.log(typeof str);//
//1.valueOf
console.log(str.valueOf());
//2.charAt
console.log(str.charAt(90));//is the present in index then return char h othen not present /not awailble index then return 
// black space
//3.charCodeAt
console.log(str.charCodeAt(10));//it is present in index then return asky value  othen wise not found the string then eturn 
// NAN 
//4.to UpperCase
console.log(str.toUpperCase());
//5. LowerCase
console.log(str.toLowerCase());
//6.replace
//str.replace(seracvalue,new value);
console.log(str.replace('hello','hi'));//repalce will replace the first occurance & if not found return 
//original string
//7.replaceAll
// console.log(str.replaceAll('Hello','hi'));
// //8.split('')
// console.log(str.split());//string to convert the array [ 'Hello Hello js' ]
// console.log(str.split(''));//[ 'Hello Hello js' ]
// [
//   'H', 'e', 'l', 'l',
//   'o', ' ', 'H', 'e',
//   'l', 'l', 'o', ' ',
//   'j', 's'
// ]


// //9.includex
// console.log(str.includes('hello',0));//itis possible then return true otherwise return false
//10 indexOf
// console.log(str.indexOf('Hyyyy'));//0 first index of the occuranceotherwise string/char not found then 
// //  return -1
// //11LastIndexOf
// console.log(str.lastIndexOf('H'));//6
// //12.concatenation
// console.log(str+str1);
// //13.slice
//syntax:string .slice(startindex,end index-1);
console.log(str.slice(3,0));

//14.substring
//string.substring(start,end);
console.log(str.substring(5,4));//start index>end index then swap the string
//does not support negative value to covet the negative to  0
//15.trim
console.log(str.trim());
//16.trimStart
console.log(str.trimStart());
//17.trimEnd
console.log(str.trimEnd());
//18.repeat
//string.repeat(count);
console.log(str1.repeat(4));
//19.search
// string.serch(serchValue);
console.log(str.search('Hello'));//1//
console.log(str.search('hello'));//-1
// searchValue → एखादा शब्द किंवा RegExp pattern असतो.

// तो सापडला तर त्याची starting index परत केली जाते.

// न सापडल्यास → -1 परत येतो.
//20.match
//syntax :string.match(regexpre);
// 📌 Output काय असतो?
// स्थिती	परिणाम
// जर pattern सापडला	Array मिळते (मिळालेला मजकूर, इतर माहिती)
// जर सापडला नाही	null परत येतो
// console.log(str.match('Hello'));//[
// //   'Hello',
// //   index: 0,
// //   input: 'Hello   Hello   js     ',
// //   groups: undefined
// // ]
// console.log(str.match('hello'));//null
//21.matchAll
console.log(str.matchAll('Hello'));//Object [RegExp String Iterator] {}
//22.parseInt
//syntax:parseInt(string,redix);
let num=parseInt('123');
console.log(num);
let num1=parseInt('123kg');
console.log(num1);
let num2=parseInt('hello123');
console.log(num2);//NaN
let num3=parseInt('12010',2);//binary to covert decimal number=>10
console.log(num3);
//23.// substr
// startsWith
// endsWith
//substr
let result='hello javascript';
let result1=result.substr(0,3);
console.log(result1);
//startWith
//string.startsWith(searchString, position)
//घटक	अर्थ
// searchString	तपासायचं सुरुवातीचं अक्षर/शब्द
// position	कुठून तपासायचं (optional, default 0)
///startWith
// console.log(result.startsWith('javascript'));//start index is possible the n return true other wise 
// return false

//endsWith
//string.endsWith(searchString, length)
// console.log(result.endsWith('hello'));//it is to check the string last string is 
// possible then return true otherwise return false