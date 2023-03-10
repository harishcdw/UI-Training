
let objShapes = {
    selectedShapes: "",
    value: "",
    cirInput: "2.Enter Radius",
    triInput: "2.Enter Side (Base and Height)",
    sqInput: "2.Enter Side",
    cirPerimeter: "",
    triPerimeter: "",
    sqPerimeter: "",
    cirArea: "",
    triArea: "",
    sqArea: "",
    circle: {
        shapeName: "Circle",
        radiusLabel: "RADIUS",
        radiusVariable: "r",
        perimeterFormula: "&#8508;" + "r<sup>2</sup>",
        areaFormula: "2&#x213C;r",
        perimeterResult: "",
        areaResult: ""
    },

    triangle: {
        shapeName: "Equilateral triangle",
        radiusLabel: "SIDE",
        radiusVariable: "s",
        perimeterFormula: "0.433*s*s",
        areaFormula: "3 * s",
        perimeterResult: "",
        areaResult: ""
    },

    square: {
        shapeName: "Square",
        radiusLabel: "SIDE",
        radiusVariable: "s",
        perimeterFormula: "s * s",
        areaFormula: "4 * s",
        perimeterResult:  "",
        areaResult:  ""
    }

}

let calcFunction = {
    circle:{
        perimeterResult : (value)=>{
            return (Math.PI * value * value).toFixed(2) + " sq cm";
        },
        areaResult: (value)=>{
            return (2 * Math.PI * value).toFixed(2) + " cm";
        }
    },
   
    triangle:{
        perimeterResult : (value)=>{
            return (0.433 * value * value).toFixed(2) + " sq cm";
        },
        areaResult: (value)=>{
            return 3 * value + " cm";
        }
    },
    square:{
        perimeterResult : (value)=>{
            return (value * value).toFixed(2) + " sq cm";
        },
        areaResult: (value)=>{
            return 4 * value + " cm";
        }
    }
}

if (localStorage['shapeValue']) {
    console.log("local present");
}
else {
    localStorage.setItem("shapeValue", JSON.stringify(objShapes));
}


// check for local storage for selected shape and display 

let data = JSON.parse(localStorage.getItem("shapeValue"));

if (data.selectedShapes == "") {
    document.querySelector("#nextButton button").style.display = "none";
}

else {
    document.querySelector("." + data.selectedShapes + " i").style.display = "block";
    document.querySelector("#nextButton button").style.display = "inline-block";
}

function ouputPage(shapeSelected) {
    console.log(data[shapeSelected]);
    document.querySelector("#shapeName").innerHTML = data[shapeSelected].shapeName;
    document.querySelector("#radiusLabel").innerHTML = data[shapeSelected].radiusLabel;
    document.querySelector("#radiusVariable").innerHTML = data[shapeSelected].radiusVariable;
    document.querySelector("#radiusAns").innerHTML = data.value +" cm";
    document.querySelector("#perimeterFormula").innerHTML = data[shapeSelected].perimeterFormula;
    document.querySelector("#areaFormula").innerHTML = data[shapeSelected].areaFormula;

    document.querySelector("#perimeterResult").innerHTML = calcFunction[shapeSelected].perimeterResult(data.value);
    document.querySelector("#areaResult").innerHTML = calcFunction[shapeSelected].areaResult(data.value);

}

document.querySelector(".shapes").addEventListener("click", (event) => {
    function setLocalStorage() {
        data.selectedShapes = event.target.className;
        localStorage.setItem("shapeValue", JSON.stringify(data));
        data = JSON.parse(localStorage.getItem("shapeValue"));
        document.querySelector("." + data.selectedShapes + " i").style.display = "block";
        document.querySelector("#nextButton button").style.display = "inline-block";
    }

    if (data.selectedShapes == "") {
        if (event.target.className != null && event.target.className != "") {
            setLocalStorage();
        }
    }
    else {
        if (event.target.className != null && event.target.className != "" && event.target.className != "shapes") {
            data = JSON.parse(localStorage.getItem("shapeValue"));
            document.querySelector("." + data.selectedShapes + " i").style.display = "none";
            setLocalStorage();
        }
    }
});




document.querySelector("#nextButton").addEventListener("click", (event) => {
    document.querySelector(".page-1").style.display = "none";
    document.querySelector(".page-2").style.display = "block";

    var changeText = document.querySelector("#measurement");
    data = JSON.parse(localStorage.getItem("shapeValue"));
    if (data.selectedShapes == "circle") {
        changeText.innerHTML = data.cirInput;
    }
    else if (data.selectedShapes == "triangle") {
        changeText.innerHTML = data.triInput;
    }
    else if (data.selectedShapes == "square") {
        changeText.innerHTML = data.sqInput;
    }

});




document.querySelector(".calculateButton").addEventListener("click", (event) => {
    data = JSON.parse(localStorage.getItem("shapeValue"));
    data.value=document.getElementById("num").value;
    localStorage.setItem("shapeValue", JSON.stringify(data));
    document.getElementById("num").value = '';
    if (data.value != "" && data.value != null) {
        document.querySelector(".page-2").style.display = "none";
        document.querySelector(".page-3").style.display = "block";
        if (data.selectedShapes == "circle") {
            document.querySelector("#circle").style.display = "inline-block";
            document.querySelector("#triangle").style.display = "none";
            document.querySelector("#square").style.display = "none";
            ouputPage("circle");
        }
        else if (data.selectedShapes == "triangle") {
            document.querySelector("#circle").style.display = "none";
            document.querySelector("#triangle").style.display = "inline-block";
            document.querySelector("#square").style.display = "none";
            ouputPage("triangle");
       }

        else if (data.selectedShapes == "square") {
            document.querySelector("#circle").style.display = "none";
            document.querySelector("#triangle").style.display = "none";
            document.querySelector("#square").style.display = "inline-block";
            ouputPage("square");
        }
    }

});






document.querySelector(".startAgain").addEventListener("click", (event) => {
    data = JSON.parse(localStorage.getItem("shapeValue"));
    document.querySelector("." + data.selectedShapes + " i").style.display = "none";
    document.querySelector("#nextButton button").style.display = "none";
    data.selectedShapes = "";
    localStorage.setItem("shapeValue", JSON.stringify(objShapes));

    document.querySelector(".page-3").style.display = "none";
    document.querySelector(".page-1").style.display = "block";

});