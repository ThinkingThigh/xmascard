window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 600;
    var context = canvas.getContext("2d");

    context.beginPath();
    context.rect(0, 0, 800, 600);
    context.fillStyle = "#AA9033";

    context.fill();

    context.beginPath();
    for (var i = 0; i <= 20; i++) {
        drawWhiteRect(context, 200 + 10 * i, 100 + 10 * i, 400 - 20 * i, 400 - 20 * i);
        drawBlackRect(context, 205 + 10 * i, 105 + 10 * i, 390 - 20 * i, 390 - 20 * i);
    }

    context.beginPath();
    context.rect(395, 295, 5, 5);
    context.fillStyle = "black";
    context.lineWidth = 5;

    context.fill();
    context.stroke();
}

function drawBlackRect(cxt, x, y, width, height) {
    cxt.beginPath();
    cxt.rect(x, y, width, height);

    cxt.lineWidth = 5;
    cxt.strokeStyle = "black";

    cxt.stroke();
}

function drawWhiteRect(cxt, x, y, width, height) {
    cxt.beginPath();
    cxt.rect(x, y, width, height);

    cxt.lineWidth = 5;
    cxt.strokeStyle = "white";

    cxt.stroke();
}