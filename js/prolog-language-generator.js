/* global Blockly, goog */
/* eslint camelcase: "off" */

/*
 * Blockly code generator for Gobstones
 */
goog.require('Blockly.Generator');

Blockly.PrologLanguage = new Blockly.Generator('PrologLanguage');

/**
 * Order of operation ENUMs.
 * https://developer.mozilla.org/en/PrologLanguage/Reference/Operators/Operator_Precedence
 */
Blockly.PrologLanguage.ORDER_ATOMIC = 0;					 // 0 "" ...
Blockly.PrologLanguage.ORDER_NEW = 1.1;						// new
Blockly.PrologLanguage.ORDER_MEMBER = 1.2;				 // . []
Blockly.PrologLanguage.ORDER_FUNCTION_CALL = 2;		// ()
Blockly.PrologLanguage.ORDER_INCREMENT = 3;				// ++
Blockly.PrologLanguage.ORDER_DECREMENT = 3;				// --
Blockly.PrologLanguage.ORDER_BITWISE_NOT = 4.1;		// ~
Blockly.PrologLanguage.ORDER_UNARY_PLUS = 4.2;		 // +
Blockly.PrologLanguage.ORDER_UNARY_NEGATION = 4.3; // -
Blockly.PrologLanguage.ORDER_LOGICAL_NOT = 4.4;		// !
Blockly.PrologLanguage.ORDER_TYPEOF = 4.5;				 // typeof
Blockly.PrologLanguage.ORDER_VOID = 4.6;					 // void
Blockly.PrologLanguage.ORDER_DELETE = 4.7;				 // delete
Blockly.PrologLanguage.ORDER_DIVISION = 5.1;			 // /
Blockly.PrologLanguage.ORDER_MULTIPLICATION = 5.2; // *
Blockly.PrologLanguage.ORDER_MODULUS = 5.3;				// %
Blockly.PrologLanguage.ORDER_SUBTRACTION = 6.1;		// -
Blockly.PrologLanguage.ORDER_ADDITION = 6.2;			 // +
Blockly.PrologLanguage.ORDER_BITWISE_SHIFT = 7;		// << >> >>>
Blockly.PrologLanguage.ORDER_RELATIONAL = 8;			 // < <= > >=
Blockly.PrologLanguage.ORDER_IN = 8;							 // in
Blockly.PrologLanguage.ORDER_INSTANCEOF = 8;			 // instanceof
Blockly.PrologLanguage.ORDER_EQUALITY = 9;				 // == != === !==
Blockly.PrologLanguage.ORDER_BITWISE_AND = 10;		 // &
Blockly.PrologLanguage.ORDER_BITWISE_XOR = 11;		 // ^
Blockly.PrologLanguage.ORDER_BITWISE_OR = 12;			// |
Blockly.PrologLanguage.ORDER_LOGICAL_AND = 13;		 // &&
Blockly.PrologLanguage.ORDER_LOGICAL_OR = 14;			// ||
Blockly.PrologLanguage.ORDER_CONDITIONAL = 15;		 // ?:
Blockly.PrologLanguage.ORDER_ASSIGNMENT = 16;			// = += -= *= /= %= <<= >>= ...
Blockly.PrologLanguage.ORDER_COMMA = 17;					 // ,
Blockly.PrologLanguage.ORDER_NONE = 99;						// (...)


Blockly.PrologLanguage.addPragma = function(block, str){
	if(!str || !Blockly.PrologLanguage.shouldAddRegionPragma) return str;
	// add newLine if block is a command or definition
	const newLine = str[str.length-1] === '\n' ? '\n' : '';
	return `/*@BEGIN_REGION@${block.id}@*/${newLine}${str}/*@END_REGION@*/${newLine}`;
};
// Gobstones pragma BEGIN_REGION should avoid char 'at' ( @ )
Blockly.utils.genUid.soup_ = Blockly.utils.genUid.soup_.replace(/@/g,"a");

/**
 * Retorna la función que representa la llamada a un procedimiento o funcion F(arg1, arg2, ...)
 * Importante: los arg son input values, no fields.
 */
