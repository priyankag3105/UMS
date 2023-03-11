//lexical scope
let p=10;
function fun()
{ 
    let q=20;
    function fun1 ()
    {
         let r=30;
        function fun2 ()
        {
               console.log(p+q+r);
        }
        fun2()
    }
    fun1()
} 
fun()
