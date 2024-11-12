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


var products = [
    {
        id: 1,
        name: "Computador",
        description: "Descricao PC",
        price: 4900.00,
        category: 1,
        onSale: true,
        newProduct: true
    },
    {
        id: 2,
        name: "Computador 2",
        description: "Descricao PC",
        price: 4900.00,
        category: 1,
        onSale: true,
        newProduct: true
    },
    {
        id: 3,
        name: "Computador 3",
        description: "Descricao PC",
        price: 4900.00,
        category: 1,
        onSale: true,
        newProduct: true
    }
];
// usar o do java
var categories = [
    {id:1, name: "Producao Propria"},
    {id:2, name: "Nacional"},
    {id:3, name: "Importado"}
];


LoadProducts();
function  LoadProducts(){
    for(let prod of products){
        AddNewRow(prod);
    }

}
function AddNewRow(prod){
    var table = document.getElementById("productsTable");
    
    var newRow = table.insertRow();

    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(nameNode);

    var descriptionNode = document.createTextNode(prod.description);
    newRow.insertCell().appendChild(descriptionNode);

    var priceNode = document.createTextNode(prod.price);
    newRow.insertCell().appendChild(priceNode);

    var categoryNode = document.createTextNode(categories[prod.category-1].name);
    newRow.insertCell().appendChild(categoryNode);

    var options = '';
    if (prod.onSale){
        options = '<span class = "badge bg-success">P</span>';

    }
    if (prod.newProduct){
        options = '<span class = "badge bg-primary">L</span>';

    }
    newRow.insertCell().innerHTML+=options;
}