document.getElementById("HTMLcompressor").addEventListener("click", function() {
  var allHTML = document.getElementById("oldCode").value;
  allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm, "");
  allHTML = allHTML.replace(/\s+/g, " ");
  document.getElementById("newCode").value = allHTML.replace(/>\s+</g,'><');
});