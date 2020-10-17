function openMap(evt, name) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
} 

function openChart(evt, name) {
  var j, tabcontent2, tablinks2;

  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (j = 0; j < tabcontent2.length; j++) {
    tabcontent2[j].style.display = "none";
  }

  tablinks2 = document.getElementsByClassName("tablinks2");
  for (j = 0; j < tablinks2.length; j++) {
    tablinks2[j].className = tablinks2[j].className.replace(" active", "");
  }

  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
} 

document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen2").click();
