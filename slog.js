
// convert slog program to a json object

import antlr4 from "antlr4";
import slogLexer from "./slogLexer.js";
import slogParser from "./slogParser.js";
import slogVisitor from "./slogVisitor.js";

class SlogJSONVisitor extends slogVisitor {

	visitChildren(ctx) {
		if (!ctx) {
			return;
		}

		if (ctx.children) {
			return ctx.children.map(child => {
				if (child.children && child.children.length != 0) {
					return child.accept(this);
				} else {
					return {
						"kind": "term",
						"text": child.getText(),
						"line": child.symbol.line,
						"column": child.symbol.column
					};
				}
			});
		}
	}

	// Visit a parse tree produced by slogParser#horn_clause.
	visitHorn_clause(ctx) {
		let [lp, left_list, arrow_d, right_list, rp] = this.visitChildren(ctx);
		let direction = "left";
		let heads = left_list;
		let bodies = right_list;
		if (arrow_d[0]["text"] === "-->") {
			direction = "right";
			heads = right_list;
			bodies = left_list;
		}
		return {
			"kind": "horn_clause",
			"heads": heads,
			"bodies": bodies,
			"start_line": lp["line"],
			"start_column": lp["column"],
			"end_line": rp["line"],
			"end_column": rp["column"]
		};
	}

	// Visit a parse tree produced by slogParser#tuple.
	visitTuple(ctx) {
		let children_nodes = this.visitChildren(ctx);
		let tuple_start = 0;
		let tuple_type = "normal";
		if (ctx.children.length === 5) {
			tuple_start = 1;
			if (children_nodes[0]["text"] === "!") {
				tuple_type = "bang";
			} else {
				tuple_type = "huh";
			}
		}
		let lp = children_nodes[tuple_start];
		let relname = children_nodes[tuple_start + 1];
		let args = children_nodes[tuple_start + 2];
		let rp = children_nodes[tuple_start + 3];
		return {
			"kind": "tuple",
			"tuple_type": tuple_type,
			"rel_name": relname,
			"args": args,
			"start_line": lp["line"],
			"start_column": lp["column"],
			"end_line": rp["line"],
			"end_column": rp["column"]
		};
	}


	// Visit a parse tree produced by slogParser#do_tuple.
	visitDo_tuple(ctx) {
		let [prefix, lp, args, rp] = this.visitChildren(ctx);
		let tuple_type = "bang";
		if (prefix[0]["text"] === "?do") {
			tuple_type = "huh";
		}
		return {
			"kind": "do_tuple",
			"tuple_type": tuple_type,
			"args": args,
			"start_line": lp["line"],
			"satrt_column": lp["column"],
			"end_line": rp["line"],
			"end_column": rp["column"]
		};
	}


	// Visit a parse tree produced by slogParser#curly_tuple.
	visitCurly_tuple(ctx) {
		let [lc, rel_name, args, rc] = this.visitChildren(ctx);
		return {
			"kind": "curly_tuple",
			"rel_name": rel_name,
			"args": args,
			"start_line": lc["line"],
			"satrt_column": lc["column"],
			"end_line": rc["line"],
			"end_column": rc["column"]
		};
	}
}

export default function slog2json(slogProg) {
	const chars = new antlr4.InputStream(slogProg);
	const lexer = new slogLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new slogParser(tokens);
	parser.buildParseTrees = true;
	const slog_tree = parser.slog();
	const json_text = JSON.stringify(slog_tree.accept(new SlogJSONVisitor()));
	return json_text;
}

let stdin = process.openStdin();
let data = "";
stdin.on('data', function (chunk) {
	data += chunk;
})
stdin.on('end', function () {
	console.log(slog2json(data));
});
