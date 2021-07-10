package registro
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable
import question.MensajeBienvenida
import task.CreaciónContraseña
import task.DatosCuidad
import task.DatosInformaticos
import task.DatosPersonales
import task.Navegación

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class RegistroExitosoStepDefinition {
	@Given("Yo ingreso a la pagina web")
	public void yo_ingreso_a_la_pagina_web() {
		Navegación.APagina()
	}

	@When("Yo ingreso mis datos personales")
	public void yo_ingreso_mis_datos_personales() {
		DatosPersonales.deLaPersona()
	}

	@When("Yo ingreso los datos de la cuidad a la que pertenezco")
	public void yo_ingreso_los_datos_de_la_cuidad_a_la_que_pertenezco() {
		DatosCuidad.Ubicacion()
	}

	@When("Yo ingreso los datos de mi computadora y celular")
	public void yo_ingreso_los_datos_de_mi_computadora_y_celular() {
		DatosInformaticos.ListaInformatica()
	}

	@When("Yo creo una contraseña segura e acepto los terminos")
	public void yo_creo_una_contraseña_segura_e_acepto_los_terminos() {
		CreaciónContraseña.contraseña()
	}

	@Then("Yo verifico el mensaje de bienvenida")
	public void yo_verifico_el_mensaje_de_bienvenida() {
		MensajeBienvenida.logueoExitoso()
	}
}