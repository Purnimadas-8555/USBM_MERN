//concatenation(merge)
 let fruits=["apple","orange","banana"];
let addArray= fruits.concat(["strwaberry","dragon-fruit"]);
console.log(addArray);
console.log(fruits.includes("apple"));       //include method

// *slice() *//
const animals =['ant','bison','camel','duck','elephant'];
const slice= animals.slice(1,4);
console.log(slice);

//*splice*//

const months=['jan','march','april','june'];
months.splice(3,0,'feb');
console.log(months)

//*foreach()*//

const array1=[1,2,3,4,5];
// for(let i=0;i<array1.length;i++); {
//     let array2=array1[i]*2;
//     console.log(array2);
// }
//for each
array1.forEach((e)=>{
    console.log(e*2)
});




