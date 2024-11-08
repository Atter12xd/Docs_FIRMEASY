---
layout: ../../layouts/MainLayout.astro
setup: |
  import MainColors from '../../components/MainColors.vue';
---

# Digital Folder

The **Digital Folder** feature in Firmeasy allows you to organize and manage digital documents efficiently. To create a folder and generate an access link using the API, follow these steps:

## Create New Digital Folder

This endpoint is used to create a new digital folder.

**URL**: `https://app.firmeasy.legal/api/v1/digital/carpeta`

**Authorization**: Requires a **Bearer Token** from **Firmeasy API Production**.

**Header**: Set the content type to `application/json`.

**Request Body**: Include the folder name in JSON format as shown below:

```json
{
    "nombre": "New Folder from API"
}
curl --location 'https://app.firmeasy.legal/api/v1/digital/carpeta' \
--header 'Content-Type: application/json' \
--data '{
    "nombre": "New Folder from API"
}'


{
    "success": true,
    "carpeta_id": "b39266a1-2f13-5980-85c4-14dea84a4d6e",
    "message": "The folder was successfully created"
}

{
    "carpeta_id": "59288b30-0305-40c6-90f4-d6da2d9750ce",
    "tiempo": 5
}

curl --location 'https://app.firmeasy.legal/api/v1/digital/carpeta/enlace' \
--header 'Content-Type: application/json' \
--data '{
    "carpeta_id": "59288b30-0305-40c6-90f4-d6da2d9750ce",
    "tiempo": 5
}'
