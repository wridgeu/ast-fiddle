import { parse } from "@babel/parser";

const exampleCode = "2 + (4 * 20)";

const ast = parse(exampleCode);

const [statement] = ast.program.body;

if (
  statement.type === "ExpressionStatement" &&
  statement.expression.type === "BinaryExpression" &&
  statement.expression.left.type === "NumericLiteral" &&
  statement.expression.right.type === "BinaryExpression" &&
  statement.expression.right.left.type === "NumericLiteral" &&
  statement.expression.right.right.type === "NumericLiteral"
) {
  console.log(statement.expression.left.value); // 2
  console.log(statement.expression.right.left.value); // 4
  console.log(statement.expression.right.right.value); // 10
}
