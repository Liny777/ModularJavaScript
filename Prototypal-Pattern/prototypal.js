// classical prototypal
/***
 * Define : 
 * Object.create() method is used to create a new object with the specified prototype object and prototypes.
 * Object.create() method returns a new object with the specified prototype object and properties.
 * Application :
 * Object.create() is used for implementing inheritance.
 */
var human = {
    species: "human",
    // Rewrite Object.create function
    create: function(values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function(keys) {
            instance[keys] = values[keys];
        });
        return instance;
    },
    saySpecies: function() {
        console.log(this.species);
    },
    sayName: function() {
        console.log(this.name);
    }
};
var musician = Object.create(human); // inherited human
musician.playInstrument = function() {
    console.log("plays..." + this.instrument);
}
var will = Object.create(musician); // inherited musician - > human 
will.name = "Will";
will.instrument = "Drums";

var musician2 = human.create({
    species: "musician",
    playInstrument: function() {
        console.log("plays"+this.instrument);
    }
})