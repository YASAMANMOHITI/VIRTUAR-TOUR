TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "partial": false,
  "id": "panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266",
  "hfovMax": 130,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": 175.71,
    "panorama": {
     "hfovMin": 60,
     "partial": false,
     "id": "panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3",
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -12.53,
       "panorama": {
        "hfovMin": 60,
        "partial": false,
        "id": "panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702",
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": 145.17,
          "panorama": "this.panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3",
          "distance": 1,
          "backwardYaw": -12.53
         }
        ],
        "hfov": 360,
        "pitch": 0,
        "class": "Panorama",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "id": "overlay_ABF946B4_BA42_AE4E_41D7_1BF74666ED93",
            "maps": [],
            "items": [
             {
              "hfov": 8.53,
              "pitch": -43.36,
              "yaw": 138.16,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_0_HS_0_0.png",
                 "width": 133,
                 "height": 117
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Image"
            },
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ]
           },
           {
            "id": "overlay_AB824EAA_BA42_FE5A_41D7_82608632C8A0",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 145.17,
              "hfov": 29.18,
              "pitch": -2.66,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_0_HS_1_1_0_map.gif",
                 "width": 38,
                 "height": 200
                }
               ]
              }
             }
            ],
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "data": {
             "label": "Polygon"
            },
            "useHandCursor": true,
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3, this.camera_A95085A4_BA5E_624E_41E0_4AD7DC74CAA8); this.mainPlayList.set('selectedIndex', 1)"
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_hq.jpeg",
             "width": 4096,
             "height": 2048
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_lq.jpeg",
             "width": 2048,
             "tags": "preload",
             "height": 1024
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702.jpeg",
             "width": 4002,
             "height": 2001
            }
           ]
          },
          "thumbnailUrl": "media/panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_t.jpg"
         }
        ],
        "label": "Panorama9",
        "vfov": 180,
        "thumbnailUrl": "media/panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_t.jpg"
       },
       "distance": 1,
       "backwardYaw": 145.17
      },
      {
       "class": "AdjacentPanorama",
       "yaw": -171.76,
       "panorama": "this.panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266",
       "distance": 1,
       "backwardYaw": 175.71
      }
     ],
     "hfov": 360,
     "pitch": 0,
     "class": "Panorama",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "id": "overlay_B4B8C3A3_BA41_A64A_41E1_1E699D4D36E2",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -12.53,
           "hfov": 21.33,
           "pitch": 0.6,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_0_HS_0_1_0_map.gif",
              "width": 81,
              "height": 200
             }
            ]
           }
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Polygon"
         },
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702, this.camera_A97DB5DD_BA5E_6DFE_41E5_35239BCC3133); this.mainPlayList.set('selectedIndex', 2)"
          }
         ]
        },
        {
         "id": "overlay_B4B83A5C_BA46_66FD_41E5_7AB17F6ACE26",
         "maps": [],
         "items": [
          {
           "hfov": 10.78,
           "pitch": -23.18,
           "yaw": -14.35,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_0_HS_1_0.png",
              "width": 133,
              "height": 117
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ]
        },
        {
         "id": "overlay_B57A0595_BA47_E24E_41B3_0E980EC7C001",
         "maps": [],
         "items": [
          {
           "hfov": 10.75,
           "pitch": -23.59,
           "yaw": 10.09,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_0_HS_2_0.png",
              "width": 133,
              "height": 117
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ]
        },
        {
         "id": "overlay_ABF65B82_BA41_A64A_41CE_6227C3794E97",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -171.76,
           "hfov": 15.27,
           "pitch": -4.89,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_0_HS_3_1_0_map.gif",
              "width": 86,
              "height": 200
             }
            ]
           }
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Polygon"
         },
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266, this.camera_A97265F7_BA5E_6DCB_41E3_9A8F01A51FF6); this.mainPlayList.set('selectedIndex', 0)"
          }
         ]
        },
        {
         "id": "overlay_A86D425C_BA41_A6FE_41E1_06B3F28ECA1C",
         "maps": [],
         "items": [
          {
           "hfov": 11.34,
           "pitch": -14.81,
           "yaw": -173.04,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_0_HS_4_0.png",
              "width": 133,
              "height": 117
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Image"
         },
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_hq.jpeg",
          "width": 4096,
          "height": 2048
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_lq.jpeg",
          "width": 2048,
          "tags": "preload",
          "height": 1024
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3.jpeg",
          "width": 4002,
          "height": 2001
         }
        ]
       },
       "thumbnailUrl": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_t.jpg"
      }
     ],
     "label": "Panorama8",
     "vfov": 180,
     "thumbnailUrl": "media/panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_t.jpg"
    },
    "distance": 1,
    "backwardYaw": -171.76
   }
  ],
  "hfov": 360,
  "pitch": 0,
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "id": "overlay_B7547A17_BA41_E64A_41CF_3118E6934A7D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 175.71,
        "hfov": 9.66,
        "pitch": -4.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_0_HS_0_1_0_map.gif",
           "width": 55,
           "height": 184
          }
         ]
        }
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3, this.camera_A91B962A_BA5E_6E45_41E4_C578D2C10FCA); this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "id": "overlay_B7424B3F_BA42_A6BA_41E4_35A87B39D5C6",
      "maps": [],
      "items": [
       {
        "hfov": 6.04,
        "pitch": -18.78,
        "yaw": 175.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_0_HS_1_0.png",
           "width": 72,
           "height": 63
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "distance": 100
       }
      ],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_hq.jpeg",
       "width": 4096,
       "height": 2048
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_lq.jpeg",
       "width": 2048,
       "tags": "preload",
       "height": 1024
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266.jpeg",
       "width": 4002,
       "height": 2001
      }
     ]
    },
    "thumbnailUrl": "media/panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_t.jpg"
   }
  ],
  "label": "Panorama7",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_t.jpg"
 },
 {
  "buttonMoveRight": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B532C41B_BA41_A27B_41D6_05FFBF17C62F",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43173"
   },
   "pressedIconURL": "skin/IconButton_B532C41B_BA41_A27B_41D6_05FFBF17C62F_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B532C41B_BA41_A27B_41D6_05FFBF17C62F_rollover.png",
   "iconURL": "skin/IconButton_B532C41B_BA41_A27B_41D6_05FFBF17C62F.png",
   "paddingBottom": 0
  },
  "displayPlaybackBar": true,
  "buttonPlayLeft": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "height": 40,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B532441A_BA41_A245_41DF_5DBD7C189643",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43167"
   },
   "pressedIconURL": "skin/IconButton_B532441A_BA41_A245_41DF_5DBD7C189643_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B532441A_BA41_A245_41DF_5DBD7C189643_rollover.png",
   "iconURL": "skin/IconButton_B532441A_BA41_A245_41DF_5DBD7C189643.png",
   "paddingBottom": 0
  },
  "class": "PanoramaPlayer",
  "buttonRestart": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "height": 40,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B5325419_BA41_A247_41DC_7A8D53EC00BC",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43166"
   },
   "pressedIconURL": "skin/IconButton_B5325419_BA41_A247_41DC_7A8D53EC00BC_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B5325419_BA41_A247_41DC_7A8D53EC00BC_rollover.png",
   "iconURL": "skin/IconButton_B5325419_BA41_A247_41DC_7A8D53EC00BC.png",
   "paddingBottom": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonZoomOut": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B531A419_BA41_A247_41B7_C91CF968E55E",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43165"
   },
   "pressedIconURL": "skin/IconButton_B531A419_BA41_A247_41B7_C91CF968E55E_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B531A419_BA41_A247_41B7_C91CF968E55E_rollover.png",
   "iconURL": "skin/IconButton_B531A419_BA41_A247_41B7_C91CF968E55E.png",
   "paddingBottom": 0
  },
  "buttonZoomIn": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B532941B_BA41_A27B_41CA_32287E6DD3F4",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43176"
   },
   "pressedIconURL": "skin/IconButton_B532941B_BA41_A27B_41CA_32287E6DD3F4_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B532941B_BA41_A27B_41CA_32287E6DD3F4_rollover.png",
   "iconURL": "skin/IconButton_B532941B_BA41_A27B_41CA_32287E6DD3F4.png",
   "paddingBottom": 0
  },
  "buttonPlayRight": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 40,
   "height": 40,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B532F41B_BA41_A27B_41D9_C0927FB4A4CE",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43174"
   },
   "pressedIconURL": "skin/IconButton_B532F41B_BA41_A27B_41D9_C0927FB4A4CE_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B532F41B_BA41_A27B_41D9_C0927FB4A4CE_rollover.png",
   "iconURL": "skin/IconButton_B532F41B_BA41_A27B_41D9_C0927FB4A4CE.png",
   "paddingBottom": 0
  },
  "buttonMoveUp": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B532141A_BA41_A245_41C3_996F3709452F",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43170"
   },
   "pressedIconURL": "skin/IconButton_B532141A_BA41_A245_41C3_996F3709452F_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B532141A_BA41_A245_41C3_996F3709452F_rollover.png",
   "iconURL": "skin/IconButton_B532141A_BA41_A245_41C3_996F3709452F.png",
   "paddingBottom": 0
  },
  "mouseControlMode": "drag_acceleration",
  "buttonMoveLeft": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B532741A_BA41_A245_41D2_780DDF8F7A51",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43168"
   },
   "pressedIconURL": "skin/IconButton_B532741A_BA41_A245_41D2_780DDF8F7A51_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B532741A_BA41_A245_41D2_780DDF8F7A51_rollover.png",
   "iconURL": "skin/IconButton_B532741A_BA41_A245_41D2_780DDF8F7A51.png",
   "paddingBottom": 0
  },
  "touchControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "buttonPause": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "toggle",
   "verticalAlign": "middle",
   "width": 40,
   "height": 40,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B532341A_BA41_A245_41DE_90FFBFA39910",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43171"
   },
   "pressedIconURL": "skin/IconButton_B532341A_BA41_A245_41DE_90FFBFA39910_pressed.png",
   "minHeight": 0,
   "iconURL": "skin/IconButton_B532341A_BA41_A245_41DE_90FFBFA39910.png",
   "paddingBottom": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonMoveDown": {
   "paddingLeft": 0,
   "borderSize": 0,
   "transparencyActive": true,
   "minWidth": 0,
   "borderRadius": 0,
   "mode": "push",
   "verticalAlign": "middle",
   "width": 32,
   "height": 32,
   "class": "IconButton",
   "propagateClick": false,
   "horizontalAlign": "center",
   "paddingTop": 0,
   "paddingRight": 0,
   "cursor": "hand",
   "shadow": false,
   "id": "IconButton_B532241A_BA41_A245_41E6_7D58F06527F7",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button43172"
   },
   "pressedIconURL": "skin/IconButton_B532241A_BA41_A245_41E6_7D58F06527F7_pressed.png",
   "minHeight": 0,
   "rollOverIconURL": "skin/IconButton_B532241A_BA41_A245_41E6_7D58F06527F7_rollover.png",
   "iconURL": "skin/IconButton_B532241A_BA41_A245_41E6_7D58F06527F7.png",
   "paddingBottom": 0
  }
 },
 {
  "id": "panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 170.49,
   "pitch": -15.92
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in_out",
     "targetPitch": -42.88,
     "path": "shortest",
     "targetYaw": -12.25,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3",
 {
  "id": "panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.06,
   "pitch": -13.18
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in_out",
     "targetPitch": -19,
     "path": "shortest",
     "targetYaw": -15.55,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -17.9,
     "path": "shortest",
     "targetYaw": 7.24,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -35.19,
     "path": "shortest",
     "targetYaw": 135.73,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702",
 {
  "id": "panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_camera",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_B5860964_BA42_A2CE_41E6_178C0C3E208E_playlist",
  "items": [
   {
    "camera": "this.panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_B13F7CC7_BA3E_63CB_4187_9372EBB3F266",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B5860964_BA42_A2CE_41E6_178C0C3E208E_playlist, 0, 1)"
   },
   {
    "camera": "this.panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_B03BF003_BA3E_A24B_41D5_5F2ECA53F1E3",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B5860964_BA42_A2CE_41E6_178C0C3E208E_playlist, 1, 2)"
   },
   {
    "camera": "this.panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_B3C9D91D_BA3E_A27F_41E3_E266E3052702",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_B5860964_BA42_A2CE_41E6_178C0C3E208E_playlist, 2, 0)"
   }
  ]
 },
 {
  "id": "camera_A95085A4_BA5E_624E_41E0_4AD7DC74CAA8",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 167.47,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in_out",
     "targetPitch": -13.18,
     "path": "shortest",
     "targetYaw": -174.06,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 70.49,
     "pitchSpeed": 35.58
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -19,
     "path": "shortest",
     "targetYaw": -15.55,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -17.9,
     "path": "shortest",
     "targetYaw": 7.24,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -35.19,
     "path": "shortest",
     "targetYaw": 135.73,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_A97DB5DD_BA5E_6DFE_41E5_35239BCC3133",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -34.83,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  }
 },
 {
  "id": "camera_A97265F7_BA5E_6DCB_41E3_9A8F01A51FF6",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.29,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in_out",
     "targetPitch": -15.92,
     "path": "shortest",
     "targetYaw": 170.49,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 31.64,
     "pitchSpeed": 16.25
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -42.88,
     "path": "shortest",
     "targetYaw": -12.25,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "id": "camera_A91B962A_BA5E_6E45_41E4_C578D2C10FCA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.24,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in_out",
     "targetPitch": -13.18,
     "path": "shortest",
     "targetYaw": -174.06,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 38.16,
     "pitchSpeed": 19.49
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -19,
     "path": "shortest",
     "targetYaw": -15.55,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -17.9,
     "path": "shortest",
     "targetYaw": 7.24,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    },
    {
     "easing": "cubic_in_out",
     "targetPitch": -35.19,
     "path": "shortest",
     "targetYaw": 135.73,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 }
], "children": [
 {
  "playbackBarProgressBorderSize": 0,
  "progressBarOpacity": 1,
  "paddingLeft": 0,
  "progressBarBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "progressBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "transitionDuration": 500,
  "toolTipDisplayTime": 600,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "class": "ViewerArea",
  "propagateClick": false,
  "toolTipFontWeight": "normal",
  "progressBottom": 0,
  "paddingTop": 0,
  "progressBorderRadius": 0,
  "progressHeight": 10,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBottom": 5,
  "progressBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingRight": 6,
  "playbackBarBorderColor": "#FFFFFF",
  "progressLeft": 0,
  "toolTipPaddingLeft": 6,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarLeft": 0,
  "minHeight": 50,
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingBottom": 0,
  "toolTipFontColor": "#606060",
  "toolTipBorderRadius": 3,
  "borderRadius": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 0,
  "minWidth": 100,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipOpacity": 1,
  "toolTipShadowColor": "#333333",
  "playbackBarHeight": 10,
  "toolTipTextShadowColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadWidth": 6,
  "toolTipShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowHorizontalLength": 0,
  "width": "100%",
  "playbackBarRight": 0,
  "height": "100%",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingRight": 0,
  "toolTipFontSize": "1.11vh",
  "toolTipShadowOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowSpread": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "shadow": false,
  "id": "MainViewer",
  "progressOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipPaddingTop": 4,
  "toolTipBorderSize": 1,
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundOpacity": 1,
  "progressRight": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarOpacity": 1
 },
 {
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "right": "38.14%",
  "borderSize": 0,
  "overflow": "hidden",
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 20,
  "borderRadius": 9,
  "verticalAlign": "middle",
  "gap": 4,
  "class": "Container",
  "propagateClick": false,
  "scrollBarVisible": "rollOver",
  "contentOpaque": false,
  "width": "22.424%",
  "paddingTop": 0,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "height": "15.132%",
  "scrollBarColor": "#000000",
  "children": [
   "this.IconButton_B531A419_BA41_A247_41B7_C91CF968E55E",
   "this.IconButton_B5325419_BA41_A247_41DC_7A8D53EC00BC",
   "this.IconButton_B532441A_BA41_A245_41DF_5DBD7C189643",
   "this.IconButton_B532741A_BA41_A245_41D2_780DDF8F7A51",
   {
    "overflow": "hidden",
    "paddingLeft": 0,
    "borderRadius": 0,
    "borderSize": 0,
    "children": [
     "this.IconButton_B532141A_BA41_A245_41C3_996F3709452F",
     "this.IconButton_B532341A_BA41_A245_41DE_90FFBFA39910",
     "this.IconButton_B532241A_BA41_A245_41E6_7D58F06527F7"
    ],
    "minWidth": 20,
    "verticalAlign": "middle",
    "width": 40,
    "gap": 4,
    "class": "Container",
    "propagateClick": false,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "height": "100%",
    "paddingRight": 0,
    "layout": "vertical",
    "scrollBarMargin": 2,
    "shadow": false,
    "id": "Container_B532641A_BA41_A245_41DE_DCA097CD3B8A",
    "backgroundOpacity": 0,
    "data": {
     "name": "Container43169"
    },
    "creationPolicy": "delayed",
    "minHeight": 20,
    "scrollBarOpacity": 0.5,
    "paddingBottom": 0
   },
   "this.IconButton_B532C41B_BA41_A27B_41D6_05FFBF17C62F",
   "this.IconButton_B532F41B_BA41_A27B_41D9_C0927FB4A4CE",
   {
    "paddingLeft": 0,
    "borderSize": 0,
    "transparencyActive": true,
    "minWidth": 0,
    "borderRadius": 0,
    "mode": "toggle",
    "verticalAlign": "middle",
    "width": 40,
    "height": 40,
    "class": "IconButton",
    "propagateClick": false,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "paddingRight": 0,
    "cursor": "hand",
    "shadow": false,
    "id": "IconButton_B532E41B_BA41_A27B_41E3_1E6129D832CF",
    "backgroundOpacity": 0,
    "data": {
     "name": "Button43175"
    },
    "pressedIconURL": "skin/IconButton_B532E41B_BA41_A27B_41E3_1E6129D832CF_pressed.png",
    "minHeight": 0,
    "iconURL": "skin/IconButton_B532E41B_BA41_A27B_41E3_1E6129D832CF.png",
    "paddingBottom": 0
   },
   "this.IconButton_B532941B_BA41_A27B_41CA_32287E6DD3F4"
  ],
  "layout": "horizontal",
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "bottom": "3.33%",
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0.81
  ],
  "shadow": false,
  "id": "Container_B532841B_BA41_A27B_41C1_A7102D6BBA25",
  "backgroundOpacity": 0.45,
  "data": {
   "name": "Container43164"
  },
  "creationPolicy": "delayed",
  "minHeight": 20,
  "paddingBottom": 0
 },
 {
  "paddingLeft": 20,
  "right": "1.81%",
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontColor": "#FFFFFF",
  "rollOverItemBackgroundOpacity": 0,
  "itemThumbnailBorderRadius": 50,
  "selectedItemLabelFontColor": "#FFCC00",
  "itemMode": "normal",
  "horizontalAlign": "left",
  "gap": 10,
  "class": "ThumbnailList",
  "propagateClick": false,
  "layout": "vertical",
  "itemLabelHorizontalAlign": "center",
  "itemHorizontalAlign": "center",
  "paddingTop": 10,
  "itemThumbnailHeight": 75,
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailOpacity": 1,
  "scrollBarMargin": 2,
  "backgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 0.24,
  "itemThumbnailShadowBlurRadius": 8,
  "itemLabelFontWeight": "normal",
  "itemThumbnailShadowOpacity": 0.54,
  "itemVerticalAlign": "middle",
  "itemPaddingRight": 3,
  "itemPaddingTop": 3,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorRatios": [],
  "scrollBarOpacity": 0.5,
  "paddingBottom": 10,
  "minHeight": 20,
  "itemPaddingBottom": 3,
  "itemThumbnailShadowSpread": 1,
  "itemLabelFontSize": 14,
  "borderRadius": 5,
  "borderSize": 0,
  "playList": "this.ThumbnailList_B5860964_BA42_A2CE_41E6_178C0C3E208E_playlist",
  "minWidth": 20,
  "itemLabelGap": 9,
  "itemBackgroundOpacity": 0,
  "verticalAlign": "top",
  "itemLabelTextDecoration": "none",
  "itemBorderRadius": 0,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelFontStyle": "normal",
  "scrollBarVisible": "rollOver",
  "height": "55.373%",
  "scrollBarColor": "#FFFFFF",
  "itemThumbnailWidth": 75,
  "scrollBarWidth": 10,
  "itemBackgroundColorDirection": "vertical",
  "itemLabelPosition": "bottom",
  "paddingRight": 20,
  "top": "15.77%",
  "itemOpacity": 1,
  "itemLabelFontFamily": "Arial",
  "backgroundColorDirection": "vertical",
  "rollOverItemLabelFontWeight": "normal",
  "shadow": false,
  "id": "ThumbnailList_B5860964_BA42_A2CE_41E6_178C0C3E208E",
  "itemPaddingLeft": 3,
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemBackgroundColor": [],
  "itemThumbnailShadow": true,
  "itemThumbnailShadowVerticalLength": 3
 }
], 
 "scrollBarOpacity": 0.5,
 "start": "this.syncPlaylists([this.ThumbnailList_B5860964_BA42_A2CE_41E6_178C0C3E208E_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "borderSize": 0,
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "gap": 10,
 "class": "Player",
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "vrPolyfillScale": 0.5,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "height": "100%",
 "scrollBarColor": "#000000",
 "width": "100%",
 "buttonToggleMute": "this.IconButton_B532E41B_BA41_A27B_41E3_1E6129D832CF",
 "layout": "absolute",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player551"
 },
 "scripts": {
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = self.getPixels(w.get('titleFontSize')) + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = result[1]; var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "creationPolicy": "delayed",
 "minHeight": 20,
 "paddingBottom": 0
})