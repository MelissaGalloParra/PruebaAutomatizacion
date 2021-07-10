package task

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

public class DatosPersonales {


	def static deLaPersona() {

		WebUI.click(findTestObject('Object Repository/RegistroUser/a_bttn Registro'))

		WebUI.setText(findTestObject('Object Repository/RegistroUser/input_firstName'), 'Lola')

		WebUI.setText(findTestObject('Object Repository/RegistroUser/input_lastName'), 'Perez')

		WebUI.setText(findTestObject('Object Repository/RegistroUser/input_Email'), 'lola0@gmail.com')

		WebUI.selectOptionByValue(findTestObject('Object Repository/RegistroUser/select_Day'), 'number:16', true)

		WebUI.selectOptionByLabel(findTestObject('Object Repository/RegistroUser/select_birth'), 'February', true)

		WebUI.selectOptionByValue(findTestObject('Object Repository/RegistroUser/select_Year'), '1999', true)

		WebUI.click(findTestObject('Object Repository/RegistroUser/span_Next Location'))
	}
}
