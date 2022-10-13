// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import slogListener from './slogListener.js';
import slogVisitor from './slogVisitor.js';

const serializedATN = [4,1,18,93,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,1,
1,1,5,1,29,8,1,10,1,12,1,32,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,5,3,41,8,3,10,
3,12,3,44,9,3,1,4,1,4,1,4,1,4,3,4,50,8,4,1,5,1,5,1,6,1,6,1,7,3,7,57,8,7,
1,7,1,7,1,7,5,7,62,8,7,10,7,12,7,65,9,7,1,7,1,7,1,8,1,8,1,8,5,8,72,8,8,10,
8,12,8,75,9,8,1,8,1,8,1,9,1,9,1,9,5,9,82,8,9,10,9,12,9,85,9,9,1,9,1,9,1,
10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,4,1,0,2,3,
2,0,4,4,6,6,2,0,5,5,7,7,3,0,8,8,10,11,18,18,90,0,24,1,0,0,0,2,30,1,0,0,0,
4,33,1,0,0,0,6,42,1,0,0,0,8,49,1,0,0,0,10,51,1,0,0,0,12,53,1,0,0,0,14,56,
1,0,0,0,16,68,1,0,0,0,18,78,1,0,0,0,20,88,1,0,0,0,22,90,1,0,0,0,24,25,7,
0,0,0,25,1,1,0,0,0,26,29,3,14,7,0,27,29,3,4,2,0,28,26,1,0,0,0,28,27,1,0,
0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,3,1,0,0,0,32,30,1,0,0,0,
33,34,5,14,0,0,34,35,3,6,3,0,35,36,3,0,0,0,36,37,3,6,3,0,37,38,5,15,0,0,
38,5,1,0,0,0,39,41,3,8,4,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,
43,1,0,0,0,43,7,1,0,0,0,44,42,1,0,0,0,45,50,3,22,11,0,46,50,3,14,7,0,47,
50,3,18,9,0,48,50,3,16,8,0,49,45,1,0,0,0,49,46,1,0,0,0,49,47,1,0,0,0,49,
48,1,0,0,0,50,9,1,0,0,0,51,52,7,1,0,0,52,11,1,0,0,0,53,54,7,2,0,0,54,13,
1,0,0,0,55,57,3,12,6,0,56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,59,5,
12,0,0,59,63,3,20,10,0,60,62,3,8,4,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,1,
0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,5,13,0,0,67,15,1,0,
0,0,68,69,3,10,5,0,69,73,5,12,0,0,70,72,3,8,4,0,71,70,1,0,0,0,72,75,1,0,
0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,75,73,1,0,0,0,76,77,5,13,0,
0,77,17,1,0,0,0,78,79,5,16,0,0,79,83,3,20,10,0,80,82,3,8,4,0,81,80,1,0,0,
0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,
86,87,5,17,0,0,87,19,1,0,0,0,88,89,5,11,0,0,89,21,1,0,0,0,90,91,7,3,0,0,
91,23,1,0,0,0,8,28,30,42,49,56,63,73,83];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class slogParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, null, "'-->'", "'<--'", "'!do'", "'!'", 
                            "'?do'", "'?'", null, null, null, null, "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "'.'" ];
    static symbolicNames = [ null, "COMMENT", "RARROW", "LARROW", "BANG_DO", 
                             "BANG", "QUESTION_DO", "QUESTION", "STRING", 
                             "WHITESPACE", "NUMBER", "SYMBOL", "LPAREN", 
                             "RPAREN", "LBRAC", "RBRAC", "LCURLY", "RCURLY", 
                             "DOT" ];
    static ruleNames = [ "arrow", "slog", "horn_clause", "sexpr_list", "item", 
                         "do_prefix", "tuple_prefix", "tuple", "do_tuple", 
                         "curly_tuple", "rel_name", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = slogParser.ruleNames;
        this.literalNames = slogParser.literalNames;
        this.symbolicNames = slogParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	arrow() {
	    let localctx = new ArrowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, slogParser.RULE_arrow);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	slog() {
	    let localctx = new SlogContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, slogParser.RULE_slog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 20640) !== 0)) {
	            this.state = 28;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	            case 7:
	            case 12:
	                this.state = 26;
	                this.tuple();
	                break;
	            case 14:
	                this.state = 27;
	                this.horn_clause();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	horn_clause() {
	    let localctx = new Horn_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, slogParser.RULE_horn_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(slogParser.LBRAC);
	        this.state = 34;
	        this.sexpr_list();
	        this.state = 35;
	        this.arrow();
	        this.state = 36;
	        this.sexpr_list();
	        this.state = 37;
	        this.match(slogParser.RBRAC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sexpr_list() {
	    let localctx = new Sexpr_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, slogParser.RULE_sexpr_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 335344) !== 0)) {
	            this.state = 39;
	            this.item();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, slogParser.RULE_item);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 10:
	        case 11:
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.atom();
	            break;
	        case 5:
	        case 7:
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.tuple();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.curly_tuple();
	            break;
	        case 4:
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.do_tuple();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	do_prefix() {
	    let localctx = new Do_prefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, slogParser.RULE_do_prefix);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tuple_prefix() {
	    let localctx = new Tuple_prefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, slogParser.RULE_tuple_prefix);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tuple() {
	    let localctx = new TupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, slogParser.RULE_tuple);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===7) {
	            this.state = 55;
	            this.tuple_prefix();
	        }

	        this.state = 58;
	        this.match(slogParser.LPAREN);
	        this.state = 59;
	        this.rel_name();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 335344) !== 0)) {
	            this.state = 60;
	            this.item();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 66;
	        this.match(slogParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	do_tuple() {
	    let localctx = new Do_tupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, slogParser.RULE_do_tuple);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.do_prefix();
	        this.state = 69;
	        this.match(slogParser.LPAREN);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 335344) !== 0)) {
	            this.state = 70;
	            this.item();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
	        this.match(slogParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	curly_tuple() {
	    let localctx = new Curly_tupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, slogParser.RULE_curly_tuple);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(slogParser.LCURLY);
	        this.state = 79;
	        this.rel_name();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 335344) !== 0)) {
	            this.state = 80;
	            this.item();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this.match(slogParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rel_name() {
	    let localctx = new Rel_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, slogParser.RULE_rel_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(slogParser.SYMBOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, slogParser.RULE_atom);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 265472) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

slogParser.EOF = antlr4.Token.EOF;
slogParser.COMMENT = 1;
slogParser.RARROW = 2;
slogParser.LARROW = 3;
slogParser.BANG_DO = 4;
slogParser.BANG = 5;
slogParser.QUESTION_DO = 6;
slogParser.QUESTION = 7;
slogParser.STRING = 8;
slogParser.WHITESPACE = 9;
slogParser.NUMBER = 10;
slogParser.SYMBOL = 11;
slogParser.LPAREN = 12;
slogParser.RPAREN = 13;
slogParser.LBRAC = 14;
slogParser.RBRAC = 15;
slogParser.LCURLY = 16;
slogParser.RCURLY = 17;
slogParser.DOT = 18;

slogParser.RULE_arrow = 0;
slogParser.RULE_slog = 1;
slogParser.RULE_horn_clause = 2;
slogParser.RULE_sexpr_list = 3;
slogParser.RULE_item = 4;
slogParser.RULE_do_prefix = 5;
slogParser.RULE_tuple_prefix = 6;
slogParser.RULE_tuple = 7;
slogParser.RULE_do_tuple = 8;
slogParser.RULE_curly_tuple = 9;
slogParser.RULE_rel_name = 10;
slogParser.RULE_atom = 11;

class ArrowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_arrow;
    }

	RARROW() {
	    return this.getToken(slogParser.RARROW, 0);
	};

	LARROW() {
	    return this.getToken(slogParser.LARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterArrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitArrow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitArrow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SlogContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_slog;
    }

	tuple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TupleContext);
	    } else {
	        return this.getTypedRuleContext(TupleContext,i);
	    }
	};

	horn_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Horn_clauseContext);
	    } else {
	        return this.getTypedRuleContext(Horn_clauseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterSlog(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitSlog(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitSlog(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Horn_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_horn_clause;
    }

	LBRAC() {
	    return this.getToken(slogParser.LBRAC, 0);
	};

	sexpr_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sexpr_listContext);
	    } else {
	        return this.getTypedRuleContext(Sexpr_listContext,i);
	    }
	};

	arrow() {
	    return this.getTypedRuleContext(ArrowContext,0);
	};

	RBRAC() {
	    return this.getToken(slogParser.RBRAC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterHorn_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitHorn_clause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitHorn_clause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Sexpr_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_sexpr_list;
    }

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterSexpr_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitSexpr_list(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitSexpr_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_item;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	tuple() {
	    return this.getTypedRuleContext(TupleContext,0);
	};

	curly_tuple() {
	    return this.getTypedRuleContext(Curly_tupleContext,0);
	};

	do_tuple() {
	    return this.getTypedRuleContext(Do_tupleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Do_prefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_do_prefix;
    }

	QUESTION_DO() {
	    return this.getToken(slogParser.QUESTION_DO, 0);
	};

	BANG_DO() {
	    return this.getToken(slogParser.BANG_DO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterDo_prefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitDo_prefix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitDo_prefix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Tuple_prefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_tuple_prefix;
    }

	BANG() {
	    return this.getToken(slogParser.BANG, 0);
	};

	QUESTION() {
	    return this.getToken(slogParser.QUESTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterTuple_prefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitTuple_prefix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitTuple_prefix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_tuple;
    }

	LPAREN() {
	    return this.getToken(slogParser.LPAREN, 0);
	};

	rel_name() {
	    return this.getTypedRuleContext(Rel_nameContext,0);
	};

	RPAREN() {
	    return this.getToken(slogParser.RPAREN, 0);
	};

	tuple_prefix() {
	    return this.getTypedRuleContext(Tuple_prefixContext,0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterTuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitTuple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitTuple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Do_tupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_do_tuple;
    }

	do_prefix() {
	    return this.getTypedRuleContext(Do_prefixContext,0);
	};

	LPAREN() {
	    return this.getToken(slogParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(slogParser.RPAREN, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterDo_tuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitDo_tuple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitDo_tuple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Curly_tupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_curly_tuple;
    }

	LCURLY() {
	    return this.getToken(slogParser.LCURLY, 0);
	};

	rel_name() {
	    return this.getTypedRuleContext(Rel_nameContext,0);
	};

	RCURLY() {
	    return this.getToken(slogParser.RCURLY, 0);
	};

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterCurly_tuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitCurly_tuple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitCurly_tuple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Rel_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_rel_name;
    }

	SYMBOL() {
	    return this.getToken(slogParser.SYMBOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterRel_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitRel_name(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitRel_name(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = slogParser.RULE_atom;
    }

	STRING() {
	    return this.getToken(slogParser.STRING, 0);
	};

	SYMBOL() {
	    return this.getToken(slogParser.SYMBOL, 0);
	};

	NUMBER() {
	    return this.getToken(slogParser.NUMBER, 0);
	};

	DOT() {
	    return this.getToken(slogParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof slogListener ) {
	        listener.exitAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof slogVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




slogParser.ArrowContext = ArrowContext; 
slogParser.SlogContext = SlogContext; 
slogParser.Horn_clauseContext = Horn_clauseContext; 
slogParser.Sexpr_listContext = Sexpr_listContext; 
slogParser.ItemContext = ItemContext; 
slogParser.Do_prefixContext = Do_prefixContext; 
slogParser.Tuple_prefixContext = Tuple_prefixContext; 
slogParser.TupleContext = TupleContext; 
slogParser.Do_tupleContext = Do_tupleContext; 
slogParser.Curly_tupleContext = Curly_tupleContext; 
slogParser.Rel_nameContext = Rel_nameContext; 
slogParser.AtomContext = AtomContext; 
