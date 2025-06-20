from flask import Flask, request, jsonify
from ml.eco_friendly_predictor import predict_eco_friendly

app = Flask(__name__)

@app.route('/predict-eco', methods=['POST'])
def predict_eco():
    try:
        data = request.get_json(force=True)
        is_recyclable = data.get('is_recyclable', 0)
        is_organic = data.get('is_organic', 0)
        energy_usage = data.get('energy_usage', 1.0)
        biodegradable = data.get('biodegradable', 0)
        carbon_footprint = data.get('carbon_footprint', 1.0)
        water_usage = data.get('water_usage', 1.0)
        score = predict_eco_friendly(
            is_recyclable, is_organic, energy_usage,
            biodegradable, carbon_footprint, water_usage
        )
        return jsonify({"eco_friendly_score": score})
    except Exception as e:
        print("API error:", e)
        return jsonify({"eco_friendly_score": "Error", "error": str(e)}), 500