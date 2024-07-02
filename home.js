document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    //create variables to manage row info
    let minRadius = 0; 
    let step = 5;  
    let rowIndex = 0;

    //measurements for first row 
    let circleCenterX = 0;
    let circleRadius = 50;
    let circleCenterY = containerHeight - 464.52 + 45;

    //creates rectangle
    createRectangle(0, 0, containerWidth, containerHeight - 464.52 + 45);

    while (circleCenterY - circleRadius < containerHeight && circleRadius > minRadius){
        //Stops making rows when it reaches bottom of browser or circles get too small

        //changes starting point for X values if it's an odd/even row
        if (rowIndex % 2 == 0 ) {
            circleCenterX = 0;
        } else {
            circleCenterX = 50;
        }

        //create 1 row
        while (circleCenterX - circleRadius < containerWidth) {
            //Stops circles when it reaches right of browser
            createCircleByCenter(circleCenterX, circleCenterY, circleRadius);
            circleCenterX += 100
        }

        //adjust variables
        rowIndex += 1;
        circleRadius -= step;
        circleCenterY += Math.sqrt((circleRadius * 2 + step) ** 2 - (circleRadius + step) ** 2)
    }

    //Creates a circle based on its center point
    function createCircleByCenter(cx, cy, radius) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = `${radius * 2}px`;
        circle.style.height = `${radius * 2}px`;
        circle.style.left = `${cx - radius}px`;  // Center horizontally
        circle.style.top = `${cy - radius}px`;   // Center vertically
        container.appendChild(circle);
    }

    //creates rectangle with top left corner (x,y)
    function createRectangle(x, y, width, height) {
        const rectangle = document.createElement('div');
        rectangle.classList.add('rectangle');
        rectangle.style.width = `${width}px`;
        rectangle.style.height = `${height}px`;
        rectangle.style.left = `${x}px`;
        rectangle.style.top = `${y}px`;
        container.appendChild(rectangle);
    }
});