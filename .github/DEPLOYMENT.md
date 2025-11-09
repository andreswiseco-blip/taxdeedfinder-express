# Despliegue automático — instrucciones y plantillas

Este documento describe cómo habilitar despliegue automático desde GitHub Actions para varios proveedores populares.
Las plantillas de workflow están incluidas como archivos `*.example.yml` para que las revises y actives cuando configures los secretos.

Proveedores cubiertos
- Render (recomendado)
- Heroku
- Railway

Cómo usar las plantillas
1. Revisa la plantilla correspondiente en `.github/workflows/*.example.yml`.
2. Añade los secrets necesarios en Settings → Secrets → Actions del repositorio (lista más abajo).
3. Renombra el archivo `*.example.yml` a `*.yml` para activarlo (o copia su contenido a un nuevo workflow).
4. Haz push a `main`; el workflow se ejecutará y desplegará tu aplicación.

Secrets requeridos

- Render
  - `RENDER_SERVICE_ID` — ID del servicio en Render (ej: srv-xxxxx)
  - `RENDER_API_KEY` — API key con permiso para crear deploys

- Heroku
  - `HEROKU_API_KEY` — tu api key personal (obtenible en la dashboard de Heroku)
  - `HEROKU_APP_NAME` — nombre de la app en Heroku

- Railway
  - `RAILWAY_TOKEN` — token de API (o usar la integración desde la UI de Railway)

Plantillas incluidas
- `.github/workflows/render-deploy.example.yml` — plantilla que construye la imagen (si no la tienes ya) y luego llama al endpoint de deploy de Render para iniciar un nuevo deploy.
- `.github/workflows/heroku-deploy.example.yml` — plantilla que construye y push/pulsa la imagen al registry de Heroku y solicita un release (requiere `HEROKU_API_KEY` y `HEROKU_APP_NAME`).
- `.github/workflows/railway-deploy.example.yml` — plantilla sugerida para Railway usando el Railway CLI. Preferible conectar la app desde la UI si quieres una integración más simple.

Notas de seguridad
- Nunca subas tus credenciales al repositorio. Usa `Settings -> Secrets` para almacenarlas de forma segura.
- Las plantillas usan `GITHUB_TOKEN` o tokens específicos para autenticación; revisa los permisos del token si algo falla.

Si quieres, puedo activar y ajustar la plantilla para el proveedor que elijas después de que agregues los secrets.
