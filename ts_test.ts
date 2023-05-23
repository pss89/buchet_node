const ts_text:string = 'hello typescript'
const ts_numbers:number[] = [1,2,3]

console.log(ts_text);
console.log(ts_numbers);

const ts_any:any = 'any'
console.log(ts_any)

const ts_obj:object = {a:'1',b:'1'}

function greet(name: string){
    console.log(name)
}

greet('1')

function addLocation(pt:{x:number;y?:number}){ // object 로 인자값을 받고 y는 필수값이 아니다
    console.log("the locations x value is `pt.x`")
}

addLocation({x:11})