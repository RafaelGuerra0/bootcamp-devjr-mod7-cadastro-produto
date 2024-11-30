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


function save(){
    var prod = {
        id: products.lenght+1,
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price:  Number(document.getElementById("price").value),
        idCategory: document.getElementById("categorySelection").value,
        onSale: document.getElementById("sale").checked,
        onRelease: document.getElementById("launching").checked
    }


    $.ajax({
        url:"http://localhost:8080/products",
        contentType: "application/json",
        type:"POST",
        async: true,
        data: JSON.stringify(prod),
        success:(product) =>{
            AddNewRow(product);
            products.push(product);
            
            
            document.getElementById("name").value='';
            document.getElementById("description").value='';
            document.getElementById("price").value='';
            document.getElementById("categorySelection").value='';
            document.getElementById("sale").value='';
            document.getElementById("launching").value='';


    }


});






    


}



var products = [
    
];
/*
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
*/
// usar o do java
var categories = [

];


/*
LoadProducts();
function  LoadProducts(){
    for(let prod of products){
        AddNewRow(prod);
    }

}
*/
loadCategories();
loadProducts();

function loadCategories(){
    $.ajax({
            url:"http://localhost:8080/categories",
            type:"GET",
            async: false,
            success:(response) =>{
            categories = response;
            for (var cat of categories){
                document.getElementById("categorySelection").innerHTML+= `<option value=${cat.id}>${cat.name}</option>`;
        
            }
        }


    });


}
function  loadProducts(){
    $.getJSON("http://localhost:8080/products",(response) =>{
        products = response;
        for(let prod of products){
            AddNewRow(prod);
        }



    });
    

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

    var categoryNode = document.createTextNode(categories[prod.idCategory-1].name);
    newRow.insertCell().appendChild(categoryNode);

    var options = '';
    if (prod.onSale){
        options = '<span class = "badge bg-success">P</span>';

    }
    if (prod.onRelease){
        options += '<span class = "badge bg-primary">L</span>';

    }
    newRow.insertCell().innerHTML+=options;
}