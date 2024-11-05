---
title: Introducción a Firmeasy
layout: ../../layouts/MainLayout.astro
---

# Información General

**Firmeasy** es una plataforma de firma electrónica de documentos que garantiza la autenticidad, integridad y no repudio de cada transacción. Todas las firmas realizadas a través de Firmeasy son legalmente válidas en las jurisdicciones correspondientes, cumpliendo con las normativas vigentes en Perú. El objetivo de Firmeasy es democratizar el acceso a la firma digital, facilitando soluciones para entidades públicas y privadas, profesionales y personas naturales.

---

## Fundamentos de la implementación de API

- **Compatibilidad REST**: Firmeasy utiliza una API REST que permite el uso de métodos **GET** y **POST**. Todos los datos enviados y recibidos están en formato JSON.
  
- **Cadenas Nulas**: La API de Firmeasy no acepta cadenas definidas como nulas. Si un campo está definido como una cadena vacía `("")`, será aceptado. En caso de que no sea necesario, omita el campo en su solicitud.
  
- **Valores Booleanos**: Asegúrese de enviar los valores booleanos correctos (`true` o `false`) y no como cadenas (`"true"` o `"false"`), para evitar errores en la validación.

---

### Gestión del Tiempo

La API de Firmeasy trabaja en la zona horaria **UTC+0**. Para evitar discrepancias en la interpretación de fechas y horas, se recomienda usar el mismo estándar en sus integraciones.

---

### Nota

Si aún no se ha integrado con Firmeasy, le recomendamos comenzar con el entorno de pruebas (sandbox) para familiarizarse con el flujo de trabajo sin incurrir en costos adicionales. Para más detalles sobre la configuración, haga clic [aquí](#) para obtener más información.

