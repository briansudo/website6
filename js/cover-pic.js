function loadCoverPic(container) {
  var photos = ['balloon'];
  var randomImage = photos[Math.floor(Math.random() * photos.length)];
  var imageURL = 'img/' + randomImage + '.jpg';
  $(container).css("background", "url(" + imageURL + ") no-repeat center center scroll");
  $(container).css("background-size", "cover");
  $(container).css("-webkit-background-size", "cover");
  $(container).css("-moz-background-size", "cover");
  $(container).css("-o-background-size", "cover");
}