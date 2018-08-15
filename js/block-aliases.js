Blockly.PrologLanguage.blockIDAliases = {
  "ComandosPrimitivos": "Comandos primitivos",
  "ProcedimientosPrimitivos": "Procedimientos primitivos",
  "MisProcedimientos": "Mis procedimientos",
  "ExpresionesPrimitivas": "Expresiones primitivas",
  "FuncionesPrimitivas": "Funciones primitivas",
  "CategoriaAsignacion":"Asignación",
  "Color":"ColorSelector",
  "Individuo":"IndividuoSelector",
  "Variable":"VariableSelector",
  "Direccion":"DireccionSelector",
  "Numero":"math_number",
  "Booleano":"BoolSelector",
  "ExpresionesPrimitivas": "Expresiones primitivas",
  "FuncionesPrimitivas": "Funciones primitivas",
  "MisFunciones": "Mis funciones",
  "OperadorDeNegacion": "not",
  "OperadorSiguiente": "siguiente",
  "OperadorPrevio": "previo",
  "OperadorOpuesto": "opuesto",
  "DefinicionesDeProgramas": "Programas",
  "DefinicionDeProgramaComun": "Program",
  "DefinicionDeProgramaInteractivo": "InteractiveProgram",
  "DefinicionDeAsociacionDeTeclaLetra": "InteractiveLetterBinding",
  "DefinicionDeAsociacionDeTeclaNumero": "InteractiveNumberBinding",
  "DefinicionDeAsociacionDeTeclaEspecial": "InteractiveKeyBinding",
  "DefinicionesDeProcedimientos": "Procedimientos",
  "DefinicionDeProcedimientoSimple": "procedures_defnoreturnnoparams",
  "DefinicionDeProcedimientoParametrizado": "procedures_defnoreturn",
  "DefinicionesDeFunciones": "Funciones",
  "DefinicionDeFuncionSimple": "procedures_defreturnsimple",
  "DefinicionDeFuncionSimpleParametrizada": "procedures_defreturnsimplewithparams",
  "DefinicionDeFuncionParametrizada": "procedures_defreturn"
};

Blockly.PrologLanguage.aliasForBlockID = function(id){
  return  this.blockIDAliases[id] || id;
};

Blockly.PrologLanguage.aliasesFor = function (blockOrCategoryID){
  var aliases = [blockOrCategoryID];
  for (alias in this.blockIDAliases) {
    if(this.blockIDAliases[alias] === blockOrCategoryID){
      aliases.push(alias);
    }
  }
  return aliases;
};
