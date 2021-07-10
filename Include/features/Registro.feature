
Feature: Resgitro de usuario
  Yo como usuario deseo registrame en la pagina UTest

  @RegistroExitoso
  Scenario: Registrarme en Utest
    Given Yo ingreso a la pagina web
    When Yo ingreso mis datos personales
    When Yo ingreso los datos de la cuidad a la que pertenezco
    When Yo ingreso los datos de mi computadora y celular
    When Yo creo una contraseña segura e acepto los terminos
    Then Yo verifico el mensaje de bienvenida

   