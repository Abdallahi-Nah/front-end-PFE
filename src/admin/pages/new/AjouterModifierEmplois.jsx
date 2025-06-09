import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { Save, Cancel } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import "./AjouterModifierEmplois.scss";

const AjouterModifierEmplois = () => {
  const { id } = useParams();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    jour: "",
    heureDebut: "",
    heureFin: "",
    matiere: "",
    enseignant: "",
    lieu: "",
    type: "",
    specialite: "",
    code: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    // Handle form submission here
  };

  return (
    <div className="ajouter-modifier-container">
      <Card className="form-card">
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            className="page-title"
            style={{ marginBottom: "20px" }}
          >
            {isEditing
              ? "Modifier l'emploi du temps"
              : "Créer un emploi du temps"}
          </Typography>

          <form onSubmit={handleSubmit} className="emploi-form">
            <Box className="form-row">
              <FormControl className="form-field">
                <InputLabel>Jour</InputLabel>
                <Select
                  value={formData.jour}
                  onChange={handleChange("jour")}
                  label="Jour"
                >
                  <MenuItem value="Lundi">Lundi</MenuItem>
                  <MenuItem value="Mardi">Mardi</MenuItem>
                  <MenuItem value="Mercredi">Mercredi</MenuItem>
                  <MenuItem value="Jeudi">Jeudi</MenuItem>
                  <MenuItem value="Vendredi">Vendredi</MenuItem>
                  <MenuItem value="Samedi">Samedi</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Heure de début"
                type="time"
                value={formData.heureDebut}
                onChange={handleChange("heureDebut")}
                className="form-field"
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="Heure de fin"
                type="time"
                value={formData.heureFin}
                onChange={handleChange("heureFin")}
                className="form-field"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box className="form-row">
              <TextField
                label="Matière"
                value={formData.matiere}
                onChange={handleChange("matiere")}
                className="form-field"
                fullWidth
              />
            </Box>

            <Box className="form-row">
              <TextField
                label="Enseignant"
                value={formData.enseignant}
                onChange={handleChange("enseignant")}
                className="form-field"
              />

              <TextField
                label="Lieu"
                value={formData.lieu}
                onChange={handleChange("lieu")}
                className="form-field"
              />

              <TextField
                label="Code"
                value={formData.code}
                onChange={handleChange("code")}
                className="form-field"
              />
            </Box>

            <Box className="form-row">
              <FormControl className="form-field">
                <InputLabel>Type</InputLabel>
                <Select
                  value={formData.type}
                  onChange={handleChange("type")}
                  label="Type"
                >
                  <MenuItem value="Cours">Cours</MenuItem>
                  <MenuItem value="TP">TP</MenuItem>
                  <MenuItem value="TD">TD</MenuItem>
                </Select>
              </FormControl>

              <FormControl className="form-field">
                <InputLabel>Spécialité</InputLabel>
                <Select
                  value={formData.specialite}
                  onChange={handleChange("specialite")}
                  label="Spécialité"
                >
                  <MenuItem value="Informatique">Informatique</MenuItem>
                  <MenuItem value="Mathématiques">Mathématiques</MenuItem>
                  <MenuItem value="Physique">Physique</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className="form-actions">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<Save />}
                className="save-btn"
              >
                {isEditing ? "Modifier" : "Créer"}
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="/emplois"
                startIcon={<Cancel />}
                className="cancel-btn"
                style={{backgroundColor: "brown", color: "#fff", borderColor: "brown"}}
              >
                Annuler
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AjouterModifierEmplois;