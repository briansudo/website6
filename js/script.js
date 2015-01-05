$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['intro', 'about', 'projects', 'connect'],
    sectionsColor: ['#C63D0F', '#36465d', '#1BBC9B', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Intro', 'About', 'Projects', 'Connect']
  });
  loadCoverPic("#intro");
});