//closure
let p,q
function fun()
{
    p=50;
    q=20;
   function fun1()
   {
      r=p+q;
      console.log(r);
   }
   fun1()
}
fun()

console.log("after execution of function:" +r);