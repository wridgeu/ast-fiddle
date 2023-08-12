import { parse } from "@babel/parser";
import traverse from "@babel/traverse"; // v8.0.0-alpha.2
// https://github.com/babel/babel/issues/13855#issuecomment-945123514 - v7.22.10
// const traverse = _traverse.default 

const exampleCode = "2 + (4 * 20)";

const ast = parse(exampleCode);
/**
 * Hint for Visitors:
 * 	Each visitor is passed the node wrapped in a `path` object which 
 * 	is an additional object with helpful metadata and references to e.g. parentNodes 
 */
traverse(ast, {
	// NumericLiteral(path) {
	// 	console.log(path.node.value)
	// }
	NumericLiteral: {
		enter(path) {
			console.log(`Entered ${path.node.value}`);
		},
		exit(path) {
			console.log(`Exited ${path.node.value}`);
		}
	}
});