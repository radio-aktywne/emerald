---
slug: /configuration
title: Configuration
---

## Environment variables

You can configure the database at runtime using various environment variables:

- `DATARECORDS__SERVER__HOST` -
  host on which the database will be listening
  (default: `0.0.0.0`)
- `DATARECORDS__SERVER__PORTS__S3` -
  port on which the database will be listening
  (default: `30000`)
- `DATARECORDS__SERVER__PORTS__WEB` -
  port on which the web interface will be available
  (default: `30001`)
- `DATARECORDS__URLS__WEB` -
  public URL of the web interface
  (default: `http://localhost:30001`)
- `DATARECORDS__CREDENTIALS__ADMIN__USER` -
  username for the admin user
  (default: `admin`)
- `DATARECORDS__CREDENTIALS__ADMIN__PASSWORD` -
  password for the admin user
  (default: `password`)
- `DATARECORDS__CREDENTIALS__READONLY__USER` -
  username for the readonly user
  (default: `readonly`)
- `DATARECORDS__CREDENTIALS__READONLY__PASSWORD` -
  password for the readonly user
  (default: `password`)
- `DATARECORDS__CREDENTIALS__READWRITE__USER` -
  username for the readwrite user
  (default: `readwrite`)
- `DATARECORDS__CREDENTIALS__READWRITE__PASSWORD` -
  password for the readwrite user
  (default: `password`)
- `DATARECORDS__BUCKETS__LIVE` -
  name of the bucket where live recordings are automatically uploaded
  (default: `live`)
- `DATARECORDS__BUCKETS__PRERECORDED` -
  name of the bucket where prerecorded emissions should be uploaded
  (default: `prerecorded`)
