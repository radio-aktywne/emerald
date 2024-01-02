---
slug: /configuration
title: Configuration
---

## Environment variables

You can configure the database at runtime using various environment variables:

- `EMIARCHIVE_HOST` -
  host on which the database will be listening
  (default: `0.0.0.0`)
- `EMIARCHIVE_PORT` -
  port on which the database will be listening
  (default: `30000`)
- `EMIARCHIVE_WEB_PORT` -
  port on which the web interface will be available
  (default: `30001`)
- `EMIARCHIVE_WEB_PUBLIC_URL` -
  public URL of the web interface
  (default: `http://localhost:30001`)
- `EMIARCHIVE_ADMIN_USER` -
  username for the admin user
  (default: `admin`)
- `EMIARCHIVE_ADMIN_PASSWORD` -
  password for the admin user
  (default: `password`)
- `EMIARCHIVE_READONLY_USER` -
  username for the readonly user
  (default: `readonly`)
- `EMIARCHIVE_READONLY_PASSWORD` -
  password for the readonly user
  (default: `password`)
- `EMIARCHIVE_READWRITE_USER` -
  username for the readwrite user
  (default: `readwrite`)
- `EMIARCHIVE_READWRITE_PASSWORD` -
  password for the readwrite user
  (default: `password`)
- `EMIARCHIVE_LIVE_BUCKET` -
  name of the bucket where live recordings are automatically uploaded
  (default: `live`)
- `EMIARCHIVE_PRERECORDED_BUCKET` -
  name of the bucket where prerecorded emissions should be uploaded
  (default: `prerecorded`)
