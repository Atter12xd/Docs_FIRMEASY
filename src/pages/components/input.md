---
title: Input
layout: ../../layouts/MainLayout.astro
setup: |
  import MainInput from '../../components/MainInput.vue'
---

## POST - Digital File Download

`https://app.firmeasy.legal/api/v1/digital/archivo/download`

This endpoint allows you to download a specific digital file on the Firmeasy platform using the file ID. Authentication with a Bearer token is required.

---

### AUTHORIZATION

- **Bearer Token**: The request requires a Bearer token for authentication.
- This token must be obtained from the `Firmeasy API Production` collection.

---

### HEADERS

- **Content-Type**: `application/json`

---

### Request Body

The request must include the following parameter in the body, in JSON format:

```json
{
  "archivo_id": "1eebd53e-a10e-4ce8-a714-31ef4c8fabc0"
}


### Example Request
```json
curl --location 'https://app.firmeasy.legal/api/v1/digital/archivo/download' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <tu_token_aqui>' \
--data '{
    "archivo_id": "1eebd53e-a10e-4ce8-a714-31ef4c8fabc0"
}'
```