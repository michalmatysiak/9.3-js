var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var dinosaurUpperCase = dinosaur.toUpperCase();

var changeOfText = text.replace('Velociraptor', dinosaurUpperCase);

var halfOfText = changeOfText.slice(0,(changeOfText.length/2));



console.log(text);
console.log(dinosaurUpperCase);
console.log(changeOfText);
console.log(halfOfText);
console.log(changeOfText.length/2);
