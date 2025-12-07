let sports : String[] = ["Cricket","Football","Hockey","Tennis"];

for(let i=0;i<sports.length;i++)
{
 console.log(`sports ${i}   ---> ${sports[i]}`);
}

//Simplied for loop
for(let sport of sports)
{
    if(sport =="Cricket")
    {
        console.log("Cricket is my favourite sport");
    }
    else{
 console.log(`Sport : ${sport}`)  
    } 
}
console.log()