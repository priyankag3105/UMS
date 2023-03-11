function fun()
{
    return function(){
        console.log("i am higher order function");
    }
}
fun()();