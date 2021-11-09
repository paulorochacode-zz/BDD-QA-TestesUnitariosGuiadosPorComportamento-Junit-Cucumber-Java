package com.paulorocha7117.calculadora.BDDtest;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

//Endereços:
@CucumberOptions(features="src/test/resources/Features",
//glue={"CalcStepsDefinitions"},strict = true
//melhorar output:
monochrome = true,
plugin = {"pretty","html:target/HtmlReports"}

		)

public class TestRunner {

}
