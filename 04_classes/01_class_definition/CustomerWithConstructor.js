var CustomerWithConstructor = /** @class */ (function () {
    function CustomerWithConstructor(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return CustomerWithConstructor;
}());
var newCustomer = new CustomerWithConstructor("George", "Sai");
console.log("Customer Name: " + newCustomer.firstName + " " + newCustomer.lastName);
