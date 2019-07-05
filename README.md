# TypeScript sessions

## Prerequisites
1. Install TypeScript from npm using
```shell
npm i -g typescript
```
Check verison of TypeScript Compiler
```
tsc -v
```

See options of TypeScript Compiler
```
tsc
```

2. Install TSLint extension for better usage of lints
3. Install Prettier code formatter for better formatting (change option in VS Code Preferences)

## Topics

### Transpiling
Use `tsc <filename>` for transpiling a TypeScript file and creating JavaScript file
Compiler options can be passed but its best to use `tsconfig.json` file

```json
{
  "compilerOptions":
  {
    "target": "es3",
    "watch": true,
    "lib": ["dom", "es2017"]
  }
}
```

### Strong Typing
String type all the variables using build in types or custom types
Use `type` keyword for custom types

### Generics
Its is for using a type inside a class or a function
E.g Observable - which is a class which internally observes a value
The value can be generic typed and set while using

```TypeScript
class Observable<T> {
  constructor(public value: T) {}
}
let observableNumber: Observable<number>;
let observableGeneric = new Observable('new');
```

### Third party library
Installtion of lodash and its types



Reference: https://www.typescriptlang.org/index.html
