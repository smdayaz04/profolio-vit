const add=(a,b)=>a+b
const incremintandadd=(a,b,fun)=>{
    a+=1
    b+=1
    return fun(a,b)
}
console.log(incremintandadd(3,4,add))