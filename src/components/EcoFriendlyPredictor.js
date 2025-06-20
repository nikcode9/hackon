import React, { useState } from 'react';

function EcoFriendlyPredictor({ onClose }) {
  const [form, setForm] = useState({
    is_recyclable: 0,
    is_organic: 0,
    energy_usage: 0.5,
    biodegradable: 0,
    carbon_footprint: 0.5,
    water_usage: 0.5,
  });
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setScore(null);
    // Ensure all number fields are valid numbers
    const safeNumber = v => v === "" || isNaN(Number(v)) ? 0 : Number(v);
    try {
      const res = await fetch('/predict-eco', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          is_recyclable: form.is_recyclable,
          is_organic: form.is_organic,
          energy_usage: safeNumber(form.energy_usage),
          biodegradable: form.biodegradable,
          carbon_footprint: safeNumber(form.carbon_footprint),
          water_usage: safeNumber(form.water_usage),
        }),
      });
      const data = await res.json();
      console.log("API response:", data);
      if (typeof data.eco_friendly_score === 'number') {
        setScore(data.eco_friendly_score);
      } else {
        setScore(data.error ? `Error: ${data.error}` : 'Error');
      }
    } catch (err) {
      console.error("Frontend error:", err);
      setScore('Error');
    }
    setLoading(false);
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.4)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "#fff",
        padding: 24,
        borderRadius: 8,
        minWidth: 320,
        maxWidth: 400,
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "transparent",
            border: "none",
            fontSize: 20,
            cursor: "pointer"
          }}
          aria-label="Close"
        >×</button>
        <h2>EarthScore Predictor</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Recyclable:
            <input
              type="checkbox"
              name="is_recyclable"
              checked={!!form.is_recyclable}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Organic:
            <input
              type="checkbox"
              name="is_organic"
              checked={!!form.is_organic}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Biodegradable:
            <input
              type="checkbox"
              name="biodegradable"
              checked={!!form.biodegradable}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Energy Usage (0 = low, 1 = high):
            <input
              type="number"
              name="energy_usage"
              min="0"
              max="1"
              step="0.01"
              value={form.energy_usage}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Carbon Footprint (0 = low, 1 = high):
            <input
              type="number"
              name="carbon_footprint"
              min="0"
              max="1"
              step="0.01"
              value={form.carbon_footprint}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Water Usage (0 = low, 1 = high):
            <input
              type="number"
              name="water_usage"
              min="0"
              max="1"
              step="0.01"
              value={form.water_usage}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" disabled={loading} style={{marginTop: 10}}>
            {loading ? 'Predicting...' : 'Show EcoFriendly Score'}
          </button>
        </form>
        {score !== null && (
          <div style={{marginTop: 16}}>
            <h3>
              Eco-Friendly Score: {score === 'Error' ? 'Error' : `${score}%`}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default EcoFriendlyPredictor;
