test=[];
test.filter((e,i)=>{
return e<8
});

sum= test.split('').reduce((acc,curr,i)=>{
    if(i%2==0){
        return acc+parseInt(curr)
    }
    return acc
},0)

sum2= test.split('').reduce((acc,curr,i)=>{
    if(i%2!=0){
        return acc+parseInt(curr)
    }
    return acc
},0)
n=((sum*3)+sum2)%10
if(n==0)
return n-10
else
return 0

a.sort((a,b)=>{
    b-a
})
60-(60*1.3)
select firstname,lastname
from basket..
where pp>20.0 and apg >=50 and rpg>=50 and games<=65
order by lastname asc

let sum=0
for(let i=n1;i<=n2;i++){
sum+=i
}
return sum