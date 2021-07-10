$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/mgallo/git/PruebaAutomatizacion/Include/features/Registro.feature");
formatter.feature({
  "name": "Resgitro de usuario",
  "description": "  Yo como usuario deseo registrame en la pagina UTest",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Registrarme en Utest",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegistroExitoso"
    }
  ]
});
formatter.step({
  "name": "Yo ingreso a la pagina web",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistroExitosoStepDefinition.yo_ingreso_a_la_pagina_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Yo ingreso mis datos personales",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroExitosoStepDefinition.yo_ingreso_mis_datos_personales()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to select option by label \u0027February\u0027 of object \u0027Object Repository/RegistroUser/select_birth\u0027  using regular expression\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SelectOptionByLabelKeyword.selectOptionByLabel(SelectOptionByLabelKeyword.groovy:98)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SelectOptionByLabelKeyword.execute(SelectOptionByLabelKeyword.groovy:71)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.selectOptionByLabel(WebUiBuiltInKeywords.groovy:1229)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$selectOptionByLabel$5.call(Unknown Source)\r\n\tat task.DatosPersonales.deLaPersona(DatosPersonales.groovy:38)\r\n\tat task.DatosPersonales$deLaPersona.call(Unknown Source)\r\n\tat registro.RegistroExitosoStepDefinition.yo_ingreso_mis_datos_personales(RegistroExitosoStepDefinition.groovy:61)\r\n\tat ✽.Yo ingreso mis datos personales(C:/Users/mgallo/git/PruebaAutomatizacion/Include/features/Registro.feature:8)\r\nCaused by: org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027P-MGALLO\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\mgallo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:63286}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1cd751e74d04ed640c5c148632477e71\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:19)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.lambda$new$0(EventFiringWebDriver.java:404)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.getText(EventFiringWebDriver.java:463)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.selectOrDeselectOptionsByLabelWithRegularExpression(WebUiCommonHelper.java:323)\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.selectOrDeselectOptionsByLabel(WebUiCommonHelper.java:307)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SelectOptionByLabelKeyword$_selectOptionByLabel_closure1.doCall(SelectOptionByLabelKeyword.groovy:87)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SelectOptionByLabelKeyword$_selectOptionByLabel_closure1.call(SelectOptionByLabelKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SelectOptionByLabelKeyword.selectOptionByLabel(SelectOptionByLabelKeyword.groovy:98)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.SelectOptionByLabelKeyword.execute(SelectOptionByLabelKeyword.groovy:71)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.selectOptionByLabel(WebUiBuiltInKeywords.groovy:1229)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$selectOptionByLabel$5.call(Unknown Source)\r\n\tat task.DatosPersonales.deLaPersona(DatosPersonales.groovy:38)\r\n\tat task.DatosPersonales$deLaPersona.call(Unknown Source)\r\n\tat registro.RegistroExitosoStepDefinition.yo_ingreso_mis_datos_personales(RegistroExitosoStepDefinition.groovy:61)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\r\n\tat cucumber.api.cli.Main.run(Main.java:35)\r\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFolder_closure3.doCall(CucumberBuiltinKeywords.groovy:357)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFolder_closure3.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFolder(CucumberBuiltinKeywords.groovy:326)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFolder.call(Unknown Source)\r\n\tat Registro.run(Registro:19)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:398)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:389)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:368)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:360)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:255)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:203)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:152)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:95)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:157)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1625878038769.run(TempTestSuite1625878038769.groovy:39)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Yo ingreso los datos de la cuidad a la que pertenezco",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroExitosoStepDefinition.yo_ingreso_los_datos_de_la_cuidad_a_la_que_pertenezco()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Yo ingreso los datos de mi computadora y celular",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroExitosoStepDefinition.yo_ingreso_los_datos_de_mi_computadora_y_celular()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Yo creo una contraseña segura e acepto los terminos",
  "keyword": "When "
});
formatter.match({
  "location": "RegistroExitosoStepDefinition.yo_creo_una_contraseña_segura_e_acepto_los_terminos()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Yo verifico el mensaje de bienvenida",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistroExitosoStepDefinition.yo_verifico_el_mensaje_de_bienvenida()"
});
formatter.result({
  "status": "skipped"
});
});