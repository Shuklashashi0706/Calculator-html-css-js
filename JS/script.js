let doc=document.body.firstElementChild.firstElementChild.firstElementChild;
let doc1=document.getElementById('num-1');
console.log(doc1);
let doc2=document.getElementById('num-2');
console.log(doc2);
f1=()=>{
    doc.value=2;
}
f=()=>{
    doc.value=1;
}
let btn = document.getElementsByClassName('btn');
console.log(btn[0].id);
for(let k=0;k<btn.length;k++){
    let t=btn[k];
    console.log(btn[k]);
    console.log(t.id);
}
onclick=()=>{
    if(doc.id=='num-1'){
        f();
    }
}
let f=()=>{
    document.body.style.color='red';
}
setTimeout(f,2000);