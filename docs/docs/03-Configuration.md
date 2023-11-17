---
slug: /configuration
title: Configuration
---

## Environment variables

You can configure the app at runtime using various environment variables:

- `EMIARCHIVE_HOST` -
  host on which the app will be listening
  (default: `0.0.0.0`)
- `EMIARCHIVE_PORT` -
  port on which the app will be listening
  (default: `30000`)
- `EMIARCHIVE_ADMIN_PORT` -
  port on which the web UI will be listening
  (default: `30001`)
- `EMIARCHIVE_ADMIN_PUBLIC_URL` -
  public URL of the web UI
  (default: `http://localhost:30001`)
- `EMIARCHIVE_ADMIN_USER` -
  username for the admin user
  (default: `admin`)
- `EMIARCHIVE_ADMIN_PASSWORD` -
  password for the admin user
  (default: `password`)
- `EMIARCHIVE_READONLY_USER` -
  username for the read-only user
  (default: `readonly`)
- `EMIARCHIVE_READONLY_PASSWORD` -
  password for the read-only user
  (default: `password`)
- `EMIARCHIVE_READWRITE_USER` -
  username for the read-write user
  (default: `readwrite`)
- `EMIARCHIVE_READWRITE_PASSWORD` -
  password for the read-write user
  (default: `password`)
- `EMIARCHIVE_LIVE_BUCKET` -
  name of the bucket where live recordings are automatically uploaded
  (default: `live`)
- `EMIARCHIVE_PRERECORDED_BUCKET` -
  name of the bucket where prerecorded emissions should be uploaded
  (default: `prerecorded`)
