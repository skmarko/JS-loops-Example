//  For Loop Example
let n=0;
for(n; n<=10; n++){
    console.log(n)
}

//  DO while loop

let k =0;
 do{
     if(k===5){
     k+=1;
     continue;
 }
 console.log(k+1);
 k+=1;
 
}while(k<10){
console.log('done');}


let arrey = [100,120,20,300,500];

arrey.forEach(function(element){
    console.log(element);
})

for(let i=0; i<arrey.length; i++){
    const element = arrey[i];
    console.log(element);
}