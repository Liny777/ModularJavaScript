// /**
//  * Inherit the prototype methods from one constructor into another.
//  *
//  * The Function.prototype.inherits from lang.js rewritten as a standalone
//  * function (not on Function.prototype). NOTE: If this file is to be loaded
//  * during bootstrapping this function needs to be rewritten using some native
//  * functions as prototype setup using normal JavaScript does not work as
//  * expected during bootstrapping (see mirror.js in r114903).
//  *
//  * @param {function} ctor Constructor function which needs to inherit the
//  *     prototype.
//  * @param {function} superCtor Constructor function to inherit prototype from.
//  */
//  exports.inherits = function(ctor, superCtor) {
//     ctor.super_ = superCtor;
//     ctor.prototype = Object.create(superCtor.prototype, {
//       constructor: {
//         value: ctor,
//         enumerable: false,
//         writable: true,
//         configurable: true
//       }
//     });
//   };
// classical prototypal
function inherites(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

var Person = function(name) {
    this.name = name
}
Person.prototype.sayName = function() {
    console.log(this.name)
}

Person.prototype.shoutName = function() {
    console.log(this.name + '!')
}

var john = new Person();
var bobby = new Person();

var Friend = function(name) {
    // Person.call(this,name)
    Friend.super_.call(this, name);
}

inherities(Friend, Person);

var julia = new Friend("julia");
julia.sayName();

var Musician = function(name, instrument) {
    Musician.super_.call(this, name);
    this.instrument = instrument;
}

Musician.prototype.shoutName = function() {
    console.log("DUDE!!!")
}

inherites(Musician, Person);

Musician.prototype.getInstrument = function() {
    console.log(this.instrument);
}

var Jason = new Musician("Jason", "trombone")

delete Musician.prototype.shoutName

/**
 * The delete operator in JavaScript is used to delete an object's property. 
 * If it is used to delete an object property that already exists, 
 * it returns true and removes the property from the object.
 * However, deleting an object property that doesn't exist will not affect the object, but will still return true .
 */