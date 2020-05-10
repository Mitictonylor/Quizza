export default function Circle(x, y, r, dx, dy, c, mouse) {
  this.x = x;
  this.y = y;
  this.radius = r;
  this.dx = dx;
  this.dy = dy;
  this.mouse = mouse
  this.colours = ['#70d6ff', '#ff70a6', '#ff9770', '#907ad6', '#e9ff70', '#6eeb83']
  this.colour = this.colours[Math.floor(Math.random() * 6)];
  this.minRadius = r;


  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.colour
    c.fill();
  }

  this.update = function() {
    this.draw();

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50 && this.mouse.y - this.y < 50 & this.mouse.y - this.y > -50) {
      if (this.radius < 50) {
            this.radius += 1;
      }
    } else if (this.radius > this.minRadius){
      this.radius -= 1;
    }
  }
}
