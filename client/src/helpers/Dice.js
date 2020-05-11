const rollDiceFunction = function (id) {
    var cube = document.getElementById(id);

    var min = 1;
    var max = 24;
    var xRand = (Math.floor(Math.random() * (max-min)) + min) * 90;
    var yRand = (Math.floor(Math.random() * (max-min)) + min) * 90;

    cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
    cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';

    let countX = (((xRand / 90) % 4) + 4) % 4
    if (countX === 1) {
      return 6;
    }
    if (countX === 3) {
      return 5;
    }
    let countY = (((yRand / 90 + countX) % 4) + 4) % 4
    return [1, 4, 2, 3][countY];

  }

  module.exports = rollDiceFunction;
