class PrivateAccessGetterSetterTraditonalApproach
{
   private firstName: string;
    private lastName: string;

    public getFirstName(): string
    {
        return this.firstName;
    }
    public setFirstName(fName: string) : void
    {
        this.firstName=fName;
    }

    
}

let privateAccessGetterSetterTraditonalApproach=new PrivateAccessGetterSetterTraditonalApproach();
privateAccessGetterSetterTraditonalApproach.setFirstName("Chinmay Program for PrivateAccessGetterSetterTraditonalApproach");
console.log(`PrivateAccessGetterSetterTraditonalApproach ${privateAccessGetterSetterTraditonalApproach.getFirstName()}`);
//log