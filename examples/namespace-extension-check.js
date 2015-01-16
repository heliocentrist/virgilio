var Virgilio = require('../');
var virgilio = new Virgilio();

//All men are mortal
virgilio.defineAction$('man.isMortal', function() {
    return true;
});

var man = virgilio.namespace$('man');
var socrates = man.namespace$('socrates');

//Socrates is a man.
console.log(socrates.isChildNamespace$(man));	//=> true

//Therefore, Socrates is mortal.
socrates.isMortal().then(function(result) {
    if (result) {
        console.log('Yes, I am mortal.');	//=> 'Yes, I am mortal.'
    }
});


//A god can shoot lightnings
virgilio.defineAction$('god.throwLightning', function() {
    return true;
});

//Socrates is not a god.
console.log(socrates.isChildNamespace$('virgilio.god'));	//=> false

//Therefore, Socrates cannot shoot lightnings.
try {
    socrates.throwLightning();
}
catch(err) {
    console.log(err instanceof TypeError);  //=> true
}
