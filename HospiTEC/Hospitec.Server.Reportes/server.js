const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5300;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
//const uri = "mongodb+srv://3derv:Mnop9876.@clusterreportes.9cz1hei.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://3derv:Mnop9876.@clusterreportes.9cz1hei.mongodb.net/?retryWrites=true&w=majority&appName=ClusterReportes"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Reporte Schema
const reporteSchema = new mongoose.Schema({
  reporte: String
});

const reporte = mongoose.model('reporte', reporteSchema);

// Routes
app.get('/api/reportes', async (req, res) => {
  try {
    const reportes = await reporte.find();
    res.json(reportes);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/reportes', async (req, res) => {
  try {
    const nuevoReporte = new reporte(req.body);
    await nuevoReporte.save();
    res.status(201).send(nuevoReporte);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
