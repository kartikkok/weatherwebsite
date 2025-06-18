console.log("hello66");
let obj={
    name: "kartik",
    age:24,
    weight:65,
    greet: function(a,b) {
        return a+b;

        
    }
}
let y=obj.greet(7,5);
console.log(y);
//array
let ajjrr=["love",6,7,8,9];
let brr=new Array("kkak",88,9,0);
console.log(brr[0]);
//use of map
let arr=[3,4,6,778];
let ansarray=arr.map((number)=>{return number*number});
console.log(ansarray);
//use of filer
//use to filter a list on a basis of a fucntion use full very
let arr1=[10,20,31,40];
let yss=arr1.filter((number)=>{
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }
})
console.log(yss);

