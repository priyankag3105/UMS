class Bank
{
    name; acno; type; bal;
    initialise()
    {
        this.name="Priyanka";
        this.acno=334455687612;
        this.type="Saving";
        this.bal=21000;
    } 
    depo(a)
    {
        this.deposite=a;
        this.bal=this.deposite+this.bal
    }
    withdraw(b)
    {
        this.withdraw=b
        if(this.bal<=1000)
        {
            console.log("Amount can not be withraw due to low balance")
        }
        else
        {
            this.bal=this.bal-this.withdraw
        }
    }
    print()
    {
        console.log(this.name);
        console.log(this.acno);
        console.log(this.type);
        console.log(this.bal);
    }
}
let bank1=new Bank()
bank1.initialise()
bank1.depo(4000)
bank1.withdraw(5000)
bank1.print()