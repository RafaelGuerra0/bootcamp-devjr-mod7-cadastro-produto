initialIndex =3;
currentIndex=initialIndex;
function FuncAddProd(){
    varName = String(document.getElementById("name").value);
    console.log(varName);
    varDescription = String(document.getElementById("description").value);
    console.log(varDescription);
    varPrice = String(document.getElementById("price").value);
    varCategory = String(document.getElementById("categorySelection").value);
    currentIndex++;
    
    //document.getElementById("creator").innerHTML += '<div class="row"><div class="col">'+currentIndex+'</div><div class="col">'+varName+'</div><div class="col">'+varDescription+'</div><div class="col">'+varPrice+'</div><div class="col">'+varCategory+'</div><div class="col">';

    if(document.getElementById("sale").checked === true && document.getElementById("launching").checked === true){
        document.getElementById("creator").innerHTML += '<div class="row"><div class="col">'+currentIndex+'</div><div class="col">'+varName+'</div><div class="col">'+varDescription+'</div><div class="col">'+varPrice+'</div><div class="col">'+varCategory+'</div><div class="col"><button type="button" class="btn btn-outline-succes" disabled>P</button><button type="button" class="btn btn-outline-succes" disabled>L</button></div></div><hr>';
    

    }else
    if(document.getElementById("sale").checked === true ){
        document.getElementById("creator").innerHTML += '<div class="row"><div class="col">'+currentIndex+'</div><div class="col">'+varName+'</div><div class="col">'+varDescription+'</div><div class="col">'+varPrice+'</div><div class="col">'+varCategory+'</div><div class="col"><button type="button" class="btn btn-outline-succes" disabled>P</button></div></div><hr>';
    
    }else
    if(document.getElementById("launching").checked === true){
        document.getElementById("creator").innerHTML += '<div class="row"><div class="col">'+currentIndex+'</div><div class="col">'+varName+'</div><div class="col">'+varDescription+'</div><div class="col">'+varPrice+'</div><div class="col">'+varCategory+'</div><div class="col"><button type="button" class="btn btn-outline-succes" disabled>L</button></div></div><hr>';
    }
    


}