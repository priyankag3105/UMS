 //call by value
 function value(arg)
{
    console.log(arg);
}
value(106)


//call by reference

function reference(d)
{
  console.log(d);
}
let emp={
    name:"priyanka",
    salary:20000
}
reference(emp)