function callGenerator(name, args = [], newLine, order) {
	return function (block) {
		var code = name + '(';
		var sep = '';
		args.forEach(function (arg) {
			code += sep + Blockly.PrologLanguage.valueToCode(block, arg,
				Blockly.PrologLanguage.ORDER_NONE);
			sep = ', ';
		});
		code += newLine ? '),\n' : ').';
		return order ? [code, order] : code;
	};
}

/**
 * Retorna la funcion que genera el codigo para un bloque tipo PRED(arg1, arg2, ...)
 */
function predBlockCodeGenerator(procName, args, newLine) {
  debugger;
	return callGenerator(procName, args, true);
}
window.predBlockCodeGenerator = predBlockCodeGenerator;

/**
 * Retorna la funcion que genera el codigo para un bloque tipo function(arg1, arg2, ...)
 */
function functionBlockCodeGenerator(procName, args) {
	return callGenerator(procName, args, false, Blockly.PrologLanguage.ORDER_FUNCTION_CALL);
}
window.functionBlockCodeGenerator = functionBlockCodeGenerator;

/**
 * Retorna la funcion que genera el codigo para un bloque tipo Expr(arg1, arg2, ...)
 */
function exprParamsBlockCodeGenerator(expr, args) {
	return callGenerator(expr, args, false, Blockly.PrologLanguage.ORDER_FUNCTION_CALL);
}

/**
 * Retorna la funcion que genera el codigo para un bloque tipo selector de literales
 */
