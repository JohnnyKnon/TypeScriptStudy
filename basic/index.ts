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
// でも、また数字を入れたらNumberに変わります。可変的

// array union
let users:(number | string)[] = ['1', 2, 3];
// object union
let userInfo:{ usrID:number|string } = {
    usrID : '134562313'
}

// Any Type 全てのデータタイプを許す
let korea:any; // タイプシールド解除。つまり、一般JS変数なのでTSを使う意味がなくなる
korea = 'from korea';
korea = true;

//Anyより安全に使えるタイプUnknown!
let school:unknown;
school = 'High school';
school ={
    score: 13
}
// 理由はタイプシールドがあってきちんとタイプの区別をしてくれる。

// Type Alias
interface HumanInfo {
    name:string,
    age?:number,
    gender?:string
}


interface HumanInfo{
    hasBoyFriend?:boolean
}

// TypeScriptは簡単な計算式にもデータタイプを厳しく判断する
// any, int, bigint外には計算式を使えぬ(union typeもできない)


let myLover:HumanInfo ={
    name: 'こなつ',
    age: 21,
    hasBoyFriend:false,
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