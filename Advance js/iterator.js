let count;
let deg ={
[Symbol.iterator]: function (){
    count=0;
  let iterator = {
  next: function(){
    count++;
    if(count == 1){ return {value: 'Information Technology', done:false}}
    else if(count == 2){ return{value:'computer science',done:false} }
    else if(count == 3){ return{value:'Mecahnical',done:false}}
    else if(count == 4){ return{value:'Civil',done:false}}
    else if(count == 5){ return{value:'Electrical',done:false}}
    else{ return{value:'departments', done:true}}
  }
}
return iterator
}
}
for(d of deg)
{
    console.log(d);
}