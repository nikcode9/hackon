import numpy as np
from sklearn.linear_model import LogisticRegression

# Expanded dummy training data: [is_recyclable, is_organic, energy_usage, biodegradable, carbon_footprint, water_usage]
X_train = np.array([
    [1, 1, 0.1, 1, 0.1, 0.2],  # very eco-friendly
    [1, 0, 0.3, 1, 0.3, 0.4],  # eco-friendly
    [0, 1, 0.5, 0, 0.5, 0.6],  # less eco-friendly
    [0, 0, 0.9, 0, 0.9, 0.9],  # not eco-friendly
])
y_train = np.array([1, 1, 0, 0])  # 1 = eco-friendly, 0 = not

model = LogisticRegression()
model.fit(X_train, y_train)

def safe_int(val, default=0):
    try:
        return int(val)
    except Exception:
        return default

def safe_float(val, default=0.0):
    try:
        return float(val)
    except Exception:
        return default

def predict_eco_friendly(is_recyclable, is_organic, energy_usage,
                         biodegradable, carbon_footprint, water_usage):
    """
    Predicts the percentage probability that a product is eco-friendly.
    Args:
        is_recyclable (int): 1 if recyclable, 0 otherwise
        is_organic (int): 1 if organic, 0 otherwise
        energy_usage (float): normalized (0-1)
        biodegradable (int): 1 if biodegradable, 0 otherwise
        carbon_footprint (float): normalized (0-1, lower is better)
        water_usage (float): normalized (0-1, lower is better)
    Returns:
        float: percent (0-100) of being eco-friendly
    """
    try:
        # Debug: print received values
        print("Received:", is_recyclable, is_organic, energy_usage, biodegradable, carbon_footprint, water_usage)
        features = np.array([[
            safe_int(is_recyclable),
            safe_int(is_organic),
            safe_float(energy_usage),
            safe_int(biodegradable),
            safe_float(carbon_footprint),
            safe_float(water_usage)
        ]])
        prob = model.predict_proba(features)[0][1]
        return round(prob * 100, 2)
    except Exception as e:
        print("Prediction error:", e)
        return 0.0
