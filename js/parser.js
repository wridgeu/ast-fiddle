import { parse } from "@babel/parser";

const exampleCode = "2 + (4 * 20)";

const ast = parse(exampleCode);

console.log(ast.program.body[0]);