---
layout: ../../layouts/MainLayout.astro
setup: |
  import MainColors from '../../components/MainColors.vue';
---

# Carpeta Digital

La **Carpeta Digital** en Firmeasy permite organizar y gestionar documentos digitales. Para crear una carpeta y generar un enlace de acceso mediante la API, sigue estos pasos:

1. **Creación de Carpeta Digital**:
   - **URL**: `https://app.firmeasy.legal/api/v1/digital/carpeta`
   - **Autorización**: Necesitas un "Token al portador" (Bearer Token) de **Firmeasy API Production**.
   - **Encabezado**: Define el tipo de contenido como `application/json`.
   - **Cuerpo de la Solicitud**: Incluye el nombre de la carpeta, usando el siguiente formato en JSON:
     ```json
     {
         "nombre": "Carpeta Nueva Proveniente del API"
     }
     ```
   - **Ejemplo de Solicitud CURL**: Puedes hacer la solicitud con este comando en la terminal:
     ```bash
     curl --location 'https://app.firmeasy.legal/api/v1/digital/carpeta' \
     --header 'Content-Type: application/json' \
     --data '{
         "nombre": "Carpeta Nueva Proveniente del API"
     }'
     ```
   - **Nota**: Esta solicitud no devuelve una respuesta en el cuerpo.

2. **Generación de Enlace para Carpeta Digital**:
   - **URL**: `https://app.firmeasy.legal/api/v1/digital/carpeta/enlace`
   - **Autorización**: Usa el mismo "Token al portador".
   - **Encabezado**: Especifica `application/json` como tipo de contenido.
   - **Cuerpo de la Solicitud**: Incluye el `carpeta_id` de la carpeta creada y la duración del enlace en horas (`tiempo`), como en este ejemplo:
     ```json
     {
         "carpeta_id": "59288b30-0305-40c6-90f4-d6da2d9750ce",
         "tiempo": 5
     }
     ```
   - **Ejemplo de Solicitud CURL**:
     ```bash
     curl --location 'https://app.firmeasy.legal/api/v1/digital/carpeta/enlace' \
     --header 'Content-Type: application/json' \
     --data '{
         "carpeta_id": "59288b30-0305-40c6-90f4-d6da2d9750ce",
         "tiempo": 5
     }'
     ```
   - **Nota**: Esta solicitud tampoco devuelve una respuesta en el cuerpo.

3. **Consideraciones adicionales**:
   - **Seguridad**: Asegúrate de proteger los tokens de autorización.
   - **Organización**: La Carpeta Digital y el Enlace ayudan a distribuir documentos de manera rápida y segura.

Para más detalles, consulta la documentación completa en la [API de Firmeasy](#).
