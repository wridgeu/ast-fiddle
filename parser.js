import { parse } from "@babel/parser";

const example = "2 + (4 * 20)";

const ast = parse(example)

console.log(ast.program.body[0])