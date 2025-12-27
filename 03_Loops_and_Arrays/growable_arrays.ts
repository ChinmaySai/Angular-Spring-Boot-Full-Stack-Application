let sportT : String []=["Cricket","Football","Hockey"];

sportT.push("Tennis");
sportT.push("Badminton");   

for(let i=0;i<sportT.length;i++)
{
    console.log(`Sport ${i} ---> ${sportT[i]}`);
}   

for(let sport of sportT)
{
    console.log(`Sport : ${sport}`)
}