export default function Circle(x, y, r, dx, dy, c, mouse) {
  this.x = x;
  this.y = y;
  this.radius = r;


  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.colour
    c.fill();
  }

}
