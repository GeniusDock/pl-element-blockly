gsSuite('Generadores de Expresiones', function() {
	gsTestCode('|| se genera bien',
    '<xml><block type="OperadorLogico"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">False</field></block></value></block></xml>',
    'True && False'
	);
	gsTestCode('|| se genera bien',
    '<xml><block type="OperadorLogico"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">False</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></xml>',
    'False || True'
	);
	gsTestCode('|| se genera bien',
    '<xml><block type="OperadorLogico"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OperadorLogico"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
    'True && (True || True)'
	);
  gsTestCode('Anidación de || dentro de && provoca paréntesis',
    '<xml><block type="OperadorLogico"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="OperadorLogico"><field name="OPERATOR">||</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value></block></xml>',
    'True && (True || True)'
	);
	gsTestCode('Anidación de && dentro de || no provoca paréntesis',
    '<xml><block type="OperadorLogico"><field name="OPERATOR">||</field><value name="arg1"><block type="OperadorLogico"><field name="OPERATOR">&amp;&amp;</field><value name="arg1"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></value><value name="arg2"><block type="BoolSelector"><field name="BoolDropdown">True</field></block></value></block></xml>',
    'True && True || True'
	);

	gsTestCode('hayBolitas',
    '<xml><block type="hayBolitas"><value name="VALUE"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    'hayBolitas(Rojo)'
	);

	gsTestCode('nroBolitas',
    '<xml><block type="nroBolitas"><value name="VALUE"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value></block></xml>',
    'nroBolitas(Rojo)'
	);

	gsTestCode('puedeMover',
    '<xml><block type="puedeMover"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
    'puedeMover(Este)'
	);

	gsTestCode('siguiente',
    '<xml><block type="siguiente"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
    'siguiente(Este)'
	);

	gsTestCode('previo',
    '<xml><block type="previo"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
    'previo(Este)'
	);

	gsTestCode('opuesto',
		'<xml><block type="opuesto"><value name="VALUE"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>',
		'opuesto(Este)'
	);

  gsTestCode('Funciones',
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defreturn" id="+gqlq+YuvCEMmS6F61{-" x="18" y="-49"><field name="NAME">devolver algun valor</field><comment pinned="false" h="80" w="160">Comentario de lo que devuelve</comment><statement name="STACK"><block type="Mover" id="NCfiiVVe_B-`PMM1+kD^"><value name="DIRECCION"><block type="DireccionSelector" id="Dv4N-v/Zlt~n!R|IJtWe"><field name="DireccionDropdown">Este</field></block></value></block></statement><value name="RETURN"><block type="ColorSelector" id="g:f8pLgHC1}i]ou!MFq1"><field name="ColorDropdown">Rojo</field></block></value></block><block type="Program" id="twZ(|C[;{.q7Y=]W*iNv" deletable="false" movable="false" editable="false" x="30" y="30"><statement name="program"><block type="Poner" id="jgtnboH^Cx^^UT0%!#j`"><value name="COLOR"><block type="procedures_callreturn" id="5O:f6l?E-j8LT{YTjr;_"><mutation name="devolver algun valor"></mutation></block></value></block></statement></block></xml>',
    `//
// Comentario de lo que devuelve
//
function devolverAlgunValor() {
  Mover(Este)
  return (Rojo)
}


program {
  Poner(devolverAlgunValor())
}\n`);

  gsTestCode('Sanitiza bien los parametros',
  '<xml><block type="procedures_defreturnsimplewithparams" id="wER^h(R3^R3dfWRXEQ?t" x="47" y="138"><mutation statements="false"><arg name="Ñáñaras en el Occipucio"></arg></mutation><field name="NAME">devolver algo</field><value name="RETURN"><block type="variables_get" id="w_#.et_BWPs__E]]Di+F"><mutation var="Ñáñaras en el Occipucio"></mutation></block></value></block></xml>',
    `function devolverAlgo(ñáñarasEnElOccipucio) {
  return (ñáñarasEnElOccipucio)
}
`);

  test('Funciones primitivas', function() {
    this.element.primitiveFunctions = ['hayFlores_en_'];
    this.element.workspaceXml = `<xml><block type="hayFlores_en_"><value name="arg1"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value><value name="arg2"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value></block></xml>`;
    assert.equal(this.element.generateCode(), `hayFlores_en_(Rojo, Este)`);
  });


  test('Genera correctamente usando funciones primitivas', function() {
    this.element.primitiveFunctions = ['hayFlores_en_', 'dondeEsta_'];
    this.element.workspaceXml = `<xml>
    <block type="Program"><statement name="program">
      <block type="AlternativaSimple">
        <value name="condicion">
          <block type="hayFlores_en_">
            <value name="arg1"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value>
            <value name="arg2"><block type="DireccionSelector"><field name="DireccionDropdown">Este</field></block></value>
          </block>
        </value>
        <statement name="block">
          <block type="Mover">
            <value name="DIRECCION">
              <block type="dondeEsta_">
                <value name="arg1"><block type="ColorSelector"><field name="ColorDropdown">Rojo</field></block></value>
              </block>
            </value>
          </block>
        </statement>
      </block>
    </statement>
  </block>
</xml>`;

    assert.equal(this.element.generateCode(), `program {
  if (hayFlores_en_(Rojo, Este)) {
    Mover(dondeEsta_(Rojo))
  }
}\n`);
  });

  gsTestCode('Expresión Completar',
    '<xml><block type="ExpresionCompletar"></block></xml>',
    'boom("El programa todavía no está completo")'
  );
});
