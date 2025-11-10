console.log("parameterized and Non-parameterized  function:");
//function declaration
//function function-name()
//{
   //block of code ;
//}
var p="Iam demo";
// Non parameterized function
function addition()
{
    var x=12;
    var y=20;
    var a=x+y;
    console.log(a);
    console.log("this is non parametrized function:",a);
    console.log(" it is correct"+p);
}
addition();//32
//parameterized function:
function  subtraction(x,y)
{
    var b=x-y;
    console.log(b);
    console.log("this is parametrized function",b);
    console.log("it is corrects"+p);
}
subtraction(12,60);
