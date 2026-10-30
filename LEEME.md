# LINUX Learn · Página web de presentación y descarga

Guía completa para revisar la página en tu computadora y publicarla gratis con
**GitHub Pages**, con el APK disponible en **GitHub Releases**.
No necesitas saber usar Git: todo se hace desde el navegador.

---

## 1. Qué contiene el proyecto

- Una página web hecha con HTML, CSS y un poco de JavaScript (sin frameworks).
- Cinco secciones: **Inicio, Características, Vista previa, Descargar y Acerca del proyecto**.
- Franja institucional con los logotipos de **UANL (izquierda)** y **FIME (derecha)**.
- Lista de los 12 integrantes del equipo (nombre completo y matrícula).
- Capturas reales de la app: pantalla de bienvenida, Inicio y Perfil.
- El instalador real de la app: `assets/apk/linux-learn.apk`.
- Diseño responsivo: se adapta a computadoras, tabletas y celulares.

## 2. Cómo abrir la página en tu computadora

1. Descomprime el ZIP.
2. Entra a la carpeta `linux-learn-web`.
3. Haz doble clic en `index.html`. Se abrirá en tu navegador.

> Mientras no hayas configurado tu enlace de GitHub (sección 12), bajo el botón
> **Descargar APK** aparece el aviso "La descarga estará disponible cuando se
> publique la primera versión…". Es normal: el aviso desaparece solo cuando
> pongas tu usuario real.

Las tipografías (Archivo y Roboto) se cargan desde internet. Sin conexión, la
página usa una fuente del sistema y se ve un poco distinta.

## 3. Organización de las carpetas

```
linux-learn-web/
├── index.html            → contenido de la página
├── LEEME.md              → esta guía
├── .gitignore            → evita subir el APK al repositorio (ver sección 8)
├── css/
│   └── styles.css        → diseño y colores (paleta al inicio, en :root)
├── js/
│   └── main.js           → menú del celular, sección activa y aviso de descarga
└── assets/
    ├── img/              → capturas que muestra la página
    ├── logos/            → logotipos UANL y FIME (PNG transparente)
    ├── fuente/           → archivos originales de referencia (la página no los usa)
    └── apk/
        └── linux-learn.apk   → instalador real (se sube a Releases, no al repositorio)
```

> En GitHub los nombres distinguen mayúsculas y minúsculas. No cambies los
> nombres de archivos ni carpetas o las imágenes dejarán de verse.

## 4. Dónde están los logotipos

| Archivo | Uso |
|---|---|
| `assets/logos/logo-uanl.png` | Logotipo UANL, lado izquierdo de la franja superior |
| `assets/logos/logo-fime.png` | Logotipo FIME, lado derecho de la franja superior |
| `assets/fuente/logo-uanl-original.jpg` | Imagen original recibida (con fondo blanco) |
| `assets/fuente/logo-fime-original.jpg` | Imagen original recibida (con fondo blanco) |

A los PNG solo se les quitó el **fondo blanco exterior** (son transparentes); el
emblema no se redibujó ni se alteró, y sus partes blancas internas se conservan.
Los originales miden unos 150 px, suficiente para el tamaño en que se muestran
(48 a 64 px de alto). Si algún día quieres mostrarlos más grandes, consigue
archivos oficiales de mayor resolución y reemplázalos con el mismo nombre.

## 5. Dónde están las capturas

| Archivo | Sección |
|---|---|
| `assets/img/captura-inicio.png` | Inicio (teléfono principal) y Vista previa |
| `assets/img/captura-bienvenida.png` | Vista previa · "Pantalla de bienvenida" |
| `assets/img/captura-perfil.png` | Vista previa · "Perfil" |
| `assets/fuente/portada-original.png` | Captura original de la portada, sin cambios |

En las capturas solo se recortaron las barras de Android (hora y botones). En la
de bienvenida también se recortó la franja de logotipos, porque ahora aparecen
arriba de la página. Para cambiar una captura, reemplaza el archivo con el mismo nombre.

## 6. Dónde está el APK

- Archivo: `assets/apk/linux-learn.apk` (77 MB).
- Es una copia **sin modificar** del `app-release.apk` generado con Flutter; solo
  cambió el nombre.
- Datos del APK: versión **1.0.0**, paquete `com.example.linux_app`, requiere
  **Android 7.0 o superior**.
- Huella SHA-256 para comprobar que es el mismo archivo:
  `0b5dd3f3bb63ad5816c55359d6cb2c037cc423394b18509cb7e0e46776d365d0`

