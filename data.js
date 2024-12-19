var APP_DATA = {
  "scenes": [
    {
      "id": "0-wohnen-essen-kche",
      "name": "Wohnen Essen Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.582556143931723,
          "pitch": 0.41242748277362296,
          "rotation": 0,
          "target": "3-gartengeschoss"
        },
        {
          "yaw": -2.590679205694748,
          "pitch": 0.4009812556451937,
          "rotation": 0,
          "target": "2-erdgeschoss"
        },
        {
          "yaw": -1.9537581786955798,
          "pitch": 0.32195163710853336,
          "rotation": 0,
          "target": "1-bro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bro",
      "name": "Büro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4820747346024774,
          "pitch": 0.4840486354317868,
          "rotation": 0,
          "target": "0-wohnen-essen-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-erdgeschoss",
      "name": "ERDGESCHOSS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.915006748461245,
          "pitch": 0.6220701254336376,
          "rotation": 0,
          "target": "0-wohnen-essen-kche"
        },
        {
          "yaw": 1.365460152876052,
          "pitch": 0.5853851670055352,
          "rotation": 0,
          "target": "3-gartengeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-gartengeschoss",
      "name": "GARTENGESCHOSS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6538005310711714,
          "pitch": 0.6433343213603511,
          "rotation": 0,
          "target": "2-erdgeschoss"
        },
        {
          "yaw": -0.0423243529339441,
          "pitch": 0.6093804534189147,
          "rotation": 0,
          "target": "4-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-korridor",
      "name": "Korridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1188081179039546,
          "pitch": 0.6491162359762725,
          "rotation": 0,
          "target": "3-gartengeschoss"
        },
        {
          "yaw": 0.5678632229473592,
          "pitch": 0.6189704562985874,
          "rotation": 0,
          "target": "6-zimmer-2"
        },
        {
          "yaw": -0.1599722800960066,
          "pitch": 0.5065398892243174,
          "rotation": 0,
          "target": "5-zimmer-1"
        },
        {
          "yaw": -1.0192210361232732,
          "pitch": 0.6246318887236697,
          "rotation": 0,
          "target": "7-ankleide"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-zimmer-1",
      "name": "Zimmer 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0330406380978356,
          "pitch": 0.40414323704473,
          "rotation": 0,
          "target": "4-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-zimmer-2",
      "name": "Zimmer 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7939600090828467,
          "pitch": 0.41560522740042494,
          "rotation": 0,
          "target": "4-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-ankleide",
      "name": "Ankleide",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8655165423397122,
          "pitch": 0.6765962195575774,
          "rotation": 0,
          "target": "8-wc"
        },
        {
          "yaw": -0.03517144946154005,
          "pitch": 0.4063522555058334,
          "rotation": 0,
          "target": "9-master-schlafzimmer"
        },
        {
          "yaw": 1.7018406577363736,
          "pitch": 0.5102770223437307,
          "rotation": 0,
          "target": "4-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8223897656604935,
          "pitch": 0.8923837377084567,
          "rotation": 0,
          "target": "7-ankleide"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-schlafzimmer",
      "name": "Master-Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7030997288110257,
          "pitch": 0.3961657578819864,
          "rotation": 0,
          "target": "7-ankleide"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
