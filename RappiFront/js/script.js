var jsonUrl ="https://jarts301.github.io/coursera-test/RappiFront/data.json";

function loadCategories(){
	var selCategories = document.getElementById("categorias");
	deleteAll(selCategories);

	$.getJSON(jsonUrl, function (data) {

		var option = document.createElement("option");
		option.text = "Todas";
		option.value = "0";
		selCategories.add(option);

    	for (var i = 0; i < data.categories.length; i++) {
    			option = document.createElement("option");
				option.text = data.categories[i].name;
				option.value = data.categories[i].categori_id;
				selCategories.add(option);
    	}

    });

}

function loadProducts(){
	var divProducts = document.getElementById("listaProductos");
	deleteAll(divProducts);

	$.getJSON(jsonUrl, function (data) {
    	for (var i = 0; i < data.products.length; i++) {
    		var product = data.products[i];
    		var item = generateProductItem(product.img,
    			product.name, product.price, product.best_seller, 
    			product.description, product.available);
    		divProducts.appendChild(item);
    	}
    });
}

function generateProductItem(image, name, price, bestS, description, disp){
	var item = document.createElement("a");
	item.className = "list-group-item";
	var divRow = document.createElement("div");
	divRow.className = "row";

	var divColImage = document.createElement("div");
	divColImage.className = "col-lg-4 col-md-4 col-sm-3 col-xs-12";
	var img = document.createElement("img");
	img.className = "img-responsive";
	img.src = image;
	divColImage.appendChild(img);

	var divColData = document.createElement("div");
	divColData.className = "col-lg-8 col-md-8 col-sm-9 col-xs-12";
	var divRowData = document.createElement("div");
	divRowData.className = "row";
	var divName = document.createElement("div");
	divName.className = "col-lg-6 col-md-6 col-sm-6 col-xs-12 product-title";
	divName.innerHTML = name;
	var divPrice = document.createElement("div");
	divPrice.className = "col-lg-4 col-md-4 col-sm-4 col-xs-12";
	divPrice.innerHTML = "$ "+price;

	var divBS = document.createElement("div");
	divBS.className = "col-lg-2 col-md-2 col-sm-2 col-xs-12";
	var imgBS =  document.createElement("img");
	imgBS.width = "25px";
	imgBS.src = "images/bs.png";
	if(bestS){
		divBS.appendChild(imgBS);
	}

	divRowData.appendChild(divName);
	divRowData.appendChild(divPrice);
	divRowData.appendChild(divBS);

	var divRowDescription = document.createElement("div");
	divRowDescription.className = "row";
	var divColDescription = document.createElement("div");
	divColDescription.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
	divColDescription.innerHTML = description;
	divRowDescription.appendChild(divColDescription);

	var divRowButton = document.createElement("div");
	divRowButton.className = "row";
	var divColButton = document.createElement("div");
	divColButton.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
	var button = document.createElement("button");
	if(disp){
		button.className = "btn btn-warning";
		button.innerHTML = "Agregar <span id=\"cart\" class=\"glyphicon glyphicon-shopping-cart\"></span>";
	}else{
		button.className = "btn btn-default";
		button.innerHTML = "No disponible <span id=\"cart\" class=\"glyphicon glyphicon-shopping-cart\"></span>";
	}
	divColButton.appendChild(button);
	divRowButton.appendChild(divColButton);

	divColData.appendChild(divRowData);
	divColData.appendChild(divRowDescription);
	divColData.appendChild(divRowButton);

	divRow.appendChild(divColImage);
	divRow.appendChild(divColData);

	item.appendChild(divRow);

	return item;

}

function deleteAll(object){
	while (object.firstChild) {
        object.removeChild(object.firstChild);
    }
}

