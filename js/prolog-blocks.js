var PLUS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAQAAAD2e2DtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfhDAUCCjFLV0NqAAAC60lEQVR42u3dQW7aQABA0Wl7MMjJICeDnIwuqm4qVQrYjMH/Pa/jsfFnTJDwjAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBUP7Y+gClOY4zznX9zHmN8bn3gLHcYtwXbYevDZ5nLost/G7dx2foUeNzyyy+BN7Zs8ncjeHvrvP/NAW9qvff/rueAn1sfwNMcX3hvL2S/3wPcVt7fTl+p/c4AfIsA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4mYHcBinVRdz+v+2tjlHfdrv8lRjHFZcyG3P22VmBPOWQrrsd+WtJ7iOjzkDzQrA5b/XpATmBHAY1ynj7MtxfD1/kDkBrP+RrGHC1ZnxX8Bpwhj7NOGV8z1A3IxbgBvA455+fcwAcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcT9mjLKcevTfFPn5/860AwQ58ehr2wnPw51C3jMccYgcwL48nyAu11nPB3AI2Je1bRHxMz7EPgxjuaBb7mO46zLP3MG+OMwjuM8ecx3cp419f81O4B51v7PY6evlO8B4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQJ4A4AcQJIE4AcQKIE0CcAOIEECeAOAHECSBOAHECiBNAnADiBBAngDgBxAkgTgBxAogTQJwA4gQQN2fp2G0cV9zXhEVct7HfGeD6wntjisu4rbRdtj4VHnFYLYDD1qfCY9aZA7z/39jyBFz+N7fsRrD7yX+n62H+4zTG3QvWnscYn1sfOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALvzG8Ijm7EmMQYoAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTEyLTA1VDAyOjEwOjQ5LTA1OjAwJa2zowAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0xMi0wNVQwMjoxMDo0OS0wNTowMFTwCx8AAAAASUVORK5CYII=";
var MINUS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAQAAAD2e2DtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfhDAUCCi+xWH4JAAABcUlEQVR42u3c7ZGCMBSG0etuYcTKls7AyrSEVWd4+bjnUECMeSbhD6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBzu4XHm2rUvPekD2yutR57/4itTLXU0/Pvs9SUW5TcDrDUyE3r9Na6ZwZKBWD5PxVKIBPAVGtknGsZibeBTADPyCjXE1idn8A0/gJjXFPgn0sEwIEljgAHwPc2Xx87QHMCaE4AzQmgOQE0J4DmBNCcAJoTQHMCaE4AzQmgOQE0J4DmBNCcAJoTQHMCaE4AzQmgOQE0J4DmBNDcb2SUsfc0T2re/utAO0BzPg49sot8HOoI+M5IDJIJ4OF+gI+F7gpyRcwxxa6Iyb0E3mvYB96y1kgtv2vijubS18QBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAWXq7xrTQhKAi3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTEyLTA1VDAyOjEwOjQ3LTA1OjAwdZLI/gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0xMi0wNVQwMjoxMDo0Ny0wNTowMATPcEIAAAAASUVORK5CYII=";
var HAND = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiBAUBKBeKSgeBAAABTElEQVQoz22QzyvDcRjHX5/vvrMyStI2uZgftdVCSpJCyW1y00oUF+Xg4OIkx5VyUyJOsgv/gnJw4YCSSFMyB5pGbLJ99/k8LltreB2f9+v50eOigoc5FvGTJF8pugCwaKaNaE98uf9zMBXwjtNpbvmuaH2B0+HXuuyMEbOlQ4U1M5ZVcYbowg02YfZW5cnE9JIROdI7jsiOacoMPLZdEYPR1ouQkxCRG+feESlIXkQOzLR+NhvCpc3UbPcHAoRsADcAQ0Twq0ZosQgEVY0SqvGpkAUCxkIUYRP4bZRRNi9pvaD+TwXyFseHuYzy/Kt8CWfQ5Ems6C/5y7uZyDEH0Nt8vq0dUx0XzaapPyIIoIi23+47+SrlTvrTjLhKy2wmO95OqiacS+QBH9gAFDlOZnYbrimWOixSZCwUlK+vZd7bXiPldyi0yqX1OtkfCBS/9XAtDKAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDQtMDVUMDQ6NDQ6NDItMDM6MDD+uUN1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA0LTA1VDA0OjQwOjIzLTAzOjAw5hdZgAAAAABJRU5ErkJggg==";
var CLEAN = "data:image/png;base64,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";

