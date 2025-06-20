import numpy as np
from sklearn.linear_model import LogisticRegression

# Dummy training data: [is_recyclable, is_organic, energy_usage]
X_train = np.array([
    [1, 1, 0.1],  # eco-friendly
    [1, 0, 0.3],  # somewhat eco-friendly
    [0, 1, 0.5],  # less eco-friendly
    [0, 0, 0.9],  # not eco-friendly
])
y_train = np.array([1, 1, 0, 0])  # 1 = eco-friendly, 0 = not

model = LogisticRegression()
model.fit(X_train, y_train)

def predict_eco_friendly(is_recyclable: int, is_organic: int, energy_usage: float) -> float:
    """
    Predicts the probability that a product is eco-friendly.
    Args:
        is_recyclable (int): 1 if recyclable, 0 otherwise
        is_organic (int): 1 if organic, 0 otherwise
        energy_usage (float): normalized energy usage (0-1)
    Returns:
        float: probability (0-1) of being eco-friendly
    """
    features = np.array([[is_recyclable, is_organic, energy_usage]])
    prob = model.predict_proba(features)[0][1]
    return prob
