let inputval=document.getElementById("input");

function addvalue(element){
    inputval.value += element;
};
function equal(){
    inputval.value=eval(inputval.value);
};
function clearVal(){        
inputval.value=" "
};

function sliceVal(){
    inputval.value = inputval.value.slice(0,inputval.value.length-1);
}