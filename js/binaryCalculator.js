let res=document.getElementById("res");
let btns=document.querySelectorAll("button");
for (const btn of btns){
    if (btn.id=="btnClr"){
        btn.addEventListener("click",clear);
    }else if (btn.id=="btnEql"){
        btn.addEventListener("click",eql);
    }else{
        btn.addEventListener("click",add);
    }
}
function add(){
    res.innerHTML+=this.value;
}
function clear(){
    res.innerHTML="";
}
function eql(){
    let expr = res.innerHTML;
    expr = expr.replace(/(\d+)/g, function(match) {
        return parseInt(match, 2);
    })
    res.innerHTML = eval(expr).toString(2);
}