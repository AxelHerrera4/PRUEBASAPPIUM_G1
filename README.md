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

### 4. Instalar el JDK
1. Descarga la última versión del JDK desde [este enlace](https://download.oracle.com/java/23/latest/jdk-23_windows-x64_bin.msi).
2. Para comprobar si está configurado en las variables de entorno, utiliza el siguiente comando:
   ```bash
   echo %JAVA_HOME%
