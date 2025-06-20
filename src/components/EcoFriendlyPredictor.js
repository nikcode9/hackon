import React, { useState } from 'react';

function EcoFriendlyPredictor() {
  const [form, setForm] = useState({
    is_recyclable: 0,
    is_organic: 0,
    energy_usage: 0.5,
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
    try {
      const res = await fetch('/predict-eco', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          is_recyclable: form.is_recyclable,
          is_organic: form.is_organic,
          energy_usage: parseFloat(form.energy_usage),
        }),
      });
      const data = await res.json();
      setScore(data.eco_friendly_score);
    } catch (err) {
      setScore('Error');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Eco-Friendliness Predictor</h2>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </form>
      {score !== null && (
        <div>
          <h3>
            Eco-Friendly Score: {score}
          </h3>
        </div>
      )}
    </div>
  );
}

export default EcoFriendlyPredictor;
