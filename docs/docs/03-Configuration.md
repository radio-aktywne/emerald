---
slug: /configuration
title: Configuration
---

## Environment variables

You can configure the database at runtime using various environment variables:

- `EMIARCHIVE__SERVER__HOST` -
  host on which the database will be listening
  (default: `0.0.0.0`)
- `EMIARCHIVE__SERVER__PORTS__S3` -
  port on which the database will be listening
  (default: `30000`)
- `EMIARCHIVE__SERVER__PORTS__WEB` -
  port on which the web interface will be available
  (default: `30001`)
- `EMIARCHIVE__URLS__WEB` -
  public URL of the web interface
  (default: `http://localhost:30001`)
- `EMIARCHIVE__CREDENTIALS__ADMIN__USER` -
  username for the admin user
  (default: `admin`)
- `EMIARCHIVE__CREDENTIALS__ADMIN__PASSWORD` -
  password for the admin user
  (default: `password`)
- `EMIARCHIVE__CREDENTIALS__READONLY__USER` -
  username for the readonly user
  (default: `readonly`)
- `EMIARCHIVE__CREDENTIALS__READONLY__PASSWORD` -
  password for the readonly user
  (default: `password`)
- `EMIARCHIVE__CREDENTIALS__READWRITE__USER` -
  username for the readwrite user
  (default: `readwrite`)
- `EMIARCHIVE__CREDENTIALS__READWRITE__PASSWORD` -
  password for the readwrite user
  (default: `password`)
- `EMIARCHIVE__BUCKETS__LIVE` -
  name of the bucket where live recordings are automatically uploaded
  (default: `live`)
- `EMIARCHIVE__BUCKETS__PRERECORDED` -
  name of the bucket where prerecorded emissions should be uploaded
  (default: `prerecorded`)
