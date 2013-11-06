

function Id(){
  this.idCounter = 0
}

Id.prototype.incrementId = function(){
  this.idCounter++
}

function Postit(id){
  this.content = null
  this.id = id
  this.render = false
}



Postit.prototype.renderPostit = function(e){
  this.rendered = $("#master").clone()

  this.addIdAttribute();

  this.rendered.css("background-color","red")

 .draggable({ handle: ".header" });
}

Postit.prototype.addIdAttribute = function(){

  this.rendered.attr("id", "master"+""+ self.id +"");
}
var index = 2;


function Board(){

}


$(document).ready(function(){

 newid = new Id()

 $("body#board").on("click", function(e){

  newid.incrementId();

  postItId = newid.idCounter

  postIt = new Postit(postItId)

  postIt.renderPostit(e);

  console.log(postItId)



})


});

