class Customer
{
   private _firstName: string;
   private _lastName: string;

   public get firstName(): string
   {
    return this._firstName; 
   }
   public set firstName(value: string)
   {
    this._firstName=value; 
   }
   public get lastName(): string
   {
    return this._lastName; 
   }
   public set lastName(value: string)
   {
    this._lastName=value; 
   }
}

let customer=new Customer();
customer.firstName="Private Access";
customer.lastName="Modifiers";
console.log("Program Name: \n"+customer.firstName+" "+customer.lastName+" "+"Program");
