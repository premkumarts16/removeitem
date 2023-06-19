function changecolor(){
    var colorselect=document.getElementById("colorselect");
    var selectedcolor=colorselect.value;
    var para=document.getElementById("para");

    if(selectedcolor==="red"){
        para.style.color="red";
    }else if(selectedcolor==="green"){
        para.style.color="green";

    }else if(selectedcolor==="white"){
        para.style.color="white";
    }else if(selectedcolor==="black"){
        para.style.color="black"
    }
}