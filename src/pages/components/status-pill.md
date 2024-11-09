---
title: "Status Pill"
layout: "../../layouts/MainLayout.astro"
setup: |
  import MainStatusPill from '../../components/MainStatusPill.vue'
---

## POST - Digital File Link Generation

`https://app.firmeasy.legal/api/v1/digital/archivo/enlace`

This endpoint generates a link for a specific digital file on the Firmeasy platform using the file ID. Authentication with a Bearer token is required.

---

### AUTHORIZATION

- **Bearer Token**: The request requires a Bearer token for authentication.
- This token must be obtained from the `Firmeasy API Production` collection.

---

### HEADERS

- **Content-Type**: `application/json`

---

### Request Body

The request must include the following parameters in the body, in JSON format:

```json
{
  "archivo_id": "ad7e4811-bc1a-4b7f-a5c5-52aa144a3a86",
  "tiempo": 9
}
```

## Example Request
```json
curl --location 'https://app.firmeasy.legal/api/v1/digital/archivo/enlace' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <your_token_here>' \
--data '{
    "archivo_id": "ad7e4811-bc1a-4b7f-a5c5-52aa144a3a86",
    "tiempo": 9
}'