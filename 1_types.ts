// Базовые типы

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'hello';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['hello', 'typescript'];

//Tuple
const contact: [string, number] = ['Vladilen', 1234567];

//Any
let variable: any = 42;
// ...
variable = 'new string';

//====
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('haisinberg');

//Never
function throwError(message: string) {
  throw new Error(message);
}

//Type
// tupe Login = string;

// const login: Login = 'admin';

type ID = string | number;
const id1 = 1234;
const id2 = '1234';

//Null , Undefind
type SomeType = string | null | undefined;
