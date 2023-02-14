/* Create a function that adds a border */
function pointBorder() {
    /* Log 1 to see if click was received */
    console.log("1")

    /* Toggle add_border class */
    this.classList.toggle("add_border");

    /* Find coordinates of the circle that was clicked */
    let circle_x = this.getAttribute("cx") / 50;
    let circle_y = (500 - this.getAttribute("cy")) / 50;

    /* Most recently clicked coordinates */
    let newText = "Current Point: (" + circle_x + ", " + circle_y + ")"

    /* Represent most recently clicked coordinates on page */
    document.getElementById("last_clicked").innerHTML = newText;
}

/* Helper function for adding a border */
function buttonClicked() {
    /* Get all circles */
    let vals = document.getElementsByTagName("circle");

    for (let i = 0; i < vals.length; i++){
        let val = vals[i];

        val.addEventListener("click", pointBorder);

        /* Log 2 to see if click was received */
        console.log("2")
    }
}

/* Create a function that adds a point to the scatter plot */
function addCoords() {

    /* Get user selected x and y coordinates */
    let x_coord = document.getElementById('x_coord');
    let y_coord = document.getElementById('y_coord');

    /* Find the computer coordinates for the user inputted coordinates */
    let x = x_coord.value * 50;
    let y = 500 - (y_coord.value * 50);

    /* Add the coordinates as a point on the scatter plot */
    svg_canvas = document.getElementById("svg_canvas");
    svg_canvas.innerHTML += '<circle class="circle" cx=' + x + ' cy=' + y + ' r="10" onClick="buttonClicked()"/>';

    }

/* Helper function for adding a point to the scatter plot */
function addCoordsHelper() {
    /* Submit button was clicked */
    let newCoords = document.getElementById("add_coords_helper");

    /* Add new coords to scatter plot */
    newCoords.addEventListener("click", addCoords);
}