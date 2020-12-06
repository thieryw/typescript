//Demonstration of Partial utility type.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("Demonstration of Partial utility type");
var updateRectangleDimensions = function (rectangle, sideToUpdate) {
    return __assign(__assign({}, rectangle), sideToUpdate);
};
var rectangle = {
    "height": 40,
    "width": 50
};
console.log("width: " + rectangle.width + " - height: " + rectangle.height);
var rectangle1 = updateRectangleDimensions(rectangle, { height: 10 });
//will return rectangle but with height set to 10.
console.log("width: " + rectangle1.width + " - height: " + rectangle1.height);
//Demonstration of Record utility type and interfaces.
console.log("Demonstration of Record utility type and interfaces");
;
;
var myArr = [1, 2, 3, 4];
for (var i = 0; i < 4; i++) {
    console.log(myArr[i]);
}
var circle = {
    "color": "red",
    "diameter": 10
};
var rectangle_ = {
    "color": "green",
    "height": 10,
    "width": 40
};
var sdf = {
    20: {
        "color": "red",
        "height": 123,
        "width": 40
    }
};
var x = [1];
console.log(x);
var y = [{
        "n": 0,
        "s": "hello"
    }];
console.log("n : " + y[0].n + " s : " + y[0].s);
//Demonstration of Return type
var z = undefined;
console.log(z);
var a = 44;
console.log(a);
