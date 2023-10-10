let color=["red","blue","green","cyan","black","violet","orange","yellow","grey","lightgreen"];
let shape=["rectangle","circle","triangle","diamond"];
let index=0;
let shapeIndex=0;


let cShape=document.getElementById("shape-btn");
let cColor=document.getElementById("color-btn");

cShape.addEventListener("click",changeShape);
cColor.addEventListener("click",changeColor);

function changeShape(){
    
    if(shapeIndex>shape.length){
        shapeIndex=0;
    }

    let i=document.getElementsByClassName("inner")[0];
    i.classList.add(shape[shapeIndex]);
    if(shapeIndex>0){
        i.classList.remove(shape[shapeIndex-1]);
    }
    if(shapeIndex==shape.length){
        i.classList.remove(shape[shapeIndex]);
    }
    shapeIndex++;

   
    
}

function changeColor(){
    if(index==color.length){
        index=0;
    }
    document.getElementById("outer").style.backgroundColor=color[index];
    index++;
}
