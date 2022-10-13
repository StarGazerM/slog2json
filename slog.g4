

/*
A naive slog parser
*/
grammar slog;

COMMENT
   : ';' ~ ('\n' | '\r')* '\r'? '\n' -> channel (HIDDEN)
   ;


arrow : RARROW | LARROW;

RARROW
   : '-->'
   ;

LARROW
   : '<--'
   ;

BANG_DO: '!do';
BANG : '!';
QUESTION_DO: '?do';
QUESTION: '?';

slog
   : (tuple|horn_clause)*
   ;

horn_clause
   : LBRAC sexpr_list arrow sexpr_list RBRAC
   ;

sexpr_list
   : item*
   ;

item
   : atom
   | tuple
   | curly_tuple
   | do_tuple
//    | SEP
   ;

do_prefix: QUESTION_DO | BANG_DO;

tuple_prefix : BANG | QUESTION;

tuple
   : tuple_prefix? LPAREN rel_name item* RPAREN
   ;

do_tuple
   : do_prefix LPAREN item* RPAREN
   ;

curly_tuple
   : LCURLY rel_name item* RCURLY
   ;

rel_name
   : SYMBOL
   ;

atom
   : STRING
   | SYMBOL
   | NUMBER
   | DOT
   ;

STRING
   : '"' ('\\' . | ~ ('\\' | '"'))* '"'
   ;



WHITESPACE
   : (' ' | '\n' | '\t' | '\r')+ -> skip
   ;

NUMBER
   : ('+' | '-')? (DIGIT)+ ('.' (DIGIT)+)?
   ;


SYMBOL
   : SYMBOL_START (SYMBOL_START | DIGIT)*
   ;

LPAREN
   : '('
   ;

RPAREN
   : ')'
   ;

LBRAC : '[';
RBRAC : ']';
LCURLY : '{';
RCURLY : '}';

DOT
   : '.'
   ;

fragment SYMBOL_START
   : ('a' .. 'z')
   | ('A' .. 'Z')
   | '+'
   | '-'
   | '*'
   | '/'
   | '.'
   | '_'
   | '~'
   | '<'
   | '>'
   | '='
   ;

fragment DIGIT
   : ('0' .. '9')
   ;


