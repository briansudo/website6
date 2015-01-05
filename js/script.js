$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['intro', 'about', 'projects', 'connect'],
    sectionsColor: ['#C63D0F', '#36465d', '#a77dc2', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Intro', 'About', 'Projects', 'Connect']
  });
  loadCoverPic("#intro");
});