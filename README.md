# Guía de Configuración y Uso de Appium con Android

## 1. Activar el Modo Desarrollador en el Teléfono
1. Ve a **Ajustes** > **Acerca del teléfono**.
2. Toca 7 veces sobre **Número de compilación** para habilitar el modo desarrollador.
3. Ve a **Sistema y actualizaciones** > **Opciones de desarrollador** y activa la opción **Depuración USB**.

## 2. Instalar Android Studio
1. Descarga e instala Android Studio desde su [sitio oficial](https://developer.android.com/studio).
2. Asegúrate de traer contigo el cable USB de tu teléfono para conectarlo a la computadora.

## 3. Configurar Variables de Entorno
### 3.1 JDK
1. Verifica si el JDK está instalado con el siguiente comando:
   ```bash
   java -version

Si no está instalado, descarga la última versión del JDK desde este enlace.
Configura la variable de entorno JAVA_HOME siguiendo esta guía.
Comprueba la configuración con:
echo %JAVA_HOME%
3.2 ADB
Verifica si ADB está instalado con:
adb version
Si no está instalado, descarga ADB desde este enlace.
Agrega ADB a las variables de entorno:
Ve a Variables de entorno en tu sistema.
En Variables del sistema, selecciona la variable Path y haz clic en Editar.
Agrega la ruta donde extrajiste ADB, por ejemplo:
C:\adb\platform-tools
Guarda los cambios.
4. Instalar Node.js
Verifica si Node.js está instalado con:
node -v
Si no está instalado, descárgalo desde su sitio oficial.
Verifica si npm está instalado con:
npm -v
Si no está instalado, instala npm junto con Node.js.
5. Instalar Appium Inspector
Descarga Appium Inspector desde su repositorio oficial y ejecuta el archivo .exe para instalarlo.
6. Instalar Visual Studio Code
Descarga Visual Studio Code desde su sitio oficial y ábrelo.
7. Configurar Appium en el Proyecto
En la terminal de Visual Studio Code, instala Appium globalmente con:
npm install -g appium
Instala appium-doctor para verificar las dependencias:
npm install -g appium-doctor
Instala el driver de Appium para Android:
appium driver install uiautomator2
8. Configurar Android SDK
Sigue esta guía para configurar el entorno de Android SDK.
9. Configurar el Archivo wdio.conf.js
En esta línea del archivo:

const androidAppPath = projectPath.join(process.cwd(),"C:\\Users\\LEGION\\Desktop\\TestAutomation\\App\\Android-MyDemoAppRN.1.3.0.build-244.apk")
Reemplaza el path con la dirección completa de la APK que se encuentra en la carpeta App del proyecto.

Configura las especificaciones del dispositivo según la información de Ajustes > Sistema:

name: Modelo del dispositivo.
version: Versión del sistema operativo.
app: Dirección completa de la APK.
10. Configurar Puertos del Servidor y Appium Inspector
En Appium Inspector, usa el siguiente formato y ajusta las especificaciones:

{
  "platformName": "Android",
  "appium:platformVersion": "8.0.0",
  "appium:deviceName": "F8331",
  "appium:automationName": "UIAutomator2",
  "appium:app": "C:\\Users\\LEGION\\Desktop\\TestAutomation\\App\\Android-MyDemoAppRN.1.3.0.build-244.apk",
  "appium:noReset": true
}
Configura el puerto de conexión:

REMOTE HOST: localhost
Remote Port: 4725
Remote Path: / (o /wd/hub para versiones antiguas de Android).
En la terminal del proyecto, activa el servidor de Appium con:

appium -p 4725
11. Realizar Pruebas
Conecta el teléfono a la computadora.
Inicia Appium Inspector para identificar los componentes de la aplicación.
Crea nuevas pruebas en la carpeta specs con el formato e2e.js.
Ejecuta las pruebas con:
npx wdio


