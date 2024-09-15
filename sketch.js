const flock = [];
function setup() {
    createCanvas(640, 360);

    // describeElement('alignSlider', 'Align', LABEL);
    alignSlider = createSlider(0, 5, 2, 0.1);
    cohesionSlider = createSlider(0, 5, 2, 0.1);
    separationSlider = createSlider(0, 5, 2, 0.1);

    for (let i = 0; i < 100; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    background(51);

    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.show();
        boid.update();
    }
}