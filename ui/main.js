//counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
      //Not done yet  
    };
   //Make the request
   request.open('GET', 'http://raman4809.imad.hasura-app.io/counter', true);
   request.send(null);
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a req to the server and send name
    
    //Capture a list of name and render it as a List
    var names = ['name1','name2','name3','name4'];
    var list='';
    for(var i=0; i<name.length; i++){
        list += '<li>' + name[i] +'<li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHtml = list;
};