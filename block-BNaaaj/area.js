function areaOfSquare(side){
    return side**side;
}

function areaOfRectangle(l, b){
    return 2 * l * b;
}

function areaOfCircle(r){
    return Math.PI * (r ** 2)
}

module.exports = {areaOfSquare, areaOfRectangle, areaOfCircle}