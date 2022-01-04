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
    var expr = res.innerHTML;
    var nums = /(\d+)/g;
    // Replace all base 2 nums with base 10 equivs
    expr = expr.replace(nums, function(match) {
        return parseInt(match, 2);
    })
    // eval in base 10 and convert to base 2
    res.innerHTML = eval(expr).toString(2);
}