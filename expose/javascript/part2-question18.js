let t=setInterval(()=>{
    let d=new Date();
    let time =d.toLocaleTimeString();
    console.log(time);
},1000);
setTimeout(()=>{
    clearTimeout(t);

},60000);
