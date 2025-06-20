# Eco-Friendliness Prediction API

## Endpoint

`POST /predict-eco`

## Request Body

```json
{
  "is_recyclable": 1,
  "is_organic": 0,
  "energy_usage": 0.3
}
```

- `is_recyclable`: 1 if the product is recyclable, 0 otherwise
- `is_organic`: 1 if the product is made from organic materials, 0 otherwise
- `energy_usage`: normalized energy usage (0 = low, 1 = high)

## Response

```json
{
  "eco_friendly_score": 0.82
}
```

- `eco_friendly_score`: Probability (0-1) that the product is eco-friendly

## Example (using curl)

```sh
curl -X POST http://localhost:5000/predict-eco \
  -H "Content-Type: application/json" \
  -d '{"is_recyclable":1,"is_organic":1,"energy_usage":0.2}'
```
