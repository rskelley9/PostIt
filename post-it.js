

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

Postit.prototype.addIdAttribute = function(){
  this.rendered = $('div #master').attr("id", "master"+""+ self.id +"");
}


Postit.prototype.render = function(){
  this.rendered = $("#master").clone()
  this.addIdAttribute();

}

function Board(){

}


$(document).ready(function(){

 newid = new Id()

 $("body#board").on("click", function(){

  newid.incrementId();

  postItId = newid.idCounter

  postIt = new Postit(postItId)

  postIt.render

  console.log(postItId)



})


});

