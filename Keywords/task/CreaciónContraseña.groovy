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

public class CreaciónContraseña {

	def static contraseña() {
		WebUI.setEncryptedText(findTestObject('Object Repository/RegistroUser/input_password'), 'NsnE7sVUjvFD8GVfqXAKm3dYMj+m+3Em')

		WebUI.setEncryptedText(findTestObject('Object Repository/RegistroUser/input_Confirm password'), 'NsnE7sVUjvFD8GVfqXAKm3dYMj+m+3Em')

		WebUI.click(findTestObject('Object Repository/RegistroUser/div_Already'))

		WebUI.click(findTestObject('Object Repository/RegistroUser/span_(optional)'))

		WebUI.click(findTestObject('Object Repository/RegistroUser/span_uTest'))

		WebUI.click(findTestObject('Object Repository/RegistroUser/span_uTest'))

		WebUI.click(findTestObject('Object Repository/RegistroUser/span_Complete Setup'))
	}
}
