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

function clear(){
    res.innerHTML="";
}
function eql(){
    let expr = res.innerHTML;
    // Replace tous les numérique base 2 avec base 10
    expr = expr.replace(/(\d+)/g, function(match) {
        return parseInt(match, 2);
    })
    // eval base 10 et convert à base 2
    res.innerHTML = parseInt(eval(expr)).toString(2);
}
function add(){
    res.innerHTML+=this.value;
}