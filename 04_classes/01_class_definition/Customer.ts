class Customer
{
    firstName: string;
    lastName: string;

    constructor(theFirstName: string,theLastName: string)
    {
        this.firstName=theFirstName;
        this.lastName=theLastName;
    }
}

let customer=new Customer("Chinmay","Sai");
//customer.firstName="Chinmay";
//customer.lastName="Sai";
console.log("Customer Name: "+customer.firstName+" "+customer.lastName);
