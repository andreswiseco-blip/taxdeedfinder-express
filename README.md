# taxdeedfinder-express
MVP de TaxDeedFinder — Express.js, frontend amigable, barra de riesgo. Uso personal.

Rápido:

- Ejecutar localmente:

```bash
# con node
PORT=3000 node server.js

# o usando npm start después de instalar dependencias
npm install
npm start
```

Rutas principales:

- `GET /` — información de servicio
- `GET /search-tax-deed?parcel_id=...` — devuelve mock de riesgo; la lógica actual: si `parcel_id` contiene `C-18` retorna `risk_score: 40`.

Notas:

- `server.js` es el punto de entrada real. `package.json` fue corregido para apuntar a `server.js` y añadir `start`.
- No hay base de datos ni integraciones externas en este MVP.

Comandos útiles durante desarrollo:

- Instalar dependencias:

```bash
npm install
```

- Ejecutar en desarrollo con recarga automática (requiere `nodemon` en devDependencies):

```bash
npm run dev
```

- Comprobar endpoints (arranque el servidor primero):

```bash
node test/check_endpoints.js
# o con BASE_URL si el servidor corre en otro puerto/host
BASE_URL=http://localhost:3001 node test/check_endpoints.js
```
