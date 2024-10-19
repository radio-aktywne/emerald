---
slug: /config
title: Configuration
---

## Environment variables

You can configure the database at runtime using various environment variables:

- `EMERALD__SERVER__HOST` -
  host on which the database will be listening
  (default: `0.0.0.0`)
- `EMERALD__SERVER__PORTS__S3` -
  port on which the database will be listening
  (default: `10710`)
- `EMERALD__SERVER__PORTS__WEB` -
  port on which the web interface will be available
  (default: `10711`)
- `EMERALD__URLS__WEB` -
  public URL of the web interface
  (default: `http://localhost:10711`)
- `EMERALD__CREDENTIALS__ADMIN__USER` -
  username for the admin user
  (default: `admin`)
- `EMERALD__CREDENTIALS__ADMIN__PASSWORD` -
  password for the admin user
  (default: `password`)
- `EMERALD__CREDENTIALS__READONLY__USER` -
  username for the readonly user
  (default: `readonly`)
- `EMERALD__CREDENTIALS__READONLY__PASSWORD` -
  password for the readonly user
  (default: `password`)
- `EMERALD__CREDENTIALS__READWRITE__USER` -
  username for the readwrite user
  (default: `readwrite`)
- `EMERALD__CREDENTIALS__READWRITE__PASSWORD` -
  password for the readwrite user
  (default: `password`)
