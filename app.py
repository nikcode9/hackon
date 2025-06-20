from flask import Flask, request, jsonify
from ml.eco_friendly_predictor import predict_eco_friendly

app = Flask(__name__)

@app.route('/predict-eco', methods=['POST'])
def predict_eco():
    """
    Expects JSON:
    {
        "is_recyclable": 1,
        "is_organic": 0,
        "energy_usage": 0.3
    }
    Returns:
        { "eco_friendly_score": 0.82 }
    """
    data = request.get_json()
    is_recyclable = int(data.get('is_recyclable', 0))
    is_organic = int(data.get('is_organic', 0))
    energy_usage = float(data.get('energy_usage', 1.0))
    score = predict_eco_friendly(is_recyclable, is_organic, energy_usage)
    return jsonify({"eco_friendly_score": round(score, 2)})