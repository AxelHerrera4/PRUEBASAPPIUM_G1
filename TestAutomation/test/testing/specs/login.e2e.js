describe("My login Demo", () => {
    beforeEach(async () => {
        // Abre el menú y navega al inicio de sesión
        await $("~open menu").click(); 
        await $('//*[@text="Log In"]').click();
    });

    it("should not login with invalid credentials", async () => {
        // Ingresa un nombre de usuario inválido
        await $('//*[@content-desc="Username input field"]').setValue("wrongUser");

        // Ingresa una contraseña inválida
        await $('//*[@content-desc="Password input field"]').setValue("wrongPassword");

        // Hace clic en el botón de inicio de sesión
        await $(
            '//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView'
        ).click();

        // Pausa para esperar la aparición del mensaje de error
        await driver.pause(3000);

        // Verifica que el mensaje de error sea el esperado
        await expect(
            $(
                '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
            )
        ).toHaveText("Provided credentials do not match any user in this service.");
    });

    it("should login with valid credentials", async () => {
        // Ingresa un nombre de usuario válido
        await $('//*[@content-desc="Username input field"]').setValue("bob@example.com");

        // Ingresa una contraseña válida
        await $('//*[@content-desc="Password input field"]').setValue("10203040");

        // Hace clic en el botón de inicio de sesión
        await $(
            '//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView'
        ).click();

        // Espera que aparezca el encabezado de productos
        const selector =
            'new UiSelector().text("Products").className("android.widget.TextView")';
        const productsUISelector = await $(`android=${selector}`);

        // Verifica que el texto del encabezado sea correcto
        await expect(productsUISelector).toHaveText("Products");
    });
});