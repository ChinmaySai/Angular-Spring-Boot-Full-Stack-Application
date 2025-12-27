var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
var customer = new Customer("Chinmay", "Sai");
//customer.firstName="Chinmay";
//customer.lastName="Sai";
console.log("Customer Name: " + customer.firstName + " " + customer.lastName);
