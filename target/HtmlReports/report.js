$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Calculadora.feature");
formatter.feature({
  "name": "Calculadora",
  "description": "  \"\"\"Calculadora de numeros insteiros \"\"\"",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Adicao",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "que o usuario some 2 com 2",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.que_eu_some_com(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da adicao deve ser 4",
  "keyword": "Entao "
});
formatter.match({
  "location": "com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.o_resultado_da_adicao_deve_ser(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c4\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.o_resultado_da_adicao_deve_ser(CalcStepsDefinitions.java:36)\r\n\tat ✽.o resultado da adicao deve ser 4(file:///C:/Users/Notebook/Desktop/sem%20anotação/com.paulorocha7117/src/test/resources/Features/Calculadora.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Subtracao",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "que o usuario subtraia 2 de 2",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.que_eu_subraia_com(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da subtracao deve ser 0",
  "keyword": "Entao "
});
formatter.match({
  "location": "com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.o_resultado_da_subtracao_deve_ser(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiplicacao",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "que o usuario multiplique 2 com 2",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.que_eu_multiplique_com(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser 4",
  "keyword": "Entao "
});
formatter.match({
  "location": "com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.o_resultado_da_multiplicacao_deve_ser(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Divisao",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "que o usuario divida 2 por 2",
  "keyword": "Dado "
});
formatter.match({
  "location": "com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.que_eu_divida_com(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da divisao deve ser 1",
  "keyword": "Entao "
});
formatter.match({
  "location": "com.paulorocha7117.calculadora.BDDtest.CalcStepsDefinitions.o_resultado_da_divisao_deve_ser(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});