const express = require('express');
const Reserva = require('../models/reserva.js')

const router = express.Router();

// Creating posts
router.post("/", async (req, res) => {
  try {
    const reserva = new Reserva({
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      vehiculo: req.body.vehiculo,
      año: req.body.año,
      fecha: req.body.fecha,
      hora: req.body.hora,
      asientosReservados: req.body.asientosReservados || []
    });
    await reserva.save();

    res.send(reserva);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.send(reservas);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a post by id
router.put("/:id", async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(
      req.params.id,
      {  
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        vehiculo: req.body.vehiculo,
        año: req.body.año,
        fecha: req.body.fecha,
        hora: req.body.hora,
        asientosReservados: req.body.asientosReservados || []
      
      },
      { new: true }
    );
    if (!reserva) return res.status(404).send("Post not found");
    res.send(reserva);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single post by id
router.get("/:id", async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) return res.status(404).send("Post not found");
    res.send(reserva);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Deleting a post by id
router.delete("/:id", async (req, res) => {
  try {
    const reserva = await Reserva.findOneAndDelete({_id: req.params.id});
    if (!reserva) return res.status(404).send("Post not found");
    res.send(reserva);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
