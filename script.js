const counters = document.querySelectorAll(".exp-card h2");


counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;


let speed=target/80;


let update=()=>{

if(count<target){

count+=speed;

counter.innerText=Math.ceil(count)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};


update();


});
