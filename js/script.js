$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['intro', 'about', 'projects', 'connect'],
    sectionsColor: ['#C63D0F', '#36465d', '#a77dc2', '#f2992e'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Intro', 'About', 'Projects', 'Connect']
  });
  loadCoverPic("#intro");
  document.getElementById("projects-first-img").src = "img/projects_first3.png";
});