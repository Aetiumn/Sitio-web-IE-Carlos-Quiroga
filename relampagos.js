let relampagos = [];
const maxRelampagos = 50;
let brilloFondo = 0;

function setup() {
  let banner = document.querySelector("header");
  let c = createCanvas(banner.offsetWidth, banner.offsetHeight);
  c.parent(banner);
  noFill();
}

function draw() {
  background(0, 200 - brilloFondo);
  brilloFondo *= 0.9;

  if (random(1) < 0.08) {
    let cantidad = int(random(1, 3));
    for (let i = 0; i < cantidad; i++) {
      relampagos.push({
        x: random(width),
        y: random(height / 2),
        length: random(60, 150),
        alpha: 255,
        thickness: random(2, 6),
        duration: int(random(2, 6))
      });
    }
    brilloFondo = 100 + random(50);
  }

  for (let i = relampagos.length - 1; i >= 0; i--) {
    let r = relampagos[i];
    stroke(180, 50, 255, r.alpha);
    strokeWeight(r.thickness);
    let x = r.x;
    let y = r.y;
    for (let j = 0; j < r.length; j += 10) {
      let x2 = x + random(-20, 20);
      let y2 = y + 10;
      line(x, y, x2, y2);
      x = x2;
      y = y2;
    }
    r.duration--;
    r.alpha -= 60;
    if (r.duration <= 0 || r.alpha <= 0) {
      relampagos.splice(i, 1);
    }
  }
}

function windowResized() {
  let banner = document.querySelector("header");
  resizeCanvas(banner.offsetWidth, banner.offsetHeight);
}
