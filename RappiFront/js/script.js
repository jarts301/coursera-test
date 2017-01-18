var jsonUrl ="https://www.dropbox.com/s/jwhvonadaiyeo4j/data.json";

function loadCategories(){
	var selCategories = document.getElementById("categorias");

	$.getJSON(jsonUrl, function (data) {

    	for (var i = 0; i < data.categories.length; i++) {
    			var option = document.createElement("option");
				option.text = data.categories[i].name;
				option.value = data.categories[i].categori_id;
				selCategories.add(option);
    	}

    });

}