#!/bin/bash

# CRUD API Testing Script for Products

API_URL="http://localhost:3000/api"

echo "========================================="
echo "  Product CRUD API Test"
echo "========================================="

# Test health check
echo -e "\n1. Testing Health Check..."
curl -s http://localhost:3000/health | jq .

# Test GET all products
echo -e "\n2. Getting all products..."
curl -s "$API_URL/products" | jq .

# Test GET product by ID
echo -e "\n3. Getting product with ID 1..."
curl -s "$API_URL/products/1" | jq .

# Test POST (Create)
echo -e "\n4. Creating a new product..."
NEW_PRODUCT=$(curl -s -X POST "$API_URL/products" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Monitor LG 27 polegadas",
    "description": "Monitor Full HD 27 polegadas",
    "price": 1200.00,
    "quantity": 12
  }')
echo "$NEW_PRODUCT" | jq .
NEW_ID=$(echo "$NEW_PRODUCT" | jq -r '.id')

# Test PUT (Update)
echo -e "\n5. Updating the created product (ID: $NEW_ID)..."
curl -s -X PUT "$API_URL/products/$NEW_ID" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Monitor LG 27 polegadas - Atualizado",
    "description": "Monitor Full HD 27 polegadas - Modelo 2024",
    "price": 1150.00,
    "quantity": 10
  }' | jq .

# Test DELETE
echo -e "\n6. Deleting the created product (ID: $NEW_ID)..."
curl -s -X DELETE "$API_URL/products/$NEW_ID" -w "\nStatus: %{http_code}\n"

# Test GET all products again
echo -e "\n7. Getting all products again..."
curl -s "$API_URL/products" | jq .

echo -e "\n========================================="
echo "  Tests completed!"
echo "========================================="
