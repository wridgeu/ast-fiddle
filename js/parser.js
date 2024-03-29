import { parse } from "@babel/parser";

const exampleCode = "2 + (4 * 20)";

const ast = parse(exampleCode);

console.log(ast.program.body[0].expression.left.value); // 2
console.log(ast.program.body[0].expression.right.left.value); // 4
console.log(ast.program.body[0].expression.right.right.value); // 10