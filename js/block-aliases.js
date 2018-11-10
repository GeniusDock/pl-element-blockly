Blockly.PrologLanguage.blockIDAliases = {
  "CategoriaAsignacion":"Asignación",
  "Color":"ColorSelector",
  "Individuo":"IndividuoSelector",
  "Variable":"VariableSelector",
  "OperadorDeNegacion": "not",
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
