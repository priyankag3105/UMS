function calculation(a,b,myfun){
    myfun(a,b)
}
function addition(p,q)
{
    console.log("Addition::",p+q);
}
function substraction(r,s)
{
    console.log("Substraction::",r-s);
}
function multiplication(t,u)
{
    console.log("Multiplication::",t*u);
} 
function division(v,w)
{
    console.log("Division::",v/w);
}
calculation(2,3,addition)
calculation(10,4,substraction)
calculation(5,6,multiplication)
calculation(12,4,division)