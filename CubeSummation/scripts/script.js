
var restUrl="http://52.204.1.104/CubeSummationBackend/";

function onTestCaseChange(object){
	var value = object.value;
	var paramsDiv = document.getElementById("paramsDiv");

	while (paramsDiv.firstChild) {
        paramsDiv.removeChild(paramsDiv.firstChild);
    }

	if(value>=1 && value<=50){
		generateParamInputs(value,paramsDiv);
	}else{
		if(value<1){
			object.value="1";
			generateParamInputs(1,paramsDiv);
		}
		if(value>50){
			object.value="50";
			generateParamInputs(50,paramsDiv);
		}
	}
}

function generateParamInputs(value,paramsDiv){
		for (var i = 0; i < value; i++) {
			var nLab = document.createElement("span");
			nLab.innerHTML = "N"+(i+1)+":";
			var nInput = document.createElement("input");
			nInput.type="number";
			nInput.value="0";
			nInput.min="1";
			nInput.max="100";
			nInput.required = true;

			var mLab = document.createElement("span");
			mLab.innerHTML = "M"+(i+1)+":";
			var mInput = document.createElement("input");
			mInput.type="number";
			mInput.value="0";
			mInput.min="1";
			mInput.max="1000";
			mInput.required = true;
			mInput.addEventListener("input", function () {
                onMChange(this);
            }, false);

			paramsDiv.appendChild(nLab);
			paramsDiv.appendChild(nInput);
			paramsDiv.appendChild(mLab);
			paramsDiv.appendChild(mInput);
			paramsDiv.appendChild(document.createElement("br"));
		}
}

function onMChange(object){
	var value = object.value;
	var operationsDiv = document.getElementById("operationsDiv");

	while (operationsDiv.firstChild) {
        operationsDiv.removeChild(operationsDiv.firstChild);
    }

	if(value>=1 && value<=1000){
		generateOperationInputs(value,operationsDiv);
	}else{
		if(value<1){
			object.value="1";
			generateOperationInputs(1,operationsDiv);
		}
		if(value>1000){
			object.value="1000";
			generateOperationInputs(1000,operationsDiv);
		}
	}
}

function generateOperationInputs(value,operationsDiv){
		for (var i = 0; i < value; i++) {
			var input = document.createElement("input");
			input.placeholder = "Ej: QUERY 1 1 1 3 3 3";
			input.required=true;
			operationsDiv.appendChild(input);
			operationsDiv.appendChild(document.createElement("br"));
		}
		operationsDiv.appendChild(document.createElement("br"));
}

function calculate(){
	var resultsDiv = document.getElementById("resultsDiv");
    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
    var t = document.getElementById("testCases").value;
    var params = getParams();
    var operations = getOperations();
    alert(operations);

    $.getJSON(restUrl + "performOperations?t="+t+"&params="+params+"&operations="+operations, function (data) {
    	for (var i = 0; i < data.list.length; i++) {
    		var result = document.createElement("span");
    		result.innerHTML=data.list[i];
    		resultsDiv.appendChild(result);
    		resultsDiv.appendChild(document.createElement("br"));
    	}
    });
}

function getParams(){
	var result="";
	var paramsDiv =  document.getElementById("paramsDiv");
	var list = paramsDiv.getElementsByTagName("input");

	for (var i = 0; i < list.length-1; i=i+2) {
		result=result+list[i].value+","+list[i+1].value+";";
	}

	return result.substring(0,result.length-1);
}

function getOperations(){
	var result="";
	var operationsDiv =  document.getElementById("operationsDiv");
	var list = operationsDiv.getElementsByTagName("input");
	var replaced="";
	for (var i = 0; i < list.length; i++) {
		replaced=list[i].value.split(' ').join(',');
		result=result+replaced+";";
	}

	return result.substring(0,result.length-1);
}