let reviews: number[] = [5, 4, 5, 3, 4];

let total: number = 0;
for(let i=0;i<reviews.length;i++)
{
    total += reviews[i];
    console.log(`Review ${i}`,reviews[i]);
}

let avg : number=total/reviews.length;
console.log(`Average Review: ${avg}`)