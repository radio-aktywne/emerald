---
slug: /config
title: Configuration
---

## Environment variables

You can configure the database at runtime using various environment variables:

- `MEDIARECORDS__SERVER__HOST` -
  host on which the database will be listening
  (default: `0.0.0.0`)
- `MEDIARECORDS__SERVER__PORTS__S3` -
  port on which the database will be listening
  (default: `30000`)
- `MEDIARECORDS__SERVER__PORTS__WEB` -
  port on which the web interface will be available
  (default: `30001`)
- `MEDIARECORDS__URLS__WEB` -
  public URL of the web interface
  (default: `http://localhost:30001`)
- `MEDIARECORDS__CREDENTIALS__ADMIN__USER` -
  username for the admin user
  (default: `admin`)
- `MEDIARECORDS__CREDENTIALS__ADMIN__PASSWORD` -
  password for the admin user
  (default: `password`)
- `MEDIARECORDS__CREDENTIALS__READONLY__USER` -
  username for the readonly user
  (default: `readonly`)
- `MEDIARECORDS__CREDENTIALS__READONLY__PASSWORD` -
  password for the readonly user
  (default: `password`)
- `MEDIARECORDS__CREDENTIALS__READWRITE__USER` -
  username for the readwrite user
  (default: `readwrite`)
- `MEDIARECORDS__CREDENTIALS__READWRITE__PASSWORD` -
  password for the readwrite user
  (default: `password`)