function literalSelectorBlockCodeGenerator(type) {
	return function(block) {
		return [block.getFieldValue(type + 'Dropdown'), Blockly.PrologLanguage.ORDER_ATOMIC];
	};
}

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.PrologLanguage.finish = function (code) {
	// Convert the definitions dictionary into a list.
	var definitions = [];
	for (var name in Blockly.PrologLanguage.definitions_) {
		if (name !== undefined) {
			definitions.push(Blockly.PrologLanguage.definitions_[name]);
		}
	}
	// Clean up temporary data.
	delete Blockly.PrologLanguage.definitions_;
	delete Blockly.PrologLanguage.functionNames_;
	Blockly.PrologLanguage.variableDB_.reset();
	return definitions.join('\n') + '\n\n' + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.	A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.PrologLanguage.scrubNakedValue = function (line) {
	return line;
};

/**
 * Encode a string as a properly escaped PrologLanguage string, complete with
 * quotes.
 * @param {string} string Text to encode.
 * @return {string} PrologLanguage string.
 * @private
 */
Blockly.PrologLanguage.quote_ = function (string) {
	// Can't use goog.string.quote since Google's style guide recommends
	// JS string literals use single quotes.
	string = string.replace(/\\/g, '\\\\')
						.replace(/\n/g, '\\\n')
						.replace(/'/g, '\\\'');
	return '\'' + string + '\'';
};

/**
 * Common tasks for generating PrologLanguage from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The PrologLanguage code created for this block.
 * @return {string} PrologLanguage code with comments and subsequent blocks added.
 * @private
 */
Blockly.PrologLanguage.scrub_ = function (block, code) {
	var commentCode = '';
	var comment;
	// Only collect comments for blocks that aren't inline.
	if (!block.outputConnection || !block.outputConnection.targetConnection) {
		// Collect comment for this block.
		comment = block.getCommentText();
		comment = Blockly.utils.wrap(comment, Blockly.PrologLanguage.COMMENT_WRAP - 3);
		if (comment) {
			if (block.getProcedureDef) {
				// Use a comment block for function comments.
				commentCode += '//\n' +
					Blockly.PrologLanguage.prefixLines(comment + '\n', '// ') +
					'//\n';
			} else {
				commentCode += Blockly.PrologLanguage.prefixLines(comment + '\n', '// ');
			}
		}
		// Collect comments for all value arguments.
		// Don't collect comments for nested statements.
		for (var i = 0; i < block.inputList.length; i++) {
			if (block.inputList[i].type === Blockly.INPUT_VALUE) {
				var childBlock = block.inputList[i].connection.targetBlock();
				if (childBlock) {
					comment = Blockly.PrologLanguage.allNestedComments(childBlock);
					if (comment) {
						commentCode += Blockly.PrologLanguage.prefixLines(comment, '// ');
					}
				}
			}
		}
	}
	var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	var nextCode = Blockly.PrologLanguage.blockToCode(nextBlock);
	return Blockly.PrologLanguage.addPragma(block,commentCode + code) + nextCode;
};

/**
 * Gets a property and adjusts the value while taking into account indexing.
 * @param {!Blockly.Block} block The block.
 * @param {string} atId The property ID of the element to get.
 * @param {number=} optDelta Value to add.
 * @param {boolean=} optNegate Whether to negate the value.
 * @param {number=} optOrder The highest order acting on this value.
 * @return {string|number}
 */
Blockly.PrologLanguage.getAdjusted = function (block, atId, optDelta, optNegate,
		optOrder) {
	var delta = optDelta || 0;
	var order = optOrder || Blockly.PrologLanguage.ORDER_NONE;
	if (Blockly.PrologLanguage.ONE_BASED_INDEXING) {
		delta--;
	}
	var defaultAtIndex = Blockly.PrologLanguage.ONE_BASED_INDEXING ? '1' : '0';
	var at;
	var innerOrder;
	if (delta > 0) {
		at = Blockly.PrologLanguage.valueToCode(block, atId,
				Blockly.PrologLanguage.ORDER_ADDITION) || defaultAtIndex;
	} else if (delta < 0) {
		at = Blockly.PrologLanguage.valueToCode(block, atId,
				Blockly.PrologLanguage.ORDER_SUBTRACTION) || defaultAtIndex;
	} else if (optNegate) {
		at = Blockly.PrologLanguage.valueToCode(block, atId,
				Blockly.PrologLanguage.ORDER_UNARY_NEGATION) || defaultAtIndex;
	} else {
		at = Blockly.PrologLanguage.valueToCode(block, atId, order) ||
				defaultAtIndex;
	}

	if (Blockly.isNumber(at)) {
		// If the index is a naked number, adjust it right now.
		at = parseFloat(at) + delta;
		if (optNegate) {
			at = -at;
		}
	} else {
		// If the index is dynamic, adjust it in code.
		if (delta > 0) {
			at = at + ' + ' + delta;
			innerOrder = Blockly.PrologLanguage.ORDER_ADDITION;
		} else if (delta < 0) {
			at = at + ' - ' + -delta;
			innerOrder = Blockly.PrologLanguage.ORDER_SUBTRACTION;
		}
		if (optNegate) {
			if (delta) {
				at = '-(' + at + ')';
			} else {
				at = '-' + at;
			}
			innerOrder = Blockly.PrologLanguage.ORDER_UNARY_NEGATION;
		}
		innerOrder = Math.floor(innerOrder);
		order = Math.floor(order);
		if (innerOrder && order >= innerOrder) {
			at = '(' + at + ')';
		}
	}
	return at;
};

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.PrologLanguage.init = function () {
	// Create a dictionary of definitions to be printed before the code.
	Blockly.PrologLanguage.definitions_ = Object.create(null);
	// Create a dictionary mapping desired function names in definitions_
	// to actual function names (to avoid collisions with user functions).
	Blockly.PrologLanguage.functionNames_ = Object.create(null);

	if (Blockly.PrologLanguage.variableDB_) {
		Blockly.PrologLanguage.variableDB_.reset();
	} else {
		Blockly.PrologLanguage.variableDB_ =
				new Blockly.Names(Blockly.PrologLanguage.RESERVED_WORDS_);

		// Gobstones lets ñáéíóú, so Blockly's safeName should be rewritten.
		// In the process, makes everything CamelCase which is Gobstones' default.
		Blockly.PrologLanguage.variableDB_.safeName_ = function(name) {
		  if (!name) return 'unnamed';

		  //Get rid of unwanted chars
		  var safe = name.replace(/[^\wáéíóúÁÉÍÓÚñÑ ]/g, '')

		  //Escape initial numbers
		  if ('0123456789'.indexOf(safe[0]) != -1) safe = 'my ' + safe;

		  // Join spaces capitalizing in the process: ¡Gobstones is CamelCase!
		  // Leave first char as user wanted, for now...
		  safe = safe.split(' ').map((word, i) =>
				!word | i == 0 ? word : word[0].toUpperCase() + word.slice(1)
		  	).join('');

		  return safe;
		};
	}
};

Blockly.PrologLanguage.Poner = predBlockCodeGenerator('Poner', ['COLOR']);
Blockly.PrologLanguage.Sacar = predBlockCodeGenerator('Sacar', ['COLOR']);
Blockly.PrologLanguage.Mover = predBlockCodeGenerator('Mover', ['DIRECCION']);
Blockly.PrologLanguage.IrAlBorde = predBlockCodeGenerator('IrAlBorde', ['DIRECCION']);
Blockly.PrologLanguage.VaciarTablero = predBlockCodeGenerator('VaciarTablero');
Blockly.PrologLanguage.BOOM = function(block) {
	var desc = block.getFieldValue('boomDescription');
	var sinComillasEnvolventes = desc;
	if (desc[0] === "\"" && desc[desc.length-1] === "\"") {
		sinComillasEnvolventes = desc.substring(1, desc.length-1);
 	}
	return 'BOOM("' + sinComillasEnvolventes.replace(/"/g, "'") + '")\n';
};


Blockly.PrologLanguage.ComandoCompletar = b => 'BOOM("El programa todavía no está completo")\n';
Blockly.PrologLanguage.ExpresionCompletar = b => ['boom("El programa todavía no está completo")',Blockly.PrologLanguage.ORDER_FUNCTION_CALL];
Blockly.PrologLanguage.AsociacionDeTeclaCompletar = b => ''

Blockly.PrologLanguage.ColorSelector = literalSelectorBlockCodeGenerator('Color');
Blockly.PrologLanguage.DireccionSelector = literalSelectorBlockCodeGenerator('Direccion');
Blockly.PrologLanguage.BoolSelector = literalSelectorBlockCodeGenerator('Bool');

Blockly.PrologLanguage.OperadorDeComparacion = function (block) {
	var code =
		(Blockly.PrologLanguage.valueToCode(block, 'arg1', Blockly.PrologLanguage.ORDER_RELATIONAL) || '()') +
' ' +
		block.getFieldValue('RELATION') +
		' ' +
		(Blockly.PrologLanguage.valueToCode(block, 'arg2', Blockly.PrologLanguage.ORDER_RELATIONAL) || '()');
	return [code, Blockly.PrologLanguage.ORDER_RELATIONAL];
};

Blockly.PrologLanguage.OperadorNumerico = function (block) {
	var code = (Blockly.PrologLanguage.valueToCode(block, 'arg1',
		Blockly.PrologLanguage.ORDER_MODULUS) || '()') +
		' ' + block.getFieldValue('OPERATOR') + ' ' +
		(Blockly.PrologLanguage.valueToCode(block, 'arg2',
			Blockly.PrologLanguage.ORDER_MODULUS) || '()')
		;
	return [code, Blockly.PrologLanguage.ORDER_MODULUS];
};

Blockly.PrologLanguage.OperadorLogico = function(block) {
  // Operations 'and', 'or'.
	var operator = block.getFieldValue('OPERATOR');
	if (operator === "AND") operator = "&&";
	var order = (operator == '&&') ? Blockly.PrologLanguage.ORDER_LOGICAL_AND : Blockly.PrologLanguage.ORDER_LOGICAL_OR;
	var argument0 = Blockly.PrologLanguage.valueToCode(block, 'arg1', order) || '()';
	var argument1 = Blockly.PrologLanguage.valueToCode(block, 'arg2', order) || '()';
/* Este código lo comento porque creo que prefiero que estalle gobstones web
	if (!argument0 && !argument1) {
		// If there are no arguments, then the return value is false.
		argument0 = 'False';
		argument1 = 'False';
	} else {
		// Single missing arguments have no effect on the return value.
		var defaultArgument = (operator == '&&') ? 'True' : 'False';
		if (!argument0) {
			argument0 = defaultArgument;
		}
		if (!argument1) {
			argument1 = defaultArgument;
		}
	}
*/
	var code = argument0 + ' ' + operator + ' ' + argument1;
	return [code, order];
};

Blockly.PrologLanguage.not = exprParamsBlockCodeGenerator('not',['VALUE']);
Blockly.PrologLanguage.siguiente = exprParamsBlockCodeGenerator('siguiente',['VALUE']);
Blockly.PrologLanguage.previo = exprParamsBlockCodeGenerator('previo',['VALUE']);
Blockly.PrologLanguage.opuesto = exprParamsBlockCodeGenerator('opuesto',['VALUE']);

Blockly.PrologLanguage.math_number = function (block) {
	// Numeric value.
	var code = parseFloat(block.getFieldValue('NUM'));
	return [code, Blockly.PrologLanguage.ORDER_ATOMIC];
};

Blockly.PrologLanguage.Program = function (block) {
	let program = Blockly.PrologLanguage.statementToCode(block, 'program');
	let codigo = `program {\n${program}}\n`;
	return codigo;
};

Blockly.PrologLanguage.InteractiveProgram = function (block) {
	let program = Blockly.PrologLanguage.statementToCode(block, 'interactiveprogram');

	let init = '';
	if (block.$init)
		init = `  INIT -> {\n${Blockly.PrologLanguage.statementToCode(block, 'init')}  }\n`;

	let timeout = '';
	if (block.$timeout)
		timeout = `  TIMEOUT(${block.$timeout}) -> {\n${Blockly.PrologLanguage.statementToCode(block, 'timeout')}  }\n`;

	let codigo = `interactive program {\n${init}${program}${timeout}}\n`;
	return codigo;
};

Blockly.PrologLanguage.InteractiveLetterBinding = function (block) {
	let key = block.getFieldValue('InteractiveBindingDropdownKey');

	const order = ["CTRL", "ALT", "SHIFT"];
	const modifier = block.inputList[1]
		.fieldRow
		.slice(2)
		.filter(it => it.constructor === Blockly.FieldDropdown)
		.map(it => order.indexOf(it.getValue()))
		.sort()
		.map(it => order[it])
		.join("_");

	if (modifier !== "")
		key = modifier + "_" + key;

	const code = Blockly.PrologLanguage.statementToCode(block, 'block');

	return `K_${key} -> {\n${code}}\n`;
};
Blockly.PrologLanguage.InteractiveNumberBinding = Blockly.PrologLanguage.InteractiveLetterBinding;
Blockly.PrologLanguage.InteractiveKeyBinding = Blockly.PrologLanguage.InteractiveLetterBinding;

Blockly.PrologLanguage.RepeticionSimple = function (block) {
	let body = Blockly.PrologLanguage.statementToCode(block, 'block');
	var count = Blockly.PrologLanguage.valueToCode(block, 'count',
	Blockly.PrologLanguage.ORDER_NONE) || '';

	let codigo = `repeat(${count}) {\n${body}}\n`;
	return codigo;
};

Blockly.PrologLanguage.RepeticionCondicional = function (block) {
	let body = Blockly.PrologLanguage.statementToCode(block, 'block');
	var condicion = Blockly.PrologLanguage.valueToCode(block, 'condicion',
	Blockly.PrologLanguage.ORDER_NONE) || '';

	let codigo = `while (not (${condicion})) {\n${body}}\n`;
	return codigo;
};

Blockly.PrologLanguage.AlternativaSimple = function (block) {
	let body = Blockly.PrologLanguage.statementToCode(block, 'block');
	var condicion = Blockly.PrologLanguage.valueToCode(block, 'condicion',
	Blockly.PrologLanguage.ORDER_NONE) || '';

	let codigo = `if (${condicion}) {\n${body}}\n`;
	return codigo;
};

Blockly.PrologLanguage.AlternativaCompleta = function (block) {
	const elseIfCount = block.elseifCount_;
	let body1 = Blockly.PrologLanguage.statementToCode(block, 'block1');
	let body2 = Blockly.PrologLanguage.statementToCode(block, 'block2');

	const elseIfBodies = Array.apply(null, Array(elseIfCount))
		.map(function (_, i) {
			const id = i + 1;
			return {
				condition: Blockly.PrologLanguage.valueToCode(block, "IF" + id,
	Blockly.PrologLanguage.ORDER_NONE),
				body: Blockly.PrologLanguage.statementToCode(block, "DO" + id)
			};
		}).map(function({ condition, body }) {
			return ` elseif (${condition}) {\n${body}}`;
		}).join("");

	var condicion = Blockly.PrologLanguage.valueToCode(block, 'condicion',
	Blockly.PrologLanguage.ORDER_NONE) || '';

	let codigo = `if (${condicion}) {\n${body1}}${elseIfBodies} else {\n${body2}}\n`;
	return codigo;
};

Blockly.PrologLanguage.hayBolitas = exprParamsBlockCodeGenerator('hayBolitas', ['VALUE']);
Blockly.PrologLanguage.nroBolitas = exprParamsBlockCodeGenerator('nroBolitas', ['VALUE']);
Blockly.PrologLanguage.puedeMover = exprParamsBlockCodeGenerator('puedeMover', ['VALUE']);

var formatCallName = function (name, capitalizeFirst, type = Blockly.PROCEDURE_CATEGORY_NAME) {
	if(!name) throw new Error(type + " name is empty");
	var safe = Blockly.PrologLanguage.variableDB_.getName(name, type);
	return (capitalizeFirst ? safe[0].toUpperCase() : safe[0].toLowerCase()) + safe.slice(1);
};

var makeParameterList = function (block) {
	return block.arguments_
		.map(arg => formatCallName(arg, false, Blockly.VARIABLE_CATEGORY_NAME))
		.join(', ');
};

Blockly.PrologLanguage.procedures_defnoreturn = function (block) {
	var name = formatCallName(block.getFieldValue('NAME'),true);
	var body = Blockly.PrologLanguage.statementToCode(block, 'STACK');

	var code = name + '(' + makeParameterList(block) + ') :- \n' +
		body + '\n';

	code = Blockly.PrologLanguage.scrub_(block, code);
	Blockly.PrologLanguage.definitions_[name] = code;

	return null;
};

Blockly.PrologLanguage.procedures_defreturn = function (block) {
	var name = formatCallName(block.getFieldValue('NAME'),false);
	var body = Blockly.PrologLanguage.statementToCode(block, 'STACK');
	var returnValue = Blockly.PrologLanguage.valueToCode(block, 'RETURN');

	var code = 'function ' + name + '(' + makeParameterList(block) + ') {\n' +
		body + '  return (' + returnValue + ')\n}\n';

	code = Blockly.PrologLanguage.scrub_(block, code);
	Blockly.PrologLanguage.definitions_[name] = code;

	return null;
};

Blockly.PrologLanguage.procedures_defnoreturnnoparams = Blockly.PrologLanguage.procedures_defnoreturn;
Blockly.PrologLanguage.procedures_defreturnsimplewithparams = Blockly.PrologLanguage.procedures_defreturn;
Blockly.PrologLanguage.procedures_defreturnsimple = Blockly.PrologLanguage.procedures_defreturn;

var procedureCall = function(block, capitalizeFirst, newLine) {
	var procName = formatCallName(block.getFieldValue('NAME'),capitalizeFirst);
	var args = [];
	for (var i = 0; i < block.arguments_.length; i++) {
		args[i] = Blockly.PrologLanguage.valueToCode(block, 'ARG' + i,
			Blockly.PrologLanguage.ORDER_COMMA) || '';
	}
	var code = procName + '(' + args.join(', ') + ')' + (newLine ? '\n' : '');
	return code;
}

Blockly.PrologLanguage.procedures_callnoreturn = function (block) {
	return procedureCall(block, true, true);
};
Blockly.PrologLanguage.procedures_callreturn = function (block) {
	return [procedureCall(block, false), Blockly.PrologLanguage.ORDER_FUNCTION_CALL];
};

Blockly.PrologLanguage.procedures_callnoreturnnoparams = Blockly.PrologLanguage.procedures_callnoreturn;
Blockly.PrologLanguage.procedures_callreturnsimplewithparams = Blockly.PrologLanguage.procedures_callreturn;
Blockly.PrologLanguage.procedures_callreturnsimple = Blockly.PrologLanguage.procedures_callreturn;

Blockly.PrologLanguage.variables_get = function (block) {
	var code = formatCallName(block.getFieldValue('VAR'),false,Blockly.VARIABLE_CATEGORY_NAME);
	return [code, Blockly.PrologLanguage.ORDER_ATOMIC];
};

Blockly.PrologLanguage.Asignacion = function(block) {
  var varValue = Blockly.PrologLanguage.valueToCode(block, 'varValue', Blockly.PrologLanguage.ORDER_ASSIGNMENT);
  var code = formatCallName(block.getFieldValue('varName'),false,Blockly.VARIABLE_CATEGORY_NAME)  +
  	' := ' + varValue + '\n';
  return code;
};
