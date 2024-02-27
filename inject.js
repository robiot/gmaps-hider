var minimap = document.getElementById("minimap");
var titlecard = document.getElementById("titlecard");
var omnibox = document.getElementById("omnibox");

// check localstorage if gmapshidden is set to true
if (!localStorage.getItem("gmapshidden")) {
  // hide
  document.title = "[HIDDEN]";
  // get element by id minimap and make hidden

  minimap.style.display = "none";
  titlecard.style.display = "none";
  omnibox.style.display = "none";

  // set localstorage to true
  localStorage.setItem("gmapshidden", true);
} else {
  minimap.style.display = "block";
  titlecard.style.display = "block";
  omnibox.style.display = "block";
  localStorage.removeItem("gmapshidden");
}