/* global Blockly */

Blockly.CUSTOM_COLORS = {"globalHsvSaturation":0.45,"globalHsvValue":0.65,"primitiveCommand":"#1d3c99","assignation":"#051d66","controlStructure":"#0f2b80","literalExpression":"#1d992c","primitiveExpression":"#1d992c","operator":"#0f801c","program":"#8d1bb3","interactiveProgram":"#6e158c","interactiveBinding":"#a11fcc","procedure":"#935ba6","function":"#745380","primitiveProcedure":"#2e4fb3","primitiveFunction":"#2eb33e","procedure_call":"#355bcc","function_call":"#35cc47","variable":"#056610","parameter":"#056610","complete":"#ff0000","H":{"commands":225,"expressions":127,"definitions":285},"S":{"assignation":95,"variable":95,"parameter":95,"primitiveCommand":81,"literalExpression":81,"primitiveExpression":81,"controlStructure":88,"operator":88,"procedure_call":74,"function_call":74,"primitiveProcedure":74,"primitiveFunction":74,"program":85,"interactiveProgram":85,"interactiveBinding":85,"procedure":45,"function":35,"complete":99},"V":{"assignation":40,"variable":40,"parameter":40,"primitiveCommand":60,"literalExpression":60,"primitiveExpression":60,"controlStructure":50,"operator":50,"procedure_call":80,"function_call":80,"primitiveProcedure":70,"primitiveFunction":70,"program":70,"interactiveProgram":55,"interactiveBinding":80,"procedure":65,"function":50,"complete":99}};

/**
 * Create the svg representation of a block and render
 * @name {!string} name of the parameter.
 * @this Blockly.Block
 */
Blockly.createBlockSvg = function(workspace, name, f) {
	var newBlock = workspace.newBlock(name);
	//newBlock.setEditable(false);
	f(newBlock);
	newBlock.initSvg();
	newBlock.render();
};

Blockly.Blocks.Program = {
	init: function () {
		this.jsonInit({
			"type": "Program",
			"message0": "%1 %2 %3",
			"args0": [
				{
					"type": "field_label",
					"text": "programa"
				},
				{
					"type": "input_dummy"
				},
				{
					"type": "input_statement",
					"name": "program",
					"check": ["Statement"]
				}
			]
		})
		this.setColour(Blockly.CUSTOM_COLORS.Program || Blockly.CUSTOM_COLORS.program);
		this.setDeletable(true);
		this.setEditable(true);
		this.setMovable(true);
	},

	setDisabledAndUpdateTimestamp: function(disabled) {
		this.setDisabled(disabled);
		if (!disabled) this.$timestamp = Date.now();
	},

	mutationToDom: function() {
		var container = document.createElement("mutation");
		container.setAttribute("timestamp", this.$timestamp || Date.now());
		return container;
	},

	domToMutation: function(xmlElement) {
		const timestamp = xmlElement.getAttribute("timestamp");
		this.$timestamp = timestamp || Date.now();
	},

};

