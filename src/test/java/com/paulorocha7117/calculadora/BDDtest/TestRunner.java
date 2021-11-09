package com.paulorocha7117.calculadora.BDDtest;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

//Enderecos:
@CucumberOptions(features="src/test/resources/Features", strict = true,
//glue={"CalcStepsDefinitions"}
//melhorar output:
monochrome = true,
plugin = {"pretty","html:target/HtmlReports"}

		)

public class TestRunner {

}