El botón de la página **no** descarga este archivo local: descarga la copia que
subirás a GitHub Releases (secciones 10 y 11).

---

## 7. Crear un repositorio público en GitHub

1. Entra a <https://github.com> y crea una cuenta (**Sign up**) o inicia sesión.
   Tu **nombre de usuario** aparece en la dirección de tu perfil:
   `https://github.com/TU-USUARIO`. Lo necesitarás en la sección 12.
2. Arriba a la derecha pulsa **+** → **New repository**.
3. En **Repository name** escribe: `linux-learn-web`
   (si eliges otro nombre, anótalo: también se usa en la sección 12).
4. Marca **Public**. GitHub Pages gratis requiere repositorio público.
5. No marques ninguna casilla de "Initialize this repository".
6. Pulsa **Create repository**.

## 8. Subir los archivos de la página

GitHub no permite subir desde el navegador archivos de más de 25 MB, y el APK pesa
77 MB. Además, el APK va en Releases, no en el repositorio. Por eso:

1. **Antes de subir**, saca temporalmente `linux-learn.apk` de la carpeta
   `assets/apk/` (por ejemplo, muévelo al Escritorio).
2. En la página de tu repositorio vacío, pulsa el enlace
   **uploading an existing file**
   (o **Add file** → **Upload files**).
3. Abre la carpeta `linux-learn-web` en tu computadora, selecciona **todo lo que
   hay dentro** (`index.html`, `LEEME.md`, `.gitignore`, `css`, `js`, `assets`) y
   arrástralo a la página de GitHub.
   - Arrastra el **contenido**, no la carpeta `linux-learn-web` completa:
     `index.html` debe quedar en la raíz del repositorio.
   - En Mac, `.gitignore` está oculto (pulsa `Cmd + Shift + .` para verlo). Si no se
     sube, no pasa nada: solo sirve si después usas Git o GitHub Desktop.
4. Espera a que terminen de cargar todos los archivos.
5. Abajo, en **Commit changes**, pulsa el botón verde **Commit changes**.
6. Regresa `linux-learn.apk` a `assets/apk/` para tenerlo a mano.

Comprueba que en el repositorio veas `index.html`, `css`, `js` y `assets` en la
lista principal.

> La página publica los nombres y matrículas de los integrantes. Confirma con el
> equipo que todos están de acuerdo antes de hacerla pública.

## 9. Activar GitHub Pages

1. En tu repositorio, pulsa **Settings** (pestaña con un engrane).
2. En el menú izquierdo, dentro de "Code and automation", pulsa **Pages**.
3. En **Build and deployment** → **Source**, elige **Deploy from a branch**.
4. En **Branch** elige `main` y la carpeta `/ (root)`. Pulsa **Save**.
5. Espera de 1 a 3 minutos y recarga la página de Settings → Pages.
   Aparecerá: **Your site is live at** `https://TU-USUARIO.github.io/linux-learn-web/`

Esa es la dirección pública de tu página.

## 10. Crear una versión en GitHub Releases

1. Ve a la página principal del repositorio.
2. En la columna derecha, en **Releases**, pulsa **Create a new release**
   (o entra a `https://github.com/TU-USUARIO/linux-learn-web/releases/new`).
3. Pulsa **Choose a tag**, escribe `v1.0.0` y elige
   **Create new tag: v1.0.0 on publish**.
4. En **Release title** escribe: `LINUX Learn 1.0.0`.
5. En la descripción puedes poner, por ejemplo:
   "Primera versión de LINUX Learn. Requiere Android 7.0 o superior."

## 11. Adjuntar `linux-learn.apk` y publicar la versión

1. En la misma pantalla, busca el recuadro
   **Attach binaries by dropping them here or selecting them**.
2. Arrastra ahí `assets/apk/linux-learn.apk` (o haz clic y selecciónalo).
   Espera a que la barra de carga termine (77 MB).
3. Revisa que el archivo adjunto se llame **exactamente** `linux-learn.apk`.
4. Deja **sin marcar** "Set as a pre-release" y deja marcada
   "Set as the latest release". El enlace del botón usa la versión *latest*, que
   no incluye borradores ni pre-releases.
5. Pulsa **Publish release**.

## 12. Configurar la dirección definitiva del botón de descarga

En `index.html`, el botón **Descargar APK** tiene esta dirección de ejemplo:

