class car
{
    constructor(carname,price,fueltype,seatingCapacity)
    {
        this.carname=carname
        this.price=price
        this.fueltype=fueltype
        this.seatingCapacity=seatingCapacity
    }
    display()
    {
        console.log(this.carname,this.price,this.fueltype,this.seatingCapacity);
    }
}
let c1=new car('Kia Sonet',900000,'Diesel',5)
let c2=new car('Maruti Ertiga',1100000,'Petrol',7)
let c3=new car('Toyota Fortuner',4000000,'Diesel',7)

c1.display()
c2.display()
c3.display()