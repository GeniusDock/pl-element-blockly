gsSuite('Genera usando pragma REGION', function() {

  // --------------------------------------------------
  // ------- EXPRESIONES ------------------------------
  // --------------------------------------------------

	gsTestCode('&& se genera bien',
  '<xml><block type="OperadorLogico" id="and"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector" id="true"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector" id="false"><field name="BoolDropdown">False</field></block></value></block></xml>',
  '/*@BEGIN_REGION@and@*//*@BEGIN_REGION@true@*/True/*@END_REGION@*/ && /*@BEGIN_REGION@false@*/False/*@END_REGION@*//*@END_REGION@*/',
  {withRegions: true}
);
gsTestCode('|| se genera bien',
  '<xml><block type="OperadorLogico" id="or"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector" id="false"><field name="BoolDropdown">False</field></block></value><value name="arg2"><block type="BoolSelector" id="true"><field name="BoolDropdown">True</field></block></value></block></xml>',
  '/*@BEGIN_REGION@or@*//*@BEGIN_REGION@false@*/False/*@END_REGION@*/ || /*@BEGIN_REGION@true@*/True/*@END_REGION@*//*@END_REGION@*/',
  {withRegions: true}
);
gsTestCode('|| se genera  con paréntesis',
  '<xml><block type="OperadorLogico" id="and"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector" id="true1"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OperadorLogico" id="or"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector" id="true2"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector" id="true3"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
  '/*@BEGIN_REGION@and@*//*@BEGIN_REGION@true1@*/True/*@END_REGION@*/ && (/*@BEGIN_REGION@or@*//*@BEGIN_REGION@true2@*/True/*@END_REGION@*/ || /*@BEGIN_REGION@true3@*/True/*@END_REGION@*//*@END_REGION@*/)/*@END_REGION@*/',
  {withRegions: true}
);
gsTestCode('Anidación de || dentro de && provoca paréntesis',
  '<xml><block type="OperadorLogico" id="and"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector" id="true1"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OperadorLogico" id="or"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector" id="true2"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector" id="true3"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
  '/*@BEGIN_REGION@and@*//*@BEGIN_REGION@true1@*/True/*@END_REGION@*/ && (/*@BEGIN_REGION@or@*//*@BEGIN_REGION@true2@*/True/*@END_REGION@*/ || /*@BEGIN_REGION@true3@*/True/*@END_REGION@*//*@END_REGION@*/)/*@END_REGION@*/',
  {withRegions: true}
);
gsTestCode('Anidación de && dentro de || no provoca paréntesis',
  '<xml><block type="OperadorLogico" id="or"><field name="OPERATOR">||</field><value name="arg1"><block type="OperadorLogico" id="and"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector" id="true1"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector" id="true2"><field name="BoolDropdown">True</field></block></value></block></value><value name="arg2"><block type="BoolSelector" id="true3"><field name="BoolDropdown">True</field></block></value></block></xml>',
  '/*@BEGIN_REGION@or@*//*@BEGIN_REGION@and@*//*@BEGIN_REGION@true1@*/True/*@END_REGION@*/ && /*@BEGIN_REGION@true2@*/True/*@END_REGION@*//*@END_REGION@*/ || /*@BEGIN_REGION@true3@*/True/*@END_REGION@*//*@END_REGION@*/',
  {withRegions: true}
);

gsTestCode('hayBolitas',
  '<xml><block type="hayBolitas" id="hb"><value name="VALUE"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
  '/*@BEGIN_REGION@hb@*/hayBolitas(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)/*@END_REGION@*/',
  {withRegions: true}
);

gsTestCode('nroBolitas',
  '<xml><block type="nroBolitas" id="nb"><value name="VALUE"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
  '/*@BEGIN_REGION@nb@*/nroBolitas(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)/*@END_REGION@*/',
  {withRegions: true}
);

gsTestCode('puedeMover',
  '<xml><block type="puedeMover" id="pm"><value name="VALUE"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
  '/*@BEGIN_REGION@pm@*/puedeMover(/*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)/*@END_REGION@*/',
  {withRegions: true}
);

gsTestCode('siguiente',
  '<xml><block type="siguiente" id="sg"><value name="VALUE"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
  '/*@BEGIN_REGION@sg@*/siguiente(/*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)/*@END_REGION@*/',
  {withRegions: true}
);

gsTestCode('previo',
  '<xml><block type="previo" id="pr"><value name="VALUE"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
  '/*@BEGIN_REGION@pr@*/previo(/*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)/*@END_REGION@*/',
  {withRegions: true}
);

gsTestCode('opuesto',
  '<xml><block type="opuesto" id="op"><value name="VALUE"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
  '/*@BEGIN_REGION@op@*/opuesto(/*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)/*@END_REGION@*/',
  {withRegions: true}
);

gsTestCode('Funciones',
'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defreturn" id="f1" x="18" y="-49"><field name="NAME">devolver algun valor</field><comment pinned="false" h="80" w="160">Comentario de lo que devuelve</comment><statement name="STACK"><block type="Mover" id="mover"><value name="DIRECCION"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></statement><value name="RETURN"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block><block type="Program" id="program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Poner" id="poner"><value name="COLOR"><block type="procedures_callreturn" id="cf1"><mutation name="devolver algun valor"></mutation></block></value></block></statement></block></xml>',
  `/*@BEGIN_REGION@f1@*/
//
// Comentario de lo que devuelve
//
function devolverAlgunValor() {
  /*@BEGIN_REGION@mover@*/
  Mover(/*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)
  /*@END_REGION@*/
  return (/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)
}
/*@END_REGION@*/


/*@BEGIN_REGION@program@*/\nprogram {
  /*@BEGIN_REGION@poner@*/
  Poner(/*@BEGIN_REGION@cf1@*/devolverAlgunValor()/*@END_REGION@*/)
  /*@END_REGION@*/
}\n/*@END_REGION@*/\n`,
{withRegions: true});

test('Funciones primitivas', function() {
  this.element.primitiveFunctions = ['hayFlores_en_'];
  this.element.workspaceXml = `<xml><block type="hayFlores_en_" id="hayF"><value name="arg1"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value><value name="arg2"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></xml>`;
  printPragmaRow(this.element,{withRegions: true});
  assert.equal(this.element.generateCode({withRegions: true}), `/*@BEGIN_REGION@hayF@*/hayFlores_en_(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/, /*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)/*@END_REGION@*/`);
});


test('Genera correctamente usando funciones primitivas', function() {
  this.element.primitiveFunctions = ['hayFlores_en_', 'dondeEsta_'];
  this.element.workspaceXml = `<xml>
  <block type="Program" id="program"><statement name="program">
    <block type="AlternativaSimple" id="if">
      <value name="condicion">
        <block type="hayFlores_en_" id="hayF">
          <value name="arg1"><block type="ColorSelector" id="rojo1"><field name="ColorDropdown">Rojo</field></block></value>
          <value name="arg2"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value>
        </block>
      </value>
      <statement name="block">
        <block type="Mover" id="mover">
          <value name="DIRECCION">
            <block type="dondeEsta_" id="dndE">
              <value name="arg1"><block type="ColorSelector" id="rojo2"><field name="ColorDropdown">Rojo</field></block></value>
            </block>
          </value>
        </block>
      </statement>
    </block>
  </statement>
</block>
</xml>`;
  printPragmaRow(this.element,{withRegions: true});
  assert.equal(this.element.generateCode({withRegions: true}), `/*@BEGIN_REGION@program@*/
program {
  /*@BEGIN_REGION@if@*/
  if (/*@BEGIN_REGION@hayF@*/hayFlores_en_(/*@BEGIN_REGION@rojo1@*/Rojo/*@END_REGION@*/, /*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)/*@END_REGION@*/) {
    /*@BEGIN_REGION@mover@*/
    Mover(/*@BEGIN_REGION@dndE@*/dondeEsta_(/*@BEGIN_REGION@rojo2@*/Rojo/*@END_REGION@*/)/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
}
/*@END_REGION@*/
`);
});

gsTestCode('Expresión Completar',
  '<xml><block type="ExpresionCompletar" id="completar"></block></xml>',
  '/*@BEGIN_REGION@completar@*/boom("El programa todavía no está completo")/*@END_REGION@*/',
  {withRegions: true}
);

// --------------------------------------------------
// ------- COMANDOS ---------------------------------
// --------------------------------------------------

  gsTestCode('Programa vacío',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" id="1" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"></statement></block></xml>',
    '/*@BEGIN_REGION@1@*/\nprogram {\n}\n/*@END_REGION@*/\n',
    {withRegions: true});

  gsTestCode('Poner',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Poner" id="poner"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    `/*@BEGIN_REGION@poner@*/
Poner(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)
/*@END_REGION@*/\n`,
    {withRegions: true});

  gsTestCode('Sacar',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Sacar" id="sacar"><value name="COLOR"><block type="ColorSelector" id="verde"><field name="ColorDropdown">Verde</field></block></value></block></xml>',
    `/*@BEGIN_REGION@sacar@*/
Sacar(/*@BEGIN_REGION@verde@*/Verde/*@END_REGION@*/)
/*@END_REGION@*/\n`,
    {withRegions: true});

  gsTestCode('Mover',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Mover" id="mover"><value name="DIRECCION"><block type="DireccionSelector" id="oeste"><field name="DireccionDropdown">Oeste</field></block></value></block></xml>',
    `/*@BEGIN_REGION@mover@*/
Mover(/*@BEGIN_REGION@oeste@*/Oeste/*@END_REGION@*/)
/*@END_REGION@*/\n`,
    {withRegions: true});

  gsTestCode('IrAlBorde',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="IrAlBorde" id="irBorde"><value name="DIRECCION"><block type="DireccionSelector" id="norte"><field name="DireccionDropdown">Norte</field></block></value></block></xml>',
    `/*@BEGIN_REGION@irBorde@*/
IrAlBorde(/*@BEGIN_REGION@norte@*/Norte/*@END_REGION@*/)
/*@END_REGION@*/\n`,
    {withRegions: true});

  gsTestCode('VaciarTablero',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="VaciarTablero" id="vaciar"></block></xml>',
    `/*@BEGIN_REGION@vaciar@*/
VaciarTablero()
/*@END_REGION@*/\n`,
    {withRegions: true});

  gsTestCode('BOOM',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="BOOM" id="boom"></block></xml>',
    `/*@BEGIN_REGION@boom@*/
BOOM("Ingresar motivo...")
/*@END_REGION@*/\n`,
    {withRegions: true});

  gsTestCode('Procedimiento',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturn" id="defP"><mutation><arg name="valor1"></arg><arg name="otroValor"></arg></mutation><field name="NAME">hacer algo con parametros</field><comment pinned="false" h="80" w="160">Un comentario para el procedimiento</comment></block></xml>',
  `/*@BEGIN_REGION@defP@*/
//
// Un comentario para el procedimiento
//
procedure HacerAlgoConParametros(valor1, otroValor) {
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('Procedimiento sin parámetros',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturnnoparams" id="p1" x="30" y="-53"><field name="NAME">Hacer algo</field><comment pinned="false" h="80" w="160">Desc del procedure</comment><statement name="STACK"><block type="Poner" id="poner"></block></statement></block><block type="Program" id="program" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="procedures_callnoreturnnoparams" id="cp1"><mutation name="Hacer algo"></mutation></block></statement></block></xml>',
    `/*@BEGIN_REGION@p1@*/
//
// Desc del procedure
//
procedure HacerAlgo() {
  /*@BEGIN_REGION@poner@*/
  Poner()
  /*@END_REGION@*/
}
/*@END_REGION@*/


/*@BEGIN_REGION@program@*/
program {
  /*@BEGIN_REGION@cp1@*/
  HacerAlgo()
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('Función pura',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id="program" x="30" y="30"><statement name="program"><block type="Poner" id="poner"><value name="COLOR"><block type="procedures_callreturnsimple" id="f1"><mutation name="devolver algo"></mutation></block></value></block></statement></block><block type="procedures_defreturnsimple" id="cf1" x="29" y="153"><mutation statements="false"></mutation><field name="NAME">devolver algo</field><value name="RETURN"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    `/*@BEGIN_REGION@cf1@*/
function devolverAlgo() {
  return (/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)
}
/*@END_REGION@*/


/*@BEGIN_REGION@program@*/
program {
  /*@BEGIN_REGION@poner@*/
  Poner(/*@BEGIN_REGION@f1@*/devolverAlgo()/*@END_REGION@*/)
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
  {withRegions: true});

  gsTestCode('Función pura parametrizada',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="procedures_defreturnsimplewithparams" id="f1" x="75" y="25"><mutation statements="false"><arg name="x"></arg></mutation><field name="NAME">doble</field><value name="RETURN"><block type="OperadorNumerico" id="plus"><field name="OPERATOR">+</field><value name="arg1"><block type="variables_get" id="x"><mutation var="x"></mutation></block></value><value name="arg2"><block type="variables_get" id="x2"><mutation var="x"></mutation></block></value></block></value></block><block type="Program" id="program" deletable="false" x="44" y="155"><mutation timestamp="1509516775623"></mutation><statement name="program"><block type="RepeticionSimple" id="repeat"><value name="count"><block type="procedures_callreturnsimplewithparams" id="cf1"><mutation name="doble"><arg name="x"></arg></mutation><value name="ARG0"><block type="math_number" id="2"><field name="NUM">2</field></block></value></block></value><statement name="block"><block type="Poner" id="poner"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></statement></block></statement></block></xml>',
    `/*@BEGIN_REGION@f1@*/
function doble(x) {
  return (/*@BEGIN_REGION@plus@*//*@BEGIN_REGION@x@*/x/*@END_REGION@*/ + /*@BEGIN_REGION@x2@*/x/*@END_REGION@*//*@END_REGION@*/)
}
/*@END_REGION@*/


/*@BEGIN_REGION@program@*/
program {
  /*@BEGIN_REGION@repeat@*/
  repeat(/*@BEGIN_REGION@cf1@*/doble(/*@BEGIN_REGION@2@*/2/*@END_REGION@*/)/*@END_REGION@*/) {
    /*@BEGIN_REGION@poner@*/
    Poner(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('AlternativaSimple',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30" id="prog"><statement name="program"><block type="AlternativaSimple" id="if"><value name="condicion"><block type="BoolSelector" id="true"><field name="BoolDropdown">True</field></block></value><statement name="block"><block type="Poner" id="poner"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></statement></block></statement></block></xml>',
    `/*@BEGIN_REGION@prog@*/
program {
  /*@BEGIN_REGION@if@*/
  if (/*@BEGIN_REGION@true@*/True/*@END_REGION@*/) {
    /*@BEGIN_REGION@poner@*/
    Poner(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('AlternativaCompleta',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id="program" deletable="false" movable="false" editable="false" x="30" y="30"><mutation timestamp="1510689378113"></mutation><statement name="program"><block type="AlternativaCompleta" id="if"><mutation else="1"></mutation><value name="condicion"><block type="BoolSelector" id="true"><field name="BoolDropdown">True</field></block></value><statement name="block1"><block type="Poner" id="poner"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></statement><statement name="block2"><block type="Sacar" id="sacar"><value name="COLOR"><block type="ColorSelector" id="verde"><field name="ColorDropdown">Verde</field></block></value></block></statement></block></statement></block></xml>',
    `/*@BEGIN_REGION@program@*/
program {
  /*@BEGIN_REGION@if@*/
  if (/*@BEGIN_REGION@true@*/True/*@END_REGION@*/) {
    /*@BEGIN_REGION@poner@*/
    Poner(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)
    /*@END_REGION@*/
  } else {
    /*@BEGIN_REGION@sacar@*/
    Sacar(/*@BEGIN_REGION@verde@*/Verde/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('AlternativaCompletaConElseIf',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="Program" id="program" deletable="false" x="30" y="30"><mutation timestamp="1510202309441"></mutation><statement name="program"><block type="AlternativaCompleta" id="if"><mutation elseif="2" else="1"></mutation><value name="condicion"><block type="puedeMover" id="puedeMover1"><value name="VALUE"><block type="DireccionSelector" id="este1"><field name="DireccionDropdown">Este</field></block></value></block></value><statement name="block1"><block type="Poner" id="poner1"><value name="COLOR"><block type="ColorSelector" id="rojo1"><field name="ColorDropdown">Rojo</field></block></value></block></statement><value name="IF1"><block type="puedeMover" id="puedeMover2"><value name="VALUE"><block type="DireccionSelector" id="oeste2"><field name="DireccionDropdown">Oeste</field></block></value></block></value><statement name="DO1"><block type="Sacar" id="sacar"><value name="COLOR"><block type="ColorSelector" id="rojo2"><field name="ColorDropdown">Rojo</field></block></value></block></statement><value name="IF2"><block type="puedeMover" id="puedeMover3"><value name="VALUE"><block type="DireccionSelector" id="sur3"><field name="DireccionDropdown">Sur</field></block></value></block></value><statement name="block2"><block type="Mover" id="mover3"><value name="DIRECCION"><block type="DireccionSelector" id="este3"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></statement></block></xml>',
    `/*@BEGIN_REGION@program@*/
program {
  /*@BEGIN_REGION@if@*/
  if (/*@BEGIN_REGION@puedeMover1@*/puedeMover(/*@BEGIN_REGION@este1@*/Este/*@END_REGION@*/)/*@END_REGION@*/) {
    /*@BEGIN_REGION@poner1@*/
    Poner(/*@BEGIN_REGION@rojo1@*/Rojo/*@END_REGION@*/)
    /*@END_REGION@*/
  } elseif (/*@BEGIN_REGION@puedeMover2@*/puedeMover(/*@BEGIN_REGION@oeste2@*/Oeste/*@END_REGION@*/)/*@END_REGION@*/) {
    /*@BEGIN_REGION@sacar@*/
    Sacar(/*@BEGIN_REGION@rojo2@*/Rojo/*@END_REGION@*/)
    /*@END_REGION@*/
  } elseif (/*@BEGIN_REGION@puedeMover3@*/puedeMover(/*@BEGIN_REGION@sur3@*/Sur/*@END_REGION@*/)/*@END_REGION@*/) {
  } else {
    /*@BEGIN_REGION@mover3@*/
    Mover(/*@BEGIN_REGION@este3@*/Este/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('Repetición Simple',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30" id="prog"><statement name="program"><block type="RepeticionSimple" id="repeat"><value name="count"><block type="math_number" id="5"><field name="NUM">5</field></block></value><statement name="block"><block type="Mover" id="mover"><value name="DIRECCION"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></statement></block></xml>',
    `/*@BEGIN_REGION@prog@*/
program {
  /*@BEGIN_REGION@repeat@*/
  repeat(/*@BEGIN_REGION@5@*/5/*@END_REGION@*/) {
    /*@BEGIN_REGION@mover@*/
    Mover(/*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('Llamada a procedimiento',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" id="prog"><statement name="program"><block type="procedures_callnoreturn" id="f1call"><mutation name="hacer algo con"><arg name="x"></arg><arg name="y"></arg></mutation><value name="ARG0"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value><value name="ARG1"><block type="ColorSelector" id="verde"><field name="ColorDropdown">Verde</field></block></value></block></statement></block><block type="procedures_defnoreturn" id="f1def"><mutation><arg name="x"></arg><arg name="y"></arg></mutation><field name="NAME">hacer algo con</field><comment></comment></block></xml>',
    `/*@BEGIN_REGION@f1def@*/
procedure HacerAlgoCon(x, y) {
}
/*@END_REGION@*/


/*@BEGIN_REGION@prog@*/
program {
  /*@BEGIN_REGION@f1call@*/
  HacerAlgoCon(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/, /*@BEGIN_REGION@verde@*/Verde/*@END_REGION@*/)
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  test('Procedimiento primitivo', function() {
    this.element.primitiveProcedures = ['Poner_FloresAl_'];
    this.element.workspaceXml = `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="Program" deletable="false" movable="false" editable="false" x="30" y="30" id="prog"><statement name="program"><block type="Poner_FloresAl_" id="pf"><value name="arg1"><block type="math_number" id="4"><field name="NUM">4</field></block></value><value name="arg2"><block type="DireccionSelector" id="este"><field name="DireccionDropdown">Este</field></block></value></block></statement></block></xml>`;
    printPragmaRow(this.element,{withRegions: true});
    assert.equal(this.element.generateCode({withRegions: true}), `/*@BEGIN_REGION@prog@*/
program {
  /*@BEGIN_REGION@pf@*/
  Poner_FloresAl_(/*@BEGIN_REGION@4@*/4/*@END_REGION@*/, /*@BEGIN_REGION@este@*/Este/*@END_REGION@*/)
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`);
});

  gsTestCode('Genera bien varios comandos seguidos',
    `<xml xmlns="http://www.w3.org/1999/xhtml">
    <variables>
    </variables>
    <block type="Program" id="p1" deletable="false" x="30" y="30">
      <mutation timestamp="1514515892649">
      </mutation>
      <statement name="program">
        <block type="VaciarTablero" id="v1">
          <next>
            <block type="VaciarTablero" id="v2">
              <next>
                <block type="VaciarTablero" id="v3">
                </block>
              </next>
            </block>
          </next>
        </block>
      </statement>
    </block>
  </xml>
  `,
    `/*@BEGIN_REGION@p1@*/
program {
  /*@BEGIN_REGION@v1@*/
  VaciarTablero()
  /*@END_REGION@*/
  /*@BEGIN_REGION@v2@*/
  VaciarTablero()
  /*@END_REGION@*/
  /*@BEGIN_REGION@v3@*/
  VaciarTablero()
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
  {withRegions: true});

    gsTestCode('Asignacion variable',
      '<xml><block type="Program" id="prog"><statement name="program"><block type="Asignacion" id="asig"><field name="varName">x</field><value name="varValue"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value><next><block type="Poner" id="poner"><value name="COLOR"><block type="variables_get" id="vget"><mutation var="x"></mutation></block></value></block></next></block></statement></block></xml>',
      `/*@BEGIN_REGION@prog@*/
program {
  /*@BEGIN_REGION@asig@*/
  x := /*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/
  /*@END_REGION@*/
  /*@BEGIN_REGION@poner@*/
  Poner(/*@BEGIN_REGION@vget@*/x/*@END_REGION@*/)
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('Programa interactivo simple',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="InteractiveProgram" id="iprog" deletable="false" x="-7" y="25"><mutation timestamp="1509521036701"></mutation><statement name="interactiveprogram"><block type="InteractiveKeyBinding" id="kb1"><mutation modifierscount="0"></mutation><field name="InteractiveBindingDropdownKey">ARROW_LEFT</field><statement name="block"><block type="Poner" id="poner1"><value name="COLOR"><block type="ColorSelector" id="rojo1"><field name="ColorDropdown">Rojo</field></block></value></block></statement><next><block type="InteractiveLetterBinding" id="kb2"><mutation modifierscount="3"></mutation><field name="InteractiveBindingDropdownKey">A</field><field name="d1">SHIFT</field><field name="d2">CTRL</field><field name="d3">ALT</field><statement name="block"><block type="Poner" id="poner2"><value name="COLOR"><block type="ColorSelector" id="verde2"><field name="ColorDropdown">Verde</field></block></value></block></statement><next><block type="InteractiveNumberBinding" id="kb3"><mutation modifierscount="2"></mutation><field name="InteractiveBindingDropdownKey">1</field><field name="d1">CTRL</field><field name="d2">SHIFT</field><statement name="block"><block type="Poner" id="poner3"><value name="COLOR"><block type="ColorSelector" id="azul3"><field name="ColorDropdown">Azul</field></block></value></block></statement></block></next></block></next></block></statement></block></xml>',
    `/*@BEGIN_REGION@iprog@*/
interactive program {
  /*@BEGIN_REGION@kb1@*/
  K_ARROW_LEFT -> {
    /*@BEGIN_REGION@poner1@*/
    Poner(/*@BEGIN_REGION@rojo1@*/Rojo/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
  /*@BEGIN_REGION@kb2@*/
  K_CTRL_ALT_SHIFT_A -> {
    /*@BEGIN_REGION@poner2@*/
    Poner(/*@BEGIN_REGION@verde2@*/Verde/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
  /*@BEGIN_REGION@kb3@*/
  K_CTRL_SHIFT_1 -> {
    /*@BEGIN_REGION@poner3@*/
    Poner(/*@BEGIN_REGION@azul3@*/Azul/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('Programa interactivo con init y timeout',
    '<xml xmlns="http://www.w3.org/1999/xhtml"><variables></variables><block type="InteractiveProgram" id="iprogram" deletable="false" x="67" y="8"><mutation init="true" timeout="500" timestamp="1509521133888"></mutation><statement name="interactiveprogram"><block type="InteractiveKeyBinding" id="kb1"><mutation modifierscount="0"></mutation><field name="InteractiveBindingDropdownKey">TAB</field><statement name="block"><block type="Poner" id="poner1"><value name="COLOR"><block type="ColorSelector" id="negro1"><field name="ColorDropdown">Negro</field></block></value></block></statement></block></statement><statement name="init"><block type="Poner" id="poner2"><value name="COLOR"><block type="ColorSelector" id="rojo2"><field name="ColorDropdown">Rojo</field></block></value></block></statement><statement name="timeout"><block type="Poner" id="poner3"><value name="COLOR"><block type="ColorSelector" id="verde3"><field name="ColorDropdown">Verde</field></block></value></block></statement></block></xml>',
    `/*@BEGIN_REGION@iprogram@*/
interactive program {
  INIT -> {
  /*@BEGIN_REGION@poner2@*/
  Poner(/*@BEGIN_REGION@rojo2@*/Rojo/*@END_REGION@*/)
  /*@END_REGION@*/
  }
  /*@BEGIN_REGION@kb1@*/
  K_TAB -> {
    /*@BEGIN_REGION@poner1@*/
    Poner(/*@BEGIN_REGION@negro1@*/Negro/*@END_REGION@*/)
    /*@END_REGION@*/
  }
  /*@END_REGION@*/
  TIMEOUT(500) -> {
  /*@BEGIN_REGION@poner3@*/
  Poner(/*@BEGIN_REGION@verde3@*/Verde/*@END_REGION@*/)
  /*@END_REGION@*/
  }
}
/*@END_REGION@*/\n`,
{withRegions: true});

  gsTestCode('Comando Completar',
      '<xml><block type="Program" id="completar"><statement name="program"><block type="ComandoCompletar" id="comp"><next><block type="Poner" id="poner"><value name="COLOR"><block type="ColorSelector" id="rojo"><field name="ColorDropdown">Rojo</field></block></value></block></next></block></statement></block></xml>',
      `/*@BEGIN_REGION@completar@*/
program {
  /*@BEGIN_REGION@comp@*/
  BOOM("El programa todavía no está completo")
  /*@END_REGION@*/
  /*@BEGIN_REGION@poner@*/
  Poner(/*@BEGIN_REGION@rojo@*/Rojo/*@END_REGION@*/)
  /*@END_REGION@*/
}
/*@END_REGION@*/\n`,
{withRegions: true});

});
