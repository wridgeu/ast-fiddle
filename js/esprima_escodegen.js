import esprima from "esprima"; // could use acorn and various others
import escodegen from "escodegen"; // could use astring and various others
import { walk } from "estree-walker"; // could use of acorn-walk and various others

// from escodegen's playground: https://estools.github.io/escodegen/demo/index.html
const codeExample = "for(var i=1;i<=100;++i){if(i%15===0){console.log('FizzBuzz')}else if(i%3===0){console.log('Fizz')}else if(i%5===0){console.log('Buzz')}else{console.log(i)}}";

console.log(`Preparing parsing of ${codeExample}`);
console.log(`Parsing ...`);
let ast = esprima.parse(codeExample);
console.log(`Parsed, that is our AST (overview):`);
console.dir(ast);

console.log(`Walking AST`);
walk(ast, {
	leave(node) {
		if (node.type === "ExpressionStatement" &&
			node.expression.type === "CallExpression" &&
			node.expression.arguments[0].type === "Literal" &&
			node.expression.arguments[0].value === "FizzBuzz") {
			console.log(`Changing a node in the AST`);
			node.expression.arguments[0].value = "VisitorWasHere";
		}
	},
});
console.log(`Done walking AST`);
// results in (escodegen also formats, cool!)
// for (var i = 1; i <= 100; ++i) {
//     if (i % 15 === 0) {
//         console.log('VisitorWasHere');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }
console.log(`Generating formatted code from AST`);
console.log(escodegen.generate(ast));