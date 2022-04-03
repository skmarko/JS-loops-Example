console.log(" Funnction Exampe js");

let na = 'Sheetal';
let code= 'javacript';
let school = 'bijoriya';


 let mk =function(na,code,school,sk='lala sportsbuzz'){
let msg =`${na} Happy days are 2 stay foreverJust because you are togetherAnd brighter days are yet 2 comeFilled ${code} with laughter and ${school} fun.${sk}`;
return msg }


msg=mk(na,code,school);
console.log(msg)

// Object Create 

let obj ={
    name :'Dhoni',
    profesion : 'cricket',
    ipl:'Tata',
     virat : function(){
return 'Trophy'
    }
}
console.log(obj)
console.log(obj.virat())


ary = ['ipl','bbl','PSl','CPL']
ary.forEach(function(element,index,array) {
    console.log(element,index)
    
});

// Scope Example

if(1){
    var i =200;
    console.log(i);
}
console.log(i)

function lal(lalu){
    let i= 100;
    return `focus on Procces not result ${lalu}`
}
console.log(lal('Sheetal'))


array =['virat', 'dhoni','kihli', 'rishab']

array.forEach(function(element ,index,array){
    console.log(index,element);
})