```
https://github.com/TU-USUARIO/linux-learn-web/releases/latest/download/linux-learn.apk
```

Hay que cambiar dos datos:

- `TU-USUARIO` → tu nombre de usuario de GitHub.
- `linux-learn-web` → el nombre de tu repositorio, **solo** si usaste otro.

El final `/releases/latest/download/linux-learn.apk` **no se cambia**.

Cómo hacerlo desde GitHub:

1. En tu repositorio, abre `index.html`.
2. Pulsa el ícono del lápiz (**Edit this file**).
3. Pulsa `Ctrl + F` (en Mac, `Cmd + F`) y busca `TU-USUARIO`.
   Está en el bloque marcado con `>>> CAMBIAR AQUÍ <<<`.
4. Reemplaza `TU-USUARIO` por tu usuario. Por ejemplo, si tu usuario fuera
   `mi-usuario`, la línea quedaría:
   `href="https://github.com/mi-usuario/linux-learn-web/releases/latest/download/linux-learn.apk"`
5. Pulsa **Commit changes…** y luego **Commit changes**.
6. Espera 1 o 2 minutos a que GitHub Pages actualice la página.

Si también quieres tener la versión correcta en tu copia local, haz el mismo
cambio en tu `index.html` con un editor como VS Code o el Bloc de notas.

## 13. Comprobar que una persona externa puede entrar y descargar el APK

1. Abre una **ventana de incógnito** (`Ctrl + Shift + N` en Chrome) para entrar
   como alguien sin sesión de GitHub.
2. Entra a `https://TU-USUARIO.github.io/linux-learn-web/`.
3. Revisa que se vean los logotipos, las capturas y los integrantes.
4. Pulsa **Descargar APK**. Debe empezar a descargarse `linux-learn.apk` (77 MB)
   y **no** debe aparecer el aviso azul bajo el botón.
5. Repite la prueba en un celular Android usando datos móviles, instala la app y
   ábrela. Android puede avisar que el archivo viene de fuera de Google Play; es
   normal en apps que se instalan con APK.

Si el botón da error 404:

- Revisa que la versión esté **publicada** (no como borrador ni pre-release).
- Revisa que el archivo adjunto se llame exactamente `linux-learn.apk`.
- Revisa que el usuario y el nombre del repositorio en el enlace estén bien escritos.
- Recarga la página con `Ctrl + F5`, por si el navegador guardó la versión anterior.

## 14. Actualizar la página cuando haya una nueva versión de la app

1. En el proyecto de Flutter, sube la versión en `pubspec.yaml`. Por ejemplo, de
   `version: 1.0.0+1` a `version: 1.1.0+2`. El número después del `+` debe
   aumentar siempre, o Android no aceptará la actualización.
2. Genera el APK con `flutter build apk --release`.
   El archivo queda en `build/app/outputs/flutter-apk/app-release.apk`.
3. Renómbralo a `linux-learn.apk`.
4. Crea una nueva versión en Releases (secciones 10 y 11) con la etiqueta nueva,
   por ejemplo `v1.1.0`, y adjunta el nuevo `linux-learn.apk`.
5. **El botón no se modifica**: siempre descarga la versión más reciente.
6. En `index.html`, actualiza los datos bajo el botón (busca `download-meta`):
   **Versión** y **Tamaño**.

> Para que la nueva versión se instale encima de la anterior, genera el APK en la
> misma computadora o con la misma firma. Si Android dice que la app "entra en
> conflicto con un paquete existente", desinstala la versión anterior e instala la nueva.

---

## Anexo · Diseño responsivo

La página se adapta sola con medidas fluidas (`clamp()`, `min()`, `%`) y cuatro
rangos de media queries, al final de `css/styles.css`:

| Ancho | Distribución |
|---|---|
| Más de 1024 px | Computadora: hero en 2 columnas, 4 características por fila, 3 capturas, integrantes en 4 columnas |
| 901 a 1024 px | Laptop pequeña: características en 2 columnas, integrantes en 3 |
| 601 a 900 px | Tableta: menú hamburguesa, hero en 1 columna, integrantes en 2 columnas |
| 600 px o menos | Celular: todo en 1 columna; la franja muestra "UANL · FIME" entre los logotipos |

Los logotipos conservan su posición (UANL a la izquierda y FIME a la derecha) en
todos los tamaños. Para probarlo, abre la página, pulsa F12 y activa el modo de
dispositivo (`Ctrl + Shift + M`).
