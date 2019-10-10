$(document).ready(function() {
  var all = document.getElementsByTagName("*");

  //produces depth / html element tree
  function depth(x) {
    var txt = '';

    for (var i=0, max = x.length; i < max; i++){
      var name = x[i].tagName;
      var dashes = $(name).parents().length;
      txt += '-'.repeat(dashes) +  name + '\n';
      console.log('-'.repeat(dashes), name);
    }
    return txt;
  }

  //changes info ID to specified text
  function infoText(text) {
    document.getElementById("info").innerHTML = text;
  }

  //adds event listeners to document, will alert tagname on click
  document.addEventListener("click", function(){
    alert(event.target.tagName);
  })


  //clones last div node, changes it to a quote, appends to body
  var e = document.getElementsByTagName("div")[document.getElementsByTagName("div").length-1];
  var cln = e.cloneNode(true);
  cln.innerHTML = '"I skate to where the puck is going to be, not where it has been. - Wayne Gretzky"';
  document.body.appendChild(cln);

  //event listener function to change color
  function changeColor(){
    this.style.backgroundColor = "rgb(255,207,178)";
    this.style.position = "relative";
    this.style.left = "10px";
    return false;
  }

  //function to return to normal
  function normalColor(){
    this.style.backgroundColor = "white";
    this.style.left = "0px";
    return false;
  }

  //adds event listeners to each div
  var divs = document.getElementsByTagName("div");
  for (var i=0, max = divs.length; i < max; i++){
    divs[i].addEventListener('mouseover', changeColor);
    divs[i].addEventListener('mouseout', normalColor);
  }

  //element tree stored in d
  var d = depth(all);
  infoText(d);


});
