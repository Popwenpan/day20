let current;
let snowflake = [];

function setup() {
  createCanvas(1000, 1000);
  current = new Particle(width / 2, 0);
}

function draw() {
  translate(width / 2.5, height / 2);
  rotate(PI / 1.2);
  background(128, 172, 237);

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  if (count == 0) {
    noLoop();
    console.log('snowflake completed');
  }

  snowflake.push(current);
  current = new Particle(width / 3, 0);

  for (let i = 0; i < 4; i++) {
    rotate(PI / -3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}