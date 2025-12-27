class CustomerWithConstructor
{
    firstName: string;
    lastName: string;

    constructor(theFirstName: string,theLastName: string)
    {
        this.firstName=theFirstName;
        this.lastName=theLastName;
    }
}

let newCustomer=new CustomerWithConstructor("George","Sai");
console.log("Customer Name: "+newCustomer.firstName+" "+newCustomer.lastName);
