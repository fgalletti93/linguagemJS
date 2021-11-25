onload = () => {


    if (drawing.getContext) {
        let ctx = drawing.getContext('2d');
        //Rectangles
        //ctx.fillRect(25, 25, 100, 100);
        //ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(10, 10, 50, 50);

        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.moveTo(100, 75);
        ctx.lineTo(125, 100);
        ctx.lineTo(125, 75);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = 'green'
        ctx.lineWidth = 4;
        ctx.arc(100, 35, 25, 0 ,2*Math.PI);
        ctx.stroke();


        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.moveTo(275, 240);
        ctx.bezierCurveTo(275, 237, 270, 225, 250, 225);
        ctx.bezierCurveTo(220, 225, 220, 262.5, 220, 262.5);
        ctx.bezierCurveTo(220, 280, 240, 302, 275, 320);
        ctx.bezierCurveTo(310, 302, 330, 280, 330, 262.5);
        ctx.bezierCurveTo(330, 262.5, 330, 225, 300, 225);
        ctx.bezierCurveTo(285, 225, 275, 237, 275, 240);
        ctx.fill();
    }
};