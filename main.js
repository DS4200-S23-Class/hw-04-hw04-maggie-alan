function buttonClicked() {
    console.log("1")

    let vals = document.getElementsByTagName("circle");

    vals.classList.add("add_border");

    for (let i = 0; i < vals.length; i++){
        if (vals[i].checked) {
            //console.log(vals[i].value);

            //update filler
            //let newText = "Selected Vis: " + vals[i].value;
            //document.getElementById("selected-circle").innerHTML = newText;
            console.log(vals[i])
            vals[i].classList.add("add_border");
        } 
    }
}