Blockly.Blocks.InteractiveProgram = {
	init: function () {
		this.jsonInit({
			"type": "InteractiveProgram",
			"message0": "%1 %2 %3",
			"args0": [
				{
					"type": "field_label",
					"text": "programa interactivo"
				},
				{
					"type": "input_dummy"
				},
				{
					"type": "input_statement",
					"name": "interactiveprogram",
					"check": ["InteractiveBinding"]
				}
			]
		});
		this.setColour(Blockly.CUSTOM_COLORS.InteractiveProgram || Blockly.CUSTOM_COLORS.interactiveProgram);
		this.setDeletable(true);
		this.setEditable(true);
		this.setMovable(true);
	},

	customContextMenu: function(options) {
		options.unshift({ text: `Agregar timeout`, enabled: !this.$timeout, callback: () => {
			let x = '';
			while (isNaN(parseInt(x)) || parseInt(x) <= 0)
				x = prompt("Ingrese un número en milisegundos");
			x = parseInt(x);

			this._addTimeout(x);
		}});

		options.unshift({ text: `Agregar inicialización`, enabled: !this.$init, callback: () => {
			this._addInit();
		}});
	},

	setDisabledAndUpdateTimestamp: function(disabled) {
		this.setDisabled(disabled);
		if (!disabled) this.$timestamp = Date.now();
	},

	mutationToDom: function() {
		var container = document.createElement("mutation");
		if (this.$init) container.setAttribute("init", this.$init);
		if (this.$timeout) container.setAttribute("timeout", this.$timeout);

		container.setAttribute("timestamp", this.$timestamp || Date.now());
		return container;
	},

	domToMutation: function(xmlElement) {
		const init = xmlElement.getAttribute("init");
		const timeout = xmlElement.getAttribute("timeout");
		const timestamp = xmlElement.getAttribute("timestamp");

		if (init) this._addInit()
		if (timeout) this._addTimeout(parseInt(timeout));
		this.$timestamp = timestamp || Date.now();
	},

	_addInit() {
		this.$init = true;

		var removeButton = new Blockly.FieldImage(
			MINUS,
			16,
			16,
			"Eliminar",
			function() {
				this.$init = false;
				this.removeInput("initlabel");
				this.removeInput("init");
				this.removeInput("statementsLabel");
			}.bind(this)
		);

		this.appendDummyInput("initlabel").appendField('Al inicializar:').appendField(removeButton);
		this.appendStatementInput('init').setCheck(["Statement"]);
		this.appendDummyInput("statementsLabel").appendField('Al apretar...');
		this.moveInputBefore("init", "interactiveprogram");
		this.moveInputBefore("initlabel", "init");
		this.moveInputBefore("statementsLabel", "interactiveprogram");
	},

	_addTimeout(timeout) {
		this.$timeout = timeout;

		var removeButton = new Blockly.FieldImage(
			MINUS,
			16,
			16,
			"Eliminar",
			function() {
				this.$timeout = undefined;
				this.removeInput("timeoutlabel");
				this.removeInput("timeout");
			}.bind(this)
		);

		this.appendDummyInput("timeoutlabel").appendField(`Al estar inactivo ${timeout} milisegundos:`).appendField(removeButton);
		this.appendStatementInput('timeout').setCheck(["Statement"]);
	}
};

// -------------------------------------
// Programa interactivo
// -------------------------------------

const modifiers = [
	[ 'SHIFT', 'SHIFT' ],
	[ 'CTRL', 'CTRL' ],
	[ 'ALT', 'ALT' ]
];

const getModifiersInput = (block) => block.inputList[1];
const getModifierFields = (block) => getModifiersInput(block).fieldRow.slice(2);
const getModifierDropdownFields = (block) => getModifierFields(block).filter(it => it.constructor === Blockly.FieldDropdown);
const getModifierValues = (block) => getModifierDropdownFields(block).map(it => it.getValue());
const getAvailableModifiers = (block) => {
	const currentModifiers = getModifierValues(block);

	return modifiers.filter(it =>
		currentModifiers.indexOf(it[1]) === -1
	);
};
const updateModifierMenuGenerators = (block, nameToIgnore) => {
	const availableModifiers = getAvailableModifiers(block);
	const dropdowns = getModifierDropdownFields(block);

	for (var dropdown of dropdowns) {
		if (dropdown.name !== nameToIgnore)
			dropdown.menuGenerator_ = modifiers.filter(it => {
				return it[1] === dropdown.getValue() || availableModifiers.some(availableModifier => availableModifier[1] === it[1])
			});

	}
}

