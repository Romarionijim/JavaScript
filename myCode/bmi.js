
function caluclateBMI(weight, height) {
    return weight / (height ** 2)
}

function caluclateJohn() {
    let johnH = caluclateBMI(92, 1.95);
    let markH = caluclateBMI(78, 1.69);
    let markMass = markH > johnH;
    console.log(johnH);
    console.log(markH);
    return markMass;
}

console.log(caluclateJohn());





