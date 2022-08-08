// Basic Variable TS
// String
let nameValue = 'Hong sungmin';
// Number
let birthValue = 224;
// Array
// :datatype[]
let tomoArray = ['Hina', 'Riky'];
let who = ['Riky', 2];
// First Array value is only String, Second Value is Only Number
// Object
// Age is not required using ?
let myInfo = {
    name: 'sungmin',
    age: 18
};
// Union type Example
// String or Number
let Me = 'sungmin'; // OR 18
let Gen = 'MZ'; // OR ['1980', ..... ,'2004']
let myLover = {
    name: 'こなつ',
    age: 21
};
// Function
// function(para:datatype):resultDataType
function toggleRoomLight(onOff) {
    if (onOff === true) {
        return 'Light On!!!!!';
    }
}
// Class
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
