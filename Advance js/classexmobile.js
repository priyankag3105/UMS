class mobile
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
let m1=new mobile('SAMSUNG','8GB',30000)
let m2=new mobile('VIVO','8GB',20000)
let m3=new mobile('OPPO','6GB',18000)

m1.show()
m2.show()
m3.show()