function display(element){
    document.getElementById('h3-text').innerHTML = element.alt;
  }
  function revert(){
    document.getElementById('h3-text').innerHTML = "Hover on a image to display some text";
  }