createInteractiveBinding = (name, keys) => {
	return {
		init: function () {
			this.jsonInit({
				message0: "%1 %2 %3 %4",
				type: "InteractiveBinding",
				previousStatement: "InteractiveBinding",
				nextStatement: "InteractiveBinding",
				args0: [
					{
						"type": "field_label",
						"text": "Al apretar " + name
					},
          { "type": "input_dummy" },
          {
            "type": "field_label",
            "text": "➣"
          },
					{
						type: "field_dropdown",
						name: "InteractiveBindingDropdownKey",
						options: keys.map(it => [it.name, it.code]),
					}
				],
				colour: Blockly.CUSTOM_COLORS.InteractiveBinding || Blockly.CUSTOM_COLORS.interactiveBinding,
				tooltip: "Escoger una entrada",
			});

      this.appendStatementInput('block').setCheck(["Statement"]);

      const self = this;
      const input = this.inputList[0];
      input.appendField(new Blockly.FieldImage(
        PLUS,
        16,
        16,
        "Agregar modificador",
        function() {
          const modifiersCount = getModifierFields(self).length / 2;
          if (modifiersCount >= modifiers.length) return;

          self._addModifier();
        }
      ));
      input.appendField(new Blockly.FieldImage(
        CLEAN,
        16,
        16,
        "Limpiar modificadores",
        function() {
          self._cleanModifiers();
        }
      ));
		},

		customContextMenu: function(options) {
			const modifiersCount = getModifierFields(this).length / 2;

			options.unshift({ text: `Limpiar modificadores`, enabled: modifiersCount > 0, callback: () => {
				this._cleanModifiers();
			}});
			options.unshift({ text: `Agregar modificador`, enabled: modifiersCount < modifiers.length, callback: () => {
				this._addModifier();
			}});
		},

		mutationToDom: function() {
			var container = document.createElement("mutation");
			container.setAttribute("modifierscount", getModifierValues(this).length.toString());
			return container;
		},

		domToMutation: function(xmlElement) {
			const $modifiersCount = xmlElement.getAttribute("modifierscount");
			if ($modifiersCount) {
				const count = parseInt($modifiersCount);
				for (var i = 0; i < count; i++)
					this._addModifier();
			}

			setTimeout(() => {
				updateModifierMenuGenerators(this);
			}, 0);
		},

		_addModifier() {
			const availableModifiers = getAvailableModifiers(this);

			const self = this;
			const id = getModifierValues(this).length + 1;
			const labelName = "l" + id;
			const dropdownName = "d" + id;

			getModifiersInput(this).appendField("+").appendField(new Blockly.FieldDropdown(availableModifiers, (newValue) => {
				setTimeout(() => {
					updateModifierMenuGenerators(self, dropdownName)
				}, 0);
			}));

			const addedFields = getModifierFields(this).slice(-2);
			addedFields[0].name = labelName;
			addedFields[1].name = dropdownName;

			updateModifierMenuGenerators(this, dropdownName);
		},

		_cleanModifiers() {
			const fieldsToRemove = getModifierFields(this);

			for (var field of fieldsToRemove)
				getModifiersInput(this).removeField(field.name);
		}
	}
};

Blockly.Blocks.InteractiveLetterBinding = createInteractiveBinding("letra", [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
].map(it => ({ code: it, name: it })));

Blockly.Blocks.InteractiveNumberBinding = createInteractiveBinding("número", [
	'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
].map(it => ({ code: it, name: it })));

Blockly.Blocks.InteractiveKeyBinding = createInteractiveBinding("tecla", [
	{ code: 'ARROW_LEFT', name: '←' },
	{ code: 'ARROW_RIGHT', name: '→' },
	{ code: 'ARROW_UP', name: '↑' },
	{ code: 'ARROW_DOWN', name: '↓' },
	{ code: 'MINUS', name: '-' },
	{ code: 'SPACE', name: 'Espacio' },
	{ code: 'ENTER', name: 'Enter' },
	{ code: 'TAB', name: 'Tab' },
	{ code: 'BACKSPACE', name: 'Borrar' },
	{ code: 'DELETE', name: 'Suprimir' },
	{ code: 'ESCAPE', name: 'Escape' }
]);

// ------------------------------------------------------
// Control de flujo de ejecucion:
// ------------------------------------------------------

