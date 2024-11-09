---
title: "Buttons"
layout: "../../layouts/MainLayout.astro"
setup: |
  import MainButton from '../../components/MainButton.vue'
---

## *POST - Digital File Upload*

`https://app.firmeasy.legal/api/v1/digital/archivo`

The `POST /v1/digital/archivo` endpoint is used to upload a digital file to a specific folder. The request should be sent with form-data containing `carpeta_id` (folder ID), `nombre` (file name), and `file` (file in base64 format).

---

## Request Body

- **carpeta_id** (text): The ID of the folder where the file will be uploaded.
- **nombre** (text): The name of the file to be uploaded.
- **file** (text): The digital file to upload in base64 format.

---

## Response

The response to this request will be in JSON format with the following properties:

- **success** (boolean): Indicates whether the file upload was successful.
- **archivo_id**: The ID of the uploaded file.
- **size**: The size of the uploaded file.
- **message**: A message indicating the result of the file upload.

---

## JSON Schema

```json
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "archivo_id": {
      "type": "string"
    },
    "size": {
      "type": "string"
    },
    "message": {
      "type": "string"
    }
  }
}

```
## Example Request
```json
curl --location 'https://app.firmeasy.legal/api/v1/digital/archivo' \
--header 'Content-Type: multipart/form-data' \
--form 'carpeta_id="59208b30-0305-4c06-90f4-d6da2d9750ce"' \
--form 'nombre="Sample File"' \
--form 'file="JVBERi0xLjMKJ... (base64 file content)"'
```
