## Objetivo
Proveer instrucciones concisas y accionables para agentes de IA que trabajen en este repositorio "taxdeedfinder-express" — un MVP Express.js con endpoints mock y sin base de datos ni pipelines complejos.

## Big picture (arquitectura)
- Código principal: `server.js` — aplicación Express mínima que expone rutas públicas.
- No hay capas separadas ni base de datos en el repo actual; la lógica está inline en `server.js`.
- Dependencias: `express` (ver `package.json`).

Ejemplo práctico: `server.js` define `GET /` y `GET /search-tax-deed` — la segunda espera `?parcel_id=` y aplica una regla simple (si incluye `C-18` devuelve `risk_score: 40`).

## Cómo ejecutar / flujo de desarrollo
- Ejecutar localmente: `node server.js` (respeta `PORT` env). Ejemplo:
  - `PORT=3000 node server.js`
- No hay scripts npm para start/build; los agentes pueden añadir un script `start` en `package.json` si necesario.

## Convenciones del proyecto detectadas
- Archivo principal/entrada real: `server.js`. Nota: `package.json` declara `main: "index.js"` pero no existe — tener cuidado y preferir `server.js`.
- Respuesta JSON simple y mock: las rutas devuelven objetos JSON (no HTML). Mantener ese estilo para nuevas rutas.
- Validación mínima: `search-tax-deed` valida sólo existencia de `parcel_id` y usa substring matching para la lógica de riesgo.

## Patrones útiles para cambios (ejemplos concretos)
- Añadir una nueva ruta: modificar `server.js` y seguir estilo existente (router directo):
  - ejemplo: `app.get('/new-route', (req,res)=> res.json({ok:true}))`
- Extraer lógica a módulos: crear `routes/` o `lib/` y `require()` desde `server.js` si la funcionalidad crece.
- Para pruebas rápidas, el agente puede simular requests con `curl` o Node `fetch` y validar respuestas JSON.

## Integraciones y puntos externos
- No hay integraciones externas detectadas (no hay archivos de configuración para bases de datos, API keys, CI o servicios). Sólo `express` en `dependencies`.
- Variables de entorno usadas: `PORT`.

## Recomendaciones específicas para el agente
- Evita suposiciones: confirma cambios ejecutando `node server.js` y consultando endpoints antes de abrir PR.
- Cuando modifiques `package.json`, corrige `main` si agregas `index.js` o actualiza a `server.js` para evitar confusión.
- Mantén respuestas JSON coherentes y no añadas frameworks innecesarios sin permiso del mantenedor.

## Qué buscar en PRs o tareas
- Consistencia con estilo: rutas retornan JSON, mensajes en español/emoji están presentes (mantener tono MVP).
- No romper el arranque: `node server.js` debe levantarse sin errores.
- Documentar cualquier nueva dependencia en `package.json` y añadir un script `start` si procede.

## Archivos clave que referenciar
- `server.js` — punto de entrada, define rutas y lógica mock.
- `package.json` — dependencias (`express`) y scripts (vacío salvo `test` stub).
- `README.md` — descripción corta del proyecto (MVP, uso personal).

Si algo aquí está incompleto o quieres que detalle convenciones adicionales (estilo de commit, PR, testing), dime qué sección ampliar y lo actualizo.
