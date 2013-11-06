

function Id(){
  this.idCounter = 0
}

Id.prototype.incrementId = function(){
  this.idCounter++
}

function Postit(id){
  this.content = null
  this.id = id

  // this.init = function(){
  //   this.id = generateId();
  // }


}


Postit.prototype.render = function(){
  $("#master").clone()

}

function Board(){

}


$(document).ready(function(){
     newid = new Id()

  $("body#board").on("click", function(){

    newid.incrementId();

    postItId = newid.idCounter

    postIt = new Postit(postItId)

    // postIt.render

    console.log(postItId)



  })


});

