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
// Point!! Union の場合はStringかNumberの一つに確定されます
// でも、また数字を入れたらNumberに変わります。可変的
// array union
let users = ['1', 2, 3];
// object union
let userInfo = {
    usrID: '134562313'
};
// Any Type 全てのデータタイプを許す
let korea; // タイプシールド解除。つまり、一般JS変数なのでTSを使う意味がなくなる
korea = 'from korea';
korea = true;
//Anyより安全に使えるタイプUnknown!
let school;
school = 'High school';
school = {
    score: 13
};
// TypeScriptは簡単な計算式にもデータタイプを厳しく判断する
// any, int, bigint外には計算式を使えぬ(union typeもできない)
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
