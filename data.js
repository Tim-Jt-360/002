var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre-erdgeschoss",
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
          "yaw": -0.8785143612218889,
          "pitch": 0.6128869145858271,
          "rotation": 0,
          "target": "1-wohnen-essen-kche"
        },
        {
          "yaw": 1.392108996252869,
          "pitch": 0.6024104661922909,
          "rotation": 0,
          "target": "3-entre-gartengeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wohnen-essen-kche",
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
          "yaw": 2.6019524120639854,
          "pitch": 0.4041042370845176,
          "rotation": 0,
          "target": "3-entre-gartengeschoss"
        },
        {
          "yaw": -2.6140142501706496,
          "pitch": 0.4190196947552334,
          "rotation": 0,
          "target": "0-entre-erdgeschoss"
        },
        {
          "yaw": -1.980919756188559,
          "pitch": 0.33307961846472445,
          "rotation": 0,
          "target": "2-bro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bro",
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
          "yaw": 2.5228516649852164,
          "pitch": 0.5095909821609439,
          "rotation": 0,
          "target": "1-wohnen-essen-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entre-gartengeschoss",
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
          "yaw": 1.66623882369701,
          "pitch": 0.6425216680959203,
          "rotation": 0,
          "target": "0-entre-erdgeschoss"
        },
        {
          "yaw": -0.0006359169157867939,
          "pitch": 0.5675418128386891,
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
          "yaw": 3.112564622155084,
          "pitch": 0.642969220700655,
          "rotation": 0,
          "target": "3-entre-gartengeschoss"
        },
        {
          "yaw": -0.1188785904723062,
          "pitch": 0.5045422255088141,
          "rotation": 0,
          "target": "5-zimmer-1"
        },
        {
          "yaw": 0.5798176411984599,
          "pitch": 0.6431710933760488,
          "rotation": 0,
          "target": "6-zimmer-2"
        },
        {
          "yaw": -1.037040158132399,
          "pitch": 0.6586784091206592,
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
          "yaw": -3.0768282495478196,
          "pitch": 0.4760029805709163,
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
          "yaw": -3.0139456723142324,
          "pitch": 0.4737693651392707,
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
          "yaw": 1.7132536596947432,
          "pitch": 0.6198197045738993,
          "rotation": 0,
          "target": "4-korridor"
        },
        {
          "yaw": -1.7852854777120655,
          "pitch": 0.733318956326551,
          "rotation": 0,
          "target": "8-wc"
        },
        {
          "yaw": -0.13953073512247371,
          "pitch": 0.604855556889369,
          "rotation": 0,
          "target": "9-master"
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
          "yaw": 1.828527853331221,
          "pitch": 0.9273704557006077,
          "rotation": 0,
          "target": "7-ankleide"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master",
      "name": "Master",
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
          "yaw": -1.7365064536095112,
          "pitch": 0.4549775387939956,
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
