package com.paulorocha7117.calculadora.BDDtest;

import static org.junit.Assert.assertEquals;
import com.paulorocha7117.calculadora.Calculadora;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;

class Variaveis{
	static int num1Adicao;
	static int num2Adicao;

	static int num1Subtracao;
	static int num2Subtracao;

	static int num1Multiplicacao;
	static int num2Multiplicacao;

	static int num1Divisao;
	static int num2Divisao;

} 

public class CalcStepsDefinitions {	
	Calculadora calculadora = new Calculadora();

	@Dado("que o usuario some {int} com {int}")
	public void que_eu_some_com(Integer int1, Integer int2) {
		Variaveis.num1Adicao = int1;
		Variaveis.num2Adicao = int2;

	}

	@Entao("o resultado da adicao deve ser {int}")
	public void o_resultado_da_adicao_deve_ser(Integer int1) {
		int resultSom = int1; 
		assertEquals(resultSom, calculadora.Adicao(Variaveis.num1Adicao, Variaveis.num2Adicao) );
	}

	@Dado("que o usuario subtraia {int} de {int}")
	public void que_eu_subraia_com(Integer int1, Integer int2) {
		Variaveis.num1Subtracao = int1;
		Variaveis.num2Subtracao = int2;
	}

	@Entao("o resultado da subtracao deve ser {int}")
	public void o_resultado_da_subtracao_deve_ser(Integer int1) {
		int resultSub = int1;
		assertEquals(resultSub , calculadora.Subtracao(Variaveis.num1Subtracao, Variaveis.num2Subtracao) );
	}

	@Dado("que o usuario multiplique {int} com {int}")
	public void que_eu_multiplique_com(Integer int1, Integer int2) {
		Variaveis.num1Multiplicacao = int1;
		Variaveis.num2Multiplicacao = int2;
	}

	@Entao("o resultado da multiplicacao deve ser {int}")
	public void o_resultado_da_multiplicacao_deve_ser(Integer int1) {
		int resultMult = int1;
		assertEquals(resultMult, calculadora.Multiplicacao(Variaveis.num1Multiplicacao, Variaveis.num2Multiplicacao) );
	}

	@Dado("que o usuario divida {int} por {int}")
	public void que_eu_divida_com(Integer int1, Integer int2) {
		Variaveis.num1Divisao = int1;
		Variaveis.num2Divisao = int2;
	}

	@Entao("o resultado da divisao deve ser {int}")
	public void o_resultado_da_divisao_deve_ser(Integer int1) {
		int resultDiv = int1;
		assertEquals(resultDiv, calculadora.Divisao(Variaveis.num1Divisao, Variaveis.num2Divisao) );
	}

}
