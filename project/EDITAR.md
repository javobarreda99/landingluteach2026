# Editar la landing de Luteach en VS Code

Esta carpeta es el sistema de diseño + la landing de Luteach, lista para editar.

## Cómo abrir y previsualizar

La landing (`Landing.html`) carga sus componentes desde archivos `.jsx` separados y
los compila en el navegador con Babel. Por eso **no funciona haciendo doble clic**
(el navegador bloquea la carga de archivos por `file://`). Necesitas un servidor local
— es muy fácil:

1. Abre esta carpeta en **VS Code** (`Archivo → Abrir carpeta…`).
2. Instala la extensión **Live Server** (de Ritwick Dey) desde el panel de extensiones.
3. Haz clic derecho en **`Landing.html`** → **"Open with Live Server"**.
4. Se abre en tu navegador. Cada vez que guardes un archivo, se recarga solo. ✨

> Alternativa sin extensión: en la terminal de VS Code, dentro de esta carpeta, corre
> `python3 -m http.server 5500` y abre `http://localhost:5500/Landing.html`.

## Qué editar (la landing)

| Archivo | Qué contiene |
|---|---|
| `Landing.html` | Arma la página y define el orden de las secciones |
| `landing/Hero.jsx` | Navbar, Hero (panel naranja), Universidades, Beneficios |
| `landing/Impact.jsx` | Desafíos, El Puente, Casos de impacto, ODS |
| `landing/Sections.jsx` | Cómo funciona, Cursos, Opiniones, Audiencias, Aliados, CTA, Footer |
| `colors_and_type.css` | **Todos los colores y tipografías** (variables CSS) |
| `ui_kits/kit.css` | Estilos de botones, badges, cards, inputs |
| `assets/` | Logos e íconos de cursos |

### Ejemplos rápidos
- **Cambiar un texto:** búscalo en `Hero.jsx` o `Sections.jsx` y edítalo directo.
- **Cambiar un color:** edita la variable en `colors_and_type.css` (ej. `--orange-500`).
  Se actualiza en toda la landing y el sistema.
- **Cambiar las cifras del hero/impacto:** están en arrays al inicio de cada componente.
- **Agregar fotos/logos:** arrastra imágenes a los espacios punteados (`<image-slot>`)
  directo en el navegador; quedan guardadas.

## El resto del sistema
- `README.md` — guía de marca completa (voz, colores, foundations).
- `preview/` — tarjetas del sistema de diseño.
- `ui_kits/marketing-site/` y `ui_kits/platform/` — kits de UI interactivos.
- `SKILL.md` — para usar este kit como skill en Claude Code.
