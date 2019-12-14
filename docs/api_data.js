define({ "api": [
  {
    "type": "get",
    "url": "/api//v1/",
    "title": "List Available routes on the api endpoint.",
    "name": "Shows_routes",
    "group": "Endpoints",
    "version": "4.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Path",
            "description": "<p>Route Paths</p>"
          }
        ]
      }
    },
    "filename": "src/routes/api/v1/index.js",
    "groupTitle": "Endpoints"
  },
  {
    "type": "get",
    "url": "/api/v1/upload/view",
    "title": "Lists all uploaded files.",
    "name": "Lists_all_uploaded_files_",
    "group": "Upload",
    "version": "4.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Path",
            "description": "<p>Route Paths</p>"
          }
        ]
      }
    },
    "filename": "src/routes/api/v1/index.js",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "/api/v1/upload/delete",
    "title": "Remove a uploaded file.",
    "name": "Remove_a_uploaded_file_",
    "group": "Upload",
    "version": "4.0.0",
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Delete key for upload.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Path",
            "description": "<p>Route Paths</p>"
          }
        ]
      }
    },
    "filename": "src/routes/api/v1/index.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "/api/v1/upload",
    "title": "Uploads a file.",
    "name": "Uploads_a_file_",
    "group": "Upload",
    "version": "4.0.0",
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Delete key for upload.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Path",
            "description": "<p>Route Paths</p>"
          }
        ]
      }
    },
    "filename": "src/routes/api/v1/index.js",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "/api/v1/upload/limits",
    "title": "VIew your upload limits.",
    "name": "VIew_your_upload_limits_",
    "group": "Upload",
    "version": "4.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Path",
            "description": "<p>Route Paths</p>"
          }
        ]
      }
    },
    "filename": "src/routes/api/v1/index.js",
    "groupTitle": "Upload"
  }
] });
