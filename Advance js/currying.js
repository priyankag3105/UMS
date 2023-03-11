//currying

function fun(arg)
{
   return  function(key)
   {
        return arg[key];
   }
}
let details= {
    name:"Priyanka",
    city:"Aurangabad"
}
let info=fun(details)("city");
console.log(info);