Blockly.Blocks.RepeticionSimple = {
	init: function () {
		this.jsonInit({
			type: "Statement",
			previousStatement: "Statement",
			nextStatement: "Statement",
		});

		this.setColour(Blockly.CUSTOM_COLORS.RepeticionSimple || Blockly.CUSTOM_COLORS.controlStructure);
		this.appendValueInput('count')
			.appendField('repetir');
		this.appendDummyInput()
			.appendField('veces');
		this.appendStatementInput('block').setCheck(["Statement"]);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.RepeticionCondicional = {
	init: function () {
		this.jsonInit({
			type: "Statement",
			previousStatement: "Statement",
			nextStatement: "Statement",
		});

		this.setColour(Blockly.CUSTOM_COLORS.RepeticionCondicional || Blockly.CUSTOM_COLORS.controlStructure);
		this.appendValueInput('condicion')
			.setCheck('Bool')
			.appendField('repetir hasta que');
		this.appendStatementInput('block').setCheck(["Statement"]);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.AlternativaSimple = {
	init: function () {
		this.jsonInit({
			type: "Statement",
			previousStatement: "Statement",
			nextStatement: "Statement",
		});

		this.setColour(Blockly.CUSTOM_COLORS.AlternativaSimple || Blockly.CUSTOM_COLORS.controlStructure);
		this.appendValueInput('condicion')
			.appendField(Blockly.Msg["CONTROLS_IF_MSG_IF"]);
		this.appendStatementInput('block').setCheck(["Statement"]);
		this.setInputsInline(true);
	}
};

Blockly.Msg["CONTROLS_IF_MSG_ELSE"] = "si no";
Blockly.Msg["CONTROLS_IF_MSG_ELSEIF"] = "si no, si";
Blockly.Msg["CONTROLS_IF_MSG_IF"] = "si";
Blockly.Msg["CONTROLS_IF_MSG_THEN"] = "";
delete Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN.compose;
delete Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN.decompose;
Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN.updateShape_ = function() {
	// Delete everything.
	if (this.getInput('block2')) {
		this.removeInput('block2');
	}
	var i = 1;
	while (this.getInput('IF' + i)) {
		this.removeInput('IF' + i);
		this.removeInput('DO' + i);
		i++;
	}
	// Rebuild block.
	for (var i = 1; i <= this.elseifCount_; i++) {
		this.appendValueInput('IF' + i)
				.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
		this.appendStatementInput('DO' + i)
				.setCheck(["Statement"])
	}
	if (this.elseCount_) {
		this.appendStatementInput('block2')
			.setCheck(["Statement"])
			.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
	}
};
Blockly.Extensions.registerMutator(
	"controls_if_mutator_without_ui",
	Blockly.Constants.Logic.CONTROLS_IF_MUTATOR_MIXIN,
	null,
	[]
);

Blockly.Blocks.AlternativaCompleta = {
	init: function () {
		this.jsonInit({
			"type": "Statement",
			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"message0": "%{BKY_CONTROLS_IF_MSG_IF} %1",
			"args0": [
				{
					"type": "input_value",
					"name": "condicion"
				}
			],
			"message1": "%{BKY_CONTROLS_IF_MSG_THEN} %1",
			"args1": [
				{
					"type": "input_statement",
					"name": "block1",
					"check": ["Statement"]
				}
			],
			"colour": "%{BKY_LOGIC_HUE}",
			"helpUrl": "%{BKY_CONTROLS_IF_HELPURL}",
			"mutator": "controls_if_mutator_without_ui",
			"extensions": ["controls_if_tooltip"]
		});

		this.setColour(Blockly.CUSTOM_COLORS.AlternativaCompleta || Blockly.CUSTOM_COLORS.controlStructure);
		this.setInputsInline(true);

		this.elseCount_++;
		this.updateShape_();
	},
	customContextMenu: function(options) {
		options.unshift({ text: `Limpiar ramas 'si no, si'`, enabled: true, callback: () => {
			this.elseifCount_ = 0;

			this.updateShape_();
		}});

		options.unshift({ text: `Agregar 'si no, si'`, enabled: true, callback: () => {
			this.elseifCount_++;

			const valueConnections = [null];
			const statementConnections = [null];
			const elseStatementConnection = this.getInput("block2").connection.targetConnection;
			let k;
			let input;

			k = 1;
			while (input = this.getInput("IF" + k)) {
				valueConnections.push(input.connection.targetConnection);
				k++;
			}

			k = 1;
			while (input = this.getInput("DO" + k)) {
				statementConnections.push(input.connection.targetConnection);
				k++;
			}

			this.updateShape_();

			// Reconnect any child blocks.
			for (var i = 1; i <= this.elseifCount_; i++) {
				Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
				Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
			}
			Blockly.Mutator.reconnect(elseStatementConnection, this, 'block2');
		}});
	}
};

// ------------------------------------------------------
// Comandos:
// ------------------------------------------------------

Blockly.Blocks.Poner = {
	init: function () {
		this.jsonInit({
			message0: 'Poner %1',
			type: "Statement",
			previousStatement: "Statement",
			nextStatement: "Statement",
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			colour: Blockly.CUSTOM_COLORS.Poner || Blockly.CUSTOM_COLORS.primitiveCommand,
			tooltip: 'Poner color en casillero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.Sacar = {
	init: function () {
		this.jsonInit({
			type: "Statement",
			previousStatement: "Statement",
			nextStatement: "Statement",
			message0: 'Sacar %1',
			args0: [
				{
					type: 'input_value',
					name: 'COLOR'
				}
			],
			colour: Blockly.CUSTOM_COLORS.Sacar || Blockly.CUSTOM_COLORS.primitiveCommand,
			tooltip: 'Sacar color de casillero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.Mover = {
	init: function () {
		this.jsonInit({
			type: "Statement",
			previousStatement: "Statement",
			nextStatement: "Statement",
			message0: 'Mover %1',
			args0: [
				{
					type: 'input_value',
					name: 'DIRECCION'
				}
			],
			colour: Blockly.CUSTOM_COLORS.Mover || Blockly.CUSTOM_COLORS.primitiveCommand,
			tooltip: 'Mover en una dirección.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.IrAlBorde = {
	init: function () {
		this.jsonInit({
			type: "Statement",
			previousStatement: "Statement",
			nextStatement: "Statement",
			message0: 'Ir al borde %1',
			args0: [
				{
					type: 'input_value',
					name: 'DIRECCION'
				}
			],
			colour: Blockly.CUSTOM_COLORS.IrAlBorde || Blockly.CUSTOM_COLORS.primitiveCommand,
			tooltip: 'Ir al borde del tablero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.VaciarTablero = {
	init: function () {
		this.jsonInit({
			type: "Statement",
			previousStatement: "Statement",
			nextStatement: "Statement",
			message0: 'Vaciar tablero',
			colour: Blockly.CUSTOM_COLORS.VaciarTablero || Blockly.CUSTOM_COLORS.primitiveCommand,
			tooltip: 'Vaciar el tablero.',
			inputsInline: true
		});
	}
};

Blockly.Blocks.BOOM = {
	init: function () {
		this.jsonInit({
			"type": "Statement",
			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"lastDummyAlign0": "RIGHT",
			"message0": "Hacer ¡BOOM! porque:  %1 %2",
			"args0": [
				{
					"type": "input_dummy"
				},
				{
					"type": "field_input",
					"name": "boomDescription",
					"text": "Ingresar motivo..."
				}
			],
			"inputsInline": false,
			"colour": Blockly.CUSTOM_COLORS.BOOM || Blockly.CUSTOM_COLORS.primitiveCommand,
			"tooltip": "Este comando hace que estalle todo."
		});
	}
};

Blockly.Blocks.makeShadowEventListener = function(event){
	if(event.blockId == this.id && event.newParentId){
			this.setShadow(true);
	}
};

Blockly.Blocks.ComandoCompletar = {
	init: function () {
		this.jsonInit({
			"type": "Statement",
			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"lastDummyAlign0": "RIGHT",
			"message0": "COMPLETAR",
			"colour": Blockly.CUSTOM_COLORS.ComandoCompletar || Blockly.CUSTOM_COLORS.complete,
			"tooltip": "Tenés que reemplazar este bloque por tu solución"
		});
	},

	onchange: Blockly.Blocks.makeShadowEventListener
};

Blockly.Blocks.AsociacionDeTeclaCompletar = {
	init: function () {
		this.jsonInit({
			"type": "InteractiveBinding",
			"previousStatement": "InteractiveBinding",
			"nextStatement": "InteractiveBinding",
			"lastDummyAlign0": "RIGHT",
			"message0": "COMPLETAR",
			"colour": Blockly.CUSTOM_COLORS.AsociacionDeTeclaCompletar || Blockly.CUSTOM_COLORS.complete,
			"tooltip": "Tenés que reemplazar este bloque por tu solución"
		});
	},

	onchange: Blockly.Blocks.makeShadowEventListener
};

// ------------------------------------------------------
// Expresiones:
// ------------------------------------------------------

function deepCopyObj(aObject) {
  var bObject, v, k;
  bObject = Array.isArray(aObject) ? [] : {};
  for (k in aObject) {
    v = aObject[k];
    bObject[k] = (typeof v === "object") ? deepCopyObj(v) : v;
  }
  return bObject;
}

const oldMathNumber = Blockly.Blocks.math_number;
Blockly.Blocks.math_number = deepCopyObj(Blockly.Blocks.math_number);
Blockly.Blocks.math_number.init = function() {
	oldMathNumber.init.call(this);
	this.setColour(Blockly.CUSTOM_COLORS.math_number || Blockly.CUSTOM_COLORS.literalExpression);
}

Blockly.Blocks.ExpresionCompletar = {
	init: function () {
		this.jsonInit({
			"type": "completar_expression",
			"message0": "COMPLETAR",
			"output": "any",
			"colour": Blockly.CUSTOM_COLORS.ExpresionCompletar || Blockly.CUSTOM_COLORS.complete,
			"tooltip": "Tenés que reemplazar este bloque por tu solución"
		});
	},

	onchange: Blockly.Blocks.makeShadowEventListener
};

function createLiteralSelectorBlock(type,values){
	return {
		init: function () {
			this.jsonInit({
				type: type,
				message0: "%1",
				args0: [{
					type: "field_dropdown",
					name: type + "Dropdown",
					options: values.map(value => [value,value]),
				}],
				output: type,
				colour: Blockly.CUSTOM_COLORS[`${type}Selector`] || Blockly.CUSTOM_COLORS.literalExpression,
				tooltip: "Escoger " + type,
			});
		}
	};
}

Blockly.Blocks.ColorSelector = createLiteralSelectorBlock('Color',['Rojo','Verde','Negro','Azul']);
Blockly.Blocks.DireccionSelector = createLiteralSelectorBlock('Direccion',['Este','Oeste','Norte','Sur']);
Blockly.Blocks.BoolSelector = createLiteralSelectorBlock('Bool',['True','False']);

function createSingleParameterExpressionBlock(blockText,returnType, colorType = "operator"){
	return {
		init: function () {
			this.jsonInit({
				message0: blockText + ' %1',
				args0: [
					{
						type: 'input_value',
						name: 'VALUE'
					}
				],
				colour: Blockly.CUSTOM_COLORS[this.type] || Blockly.CUSTOM_COLORS[colorType],
				inputsInline: true,
				output: returnType
			})
		}
	};
}

Blockly.Blocks.hayBolitas = createSingleParameterExpressionBlock('hay bolitas','Bool', "primitiveExpression");
Blockly.Blocks.puedeMover = createSingleParameterExpressionBlock('puede mover','Bool', "primitiveExpression");
Blockly.Blocks.nroBolitas = createSingleParameterExpressionBlock('numero de bolitas','Number', "primitiveExpression");

// ------------------------------------------------------
// Operaciones:
// ------------------------------------------------------

Blockly.Blocks.OperadorDeComparacion = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'RELATION',
					options: [['==', '=='], ['/=', '/='], ['<=', '<='], ['<', '<'], ['>=', '>='], ['>', '>']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: Blockly.CUSTOM_COLORS.OperadorDeComparacion || Blockly.CUSTOM_COLORS.operator,
			inputsInline: false,
			output: 'Bool'
		});
	}
};

Blockly.Blocks.OperadorNumerico = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'OPERATOR',
					options: [['+', '+'], ['-', '-'], ['*', '*'], ['div', 'div'], ['mod', 'mod'], ['^', '^']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: Blockly.CUSTOM_COLORS.OperadorNumerico || Blockly.CUSTOM_COLORS.operator,
			inputsInline: false,
			output: 'Number'
		});
	}
};

Blockly.Blocks.OperadorLogico = {
	init: function () {
		this.jsonInit({
			message0: '%1 %2 %3 %4',
			args0: [
				{
					type: 'input_value',
					name: 'arg1'
				},
				{
					type: 'field_dropdown',
					name: 'OPERATOR',
					options: [['y también', 'AND'], ['o bien', '||']]
				},
				{
					type: 'input_dummy'
				},
				{
					type: 'input_value',
					name: 'arg2'
				}
			],
			colour: Blockly.CUSTOM_COLORS.OperadorLogico || Blockly.CUSTOM_COLORS.operator,
			inputsInline: false,
			output: 'Bool'
		});
	}
};

Blockly.Blocks.Asignacion = {
	init: function () {
		this.jsonInit({
			"type": "asignacion",
			"message0": "Recordar que %1 %2 vale %3 %4",
			"args0": [
				{
				"type": "field_input",
				"name": "varName",
				"text": "una variable",
				"class": Blockly.Procedures.rename
				},
				{
				"type": "input_dummy"
				},
				{
				"type": "input_dummy"
				},
				{
				"type": "input_value",
				"name": "varValue"
				}
			],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": Blockly.CUSTOM_COLORS.Asignacion || Blockly.CUSTOM_COLORS.assignation,
			"tooltip": "",
			"helpUrl": ""
		});

		var self = this;
    var createGetterButton = new Blockly.FieldImage(
      HAND,
      16,
      16,
      "Obtener variable",
      function() {
      	var name = self.getFieldValue('varName');
      	self.createVariableBlock(name);
      }
    );

    this.appendDummyInput().appendField(createGetterButton);
	},

	customContextMenu: function(options) {
		var name = this.getFieldValue('varName');

		options.unshift({ text: `Crear ${name}`, enabled: true, callback: () => {
			this.createVariableBlock(name);
		}});
	},

	createVariableBlock: function(name) {
		return Blockly.createBlockSvg(this.workspace, 'variables_get', b => {
			b.setFieldValue(name, 'VAR');
			b.moveBy(10,5);
		});
	}
};


Blockly.Blocks.variables_get = {
	init: function () {
		this.jsonInit({
			"type": "variables_get",
			"message0": "%1",
			"args0": [
				{
				"type": "field_input",
				"name": "VAR",
				"text": "nombre de variable"
				}
			],
			"output": null,
			"colour": Blockly.CUSTOM_COLORS.variable,
			"tooltip": "",
			"helpUrl": "",
		});
	},
	mutationToDom: function() {
		var container = document.createElement('mutation');
		container.setAttribute('var', this.getFieldValue('VAR'));
		if (this.$parent) container.setAttribute("parent", this.$parent);
		return container;
	},
	domToMutation: function(xmlElement) {
		var var_name = xmlElement.getAttribute('var');
		this.setFieldValue(var_name, 'VAR');
		this.$parent = xmlElement.getAttribute("parent") || null;
	},

	onchange: function(event){
		if (this.$parent) {
			this.getField("VAR").EDITABLE = false;
			this.setColour(Blockly.CUSTOM_COLORS.parameter);
		} else {
			this.setColour(Blockly.CUSTOM_COLORS.variable);
		}

		if (event.blockId == this.id && event.type == Blockly.Events.BLOCK_DELETE) {
			// do something with parent
		}
	}
};

Blockly.Blocks.not = createSingleParameterExpressionBlock('no','Bool');
Blockly.Blocks.siguiente = createSingleParameterExpressionBlock('siguiente','*');
Blockly.Blocks.previo = createSingleParameterExpressionBlock('previo','*');
Blockly.Blocks.opuesto = createSingleParameterExpressionBlock('opuesto','*');


// Necesario para sanitizar nombres de procedimientos.
// En la interfaz de bloques de gobstones por ahora vamos a dejar pasar sólo espacios y letras con tilde
Blockly.Blocks.GobstonesSanitizer = function(name){
	return name.replace(/[^A-Za-z0-9ÁÉÍÓÚÑáéíóúñ_ ]/g,'');
};


Blockly.Procedures.OldRename = Blockly.Procedures.rename;
Blockly.Procedures.rename = function(name){
	return Blockly.Procedures.OldRename.call(this,
		Blockly.Blocks.GobstonesSanitizer(name));
};

// Necesario para sanitizar nombres de parámetros.
// En la interfaz de bloques de gobstones por ahora vamos a dejar pasar sólo espacios y letras con tilde
// Mirá, mirá cómo rompo el encapsulamiento y repito código, mirá.
Blockly.Blocks.procedures_mutatorarg.validator_old = Blockly.Blocks.procedures_mutatorarg.validator_;
Blockly.Blocks.procedures_mutatorarg.validator_ = function(name){
	return Blockly.Blocks.procedures_mutatorarg.validator_old.call(this,
		Blockly.Blocks.GobstonesSanitizer(name));
};
