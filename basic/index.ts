// Basic Variable TS

// String

let nameValue:string = 'Hong sungmin';

// Number
let birthValue:number = 224 ;

// Array
// :datatype[]
let tomoArray:string[] = ['Hina', 'Riky'];

// Tuple
type TomoMember = [string, number];
let who:TomoMember = ['Riky', 2];
// First Array value is only String, Second Value is Only Number


// Object
// Age is not required using ?
let myInfo:{ name:string, age?:number } = {
    name: 'sungmin',
    age: 18
}

// Union type Example
// String or Number
let Me:string | number = 'sungmin';// OR 18
let Gen:(string | number[]) = 'MZ' // OR ['1980', ..... ,'2004']

// Point!! Union の場合はStringかNumberの一つに確定されます

// Any Type


// Type Alias
type HumanInfo = {
    name:string,
    age?:number,
    gender?:string
}

let myLover:HumanInfo ={
    name: 'こなつ',
    age: 21
}

// If, we have SO Many Object attribute
// key = All attribute :string
// key's data :string
type GameInfo = {
    [key:string]:string,
}

// Function
// function(para:datatype):resultDataType
function toggleRoomLight(onOff:boolean):string{
    if(onOff === true){
        return 'Light On!!!!!';
    }
}

// Class
class User{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}