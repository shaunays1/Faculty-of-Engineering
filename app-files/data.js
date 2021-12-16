var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7318501052513309,
          "pitch": -0.04427182543217256,
          "rotation": 6.283185307179586,
          "target": "1-auditorium-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-auditorium-exterior",
      "name": "Auditorium Exterior",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09758596307402101,
          "pitch": 0.05080150948245432,
          "rotation": 0,
          "target": "2-auditorium-atrium"
        },
        {
          "yaw": -1.7561737350408144,
          "pitch": -0.02698891743403742,
          "rotation": 3.141592653589793,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-auditorium-atrium",
      "name": "Auditorium Atrium",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0457736864940035,
          "pitch": -0.04738515106289576,
          "rotation": 3.141592653589793,
          "target": "1-auditorium-exterior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
