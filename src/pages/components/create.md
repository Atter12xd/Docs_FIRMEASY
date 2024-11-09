---
title: Input
layout: ../../layouts/MainLayout.astro
setup: |
  import MainInput from '../../components/MainInput.vue'
---

## POST - Create Digital Link to Firmador

`https://app.firmeasy.legal/api/v1/digital/createLinktoFirmador`

This endpoint is used to create a digital link for signing a document, specifying the signature position, page, company details, and file. Authentication with a Bearer token is required.

---

### AUTHORIZATION

- **Bearer Token**: This request requires a Bearer token for authentication.
- The token must be obtained from the `Firmeasy API Production` collection.

---

### Request Body (JSON)

The request body should contain the following parameters in JSON format:

```json
{
  "signature_pos_x": 107,
  "signature_pos_y": 579,
  "signature_page": 1,
  "webhook_link": "http://localhost:3001/api/electronica",
  "token_authorization": "2e55dd4b-74be-4568-a43f-80e01e88b63a",
  "company_name": "Stamping.io",
  "company_url": "https://stamping.io/es/",
  "company_logo_url": "https://stamping.io/img/favicon.ico",
  "token_file": "6bf701c1-78a0-4ef8-936d-0d42f487ad6e",
  "file": "JVBERi0xLjQKJcKz... (truncated base64 content)"
}