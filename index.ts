//Demonstration of Partial utility type.

console.log("Demonstration of Partial utility type");

type Rectangle = {
    readonly width: number;
    readonly height: number;
}

const updateRectangleDimensions = (rectangle: Rectangle, sideToUpdate: Partial<Rectangle>) =>{
    return {...rectangle, ...sideToUpdate};
}

const rectangle: Rectangle = {
    "height": 40,
    "width": 50
};


console.log(`width: ${rectangle.width} - height: ${rectangle.height}`);

const rectangle1 = updateRectangleDimensions(rectangle, {height: 10});
//will return rectangle but with height set to 10.

console.log(`width: ${rectangle1.width} - height: ${rectangle1.height}`);


//Demonstration of Record utility type and interfaces.

console.log("Demonstration of Record utility type and interfaces");

interface Shape {
    color: string;
};

interface Circle extends Shape{
    diameter: number;
}

interface Rectangle_ extends Shape{
    width: number;
    height: number;
};

interface MyArray{
    [key: number] : number;
}

const myArr: MyArray = [1,2,3,4]

for(let i = 0; i < 4; i++){
    console.log(myArr[i]);
}
    
    

const circle: Circle = {
    "color" : "red",
    "diameter": 10
}

const rectangle_: Rectangle_ = {
    "color": "green",
    "height": 10,
    "width": 40
}

const sdf: Record<number, Rectangle_> = {
    20: {
        "color": "red",
        "height": 123,
        "width": 40
    }
}


//Demonstration of Parameter Utility type

declare function myFunction(n: number): void;


type MyFunction = Parameters<
    typeof myFunction
>

const x: MyFunction = [1];

console.log(x);

declare function myFunction2(args:{n: number; s: string}): void;

const y: Parameters<typeof myFunction2> = [{
    "n": 0,
    "s": "hello"
}]

console.log(`n : ${y[0].n} s : ${y[0].s}`);


//Demonstration of Return type

const z: ReturnType<typeof myFunction2> = undefined;

console.log(z);

declare function myFunction3(): number;

const a: ReturnType<typeof myFunction3> = 44;

console.log(a);
