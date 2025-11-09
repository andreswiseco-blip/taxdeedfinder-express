const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    app: "TaxDeedFinder MVP",
    status: "✅ Express listo",
    routes: ["/", "/search-tax-deed"],
    message: "¡Todo funcionando desde cero!"
  });
});

app.get('/search-tax-deed', (req, res) => {
  const { parcel_id } = req.query;
  if (!parcel_id) {
    return res.status(400).json({ error: "Falta parcel_id" });
  }
  res.json({
    parcel_id,
    risk_score: parcel_id.includes("C-18") ? 40 : 70,
    risk_level: parcel_id.includes("C-18") ? "bajo" : "medio",
    mock_data: true
  });
});

// Only start server if this file is run directly. This allows tests to require the app without
// the server listening on a port.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor Express corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
