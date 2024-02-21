var delbt= Array.from(document.querySelectorAll("#dltbtn"))
var cards= (document.querySelectorAll(".cards"))
var heart= document.querySelectorAll(".fa-heart")


//delete button

for (let i in delbt ) {
    delbt[i].addEventListener("click" , function () {
        cards[i].remove();
        sold()
    })
}
// price total
var qte= (document.querySelectorAll(".qte"))
var prixu= (document.querySelectorAll(".prixu"))
var prixt= (document.querySelectorAll(".prixt"))
var minbt= (document.querySelectorAll(".minbt"))
var maxbt= (document.querySelectorAll(".maxbt"))
var prixf= (document.querySelectorAll (".prixf"))

for (let  i=0 ; i< maxbt.length;i++) {
    let a=maxbt[i]
    a.addEventListener("click",function(){
        qte[i].innerHTML++;
        prixt[i].innerHTML =prixu[i].innerHTML * qte[i].innerHTML
        sold();
        
})
    

}

for (let  j=0 ; j< minbt.length;j++) {
    minbt[j].addEventListener("click",function(){
        if (qte[j].innerHTML > 0 ) {
            qte[j].innerHTML--;
            
        }        
        prixt[j].innerHTML =prixu[j].innerHTML * qte[j].innerHTML
        sold()
        
    })
    

}
/// sold
function sold() {
    var prixf= (document.querySelectorAll (".prixf"))
    var qte= (document.querySelectorAll(".qte"))
    var prixu= (document.querySelectorAll(".prixu"))
    var prixt= (document.querySelectorAll(".prixt"))
    let s=0
    let a=0
    
    for (let  i=0 ; i< prixt.length;i++){
         a=(prixt[i].innerHTML =prixu[i].innerHTML * qte[i].innerHTML)
        s=s+a
     
    }
  
    prixf[0].innerHTML=s
    prixf[1].innerHTML=s
    
}


for (let  j=0 ; j< heart.length;j++) {
    heart[j].addEventListener("click",function(){
        if(heart[j].style.color=="black"){
        heart[j].style.color="red"  }
        else{
            heart[j].style.color="black" }
        
    })
    

}
