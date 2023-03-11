class laptop
{
   constructor(name,ram,price)
   {
      this.name=name
      this.ram=ram
      this.price=price
   }
   show()
   {
    console.log(this.name,this.ram,this.price);
   }
}

let l1=new laptop('hp','8GB',50000);
let l2=new laptop('acer','8GB',50000);
let l3=new laptop('lenovo','8GB',55000);

l1.show()
l2.show()
l3.show()