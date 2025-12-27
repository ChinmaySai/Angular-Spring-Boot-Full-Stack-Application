var PrivateAccessGetterSetterTraditonalApproach = /** @class */ (function () {
    function PrivateAccessGetterSetterTraditonalApproach() {
    }
    PrivateAccessGetterSetterTraditonalApproach.prototype.getFirstName = function () {
        return this.firstName;
    };
    PrivateAccessGetterSetterTraditonalApproach.prototype.setFirstName = function (fName) {
        this.firstName = fName;
    };
    return PrivateAccessGetterSetterTraditonalApproach;
}());
var privateAccessGetterSetterTraditonalApproach = new PrivateAccessGetterSetterTraditonalApproach();
privateAccessGetterSetterTraditonalApproach.setFirstName("Chinmay Program for PrivateAccessGetterSetterTraditonalApproach");
console.log("PrivateAccessGetterSetterTraditonalApproach ".concat(privateAccessGetterSetterTraditonalApproach.getFirstName()));
//log
