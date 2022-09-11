var userInput=document.querySelector('#userInput');
var traslatedOutput=document.querySelector('#groot-speak');
var transateBtn=document.querySelector('#convert-btn');

var serverURL="	https://api.funtranslations.com/translate/groot.json";
// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function getURL(text){
    return serverURL+"?"+"text="+text;
}

function iAmGroot(){
    fetch(getURL(userInput.value))
    .then(response=>response.json())
    .then(groot=>traslatedOutput.innerHTML=groot.contents.translated).catch(noGroot);
}
function noGroot(error){
    alert('Groot not available and I AM GROOT!!!');
    console.log("Error"+error);
}
transateBtn.addEventListener("click",iAmGroot);