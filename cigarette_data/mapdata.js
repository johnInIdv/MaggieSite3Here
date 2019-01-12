
var simplemaps_usmap_mapdata={

  main_settings: {
   //General settings
    width: "1100", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    popup_nocss: 'yes',//allows me to apply more css options
    //State defaults
    state_description: "<img style=\"float:left; margin-right: 20px;\" width=\"64\" height=\"64\" /><ul style=\"width: 175px\"; float: left;><li>Add images</li><li>Use <code>&lt;html&gt;</code></li><li style=\"color: #d13c12\">Change color</li><li style=\"font-family: Monospace\">Change Font</li></ul>",
    // state_color: "#f5be75",
    // state_color: "#faddb8",//rgb(250, 221, 184)
      // state_color: "#faddb8",//rgb(250, 221, 184)
    state_color: "#fccf7a",
    state_hover_color: "#d13c12",
    state_image_color: "#ffffff",
    state_url: "",
    state_image_url: "",
    state_image_position: "",
    all_states_inactive: "no",
    all_states_zoomable: "",
    border_size: 0.05,
    border_color: "#000000",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: "0.8",
    location_url: "http://simplemaps.com",
    location_size: "20",
    location_type: "circle",
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "CDD0D1",
    label_hover_color: "CDD0D1",
    label_size: 12,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Advanced settings
    div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website",
    location_image_url: ""
  },

  state_specific: {
    HI: {
      inactive: "no",
      hide: "no",
      name: "Hawaii",
      description: "<img src=\"booYa.png\" style=\"width: 585px; height: 370px\"/>"
    },
    AK: {
      inactive: "no",
      hide: "no",
      name: "Alaska - and here is a ton of data",
      description: "<img src=\"states/ak.png\" style=\"width: 585px; height: 370px\"/>"
    },

    FL: {
      inactive: "no",
      hide: "no",
      name: "Florida",
      description: "<img src=\"states/fl.png\" style=\"width: 585px; height: 370px\"/>"
    },
    NH: {
    inactive: "no",
    hide: "no",
    name: "New Hampshire",
    description: "<img src=\"states/nh.png\" style=\"width: 585px; height: 370px\"/>"
  },
    VT: {
      inactive: "no",
      hide: "no",
      name: "Vermont",
      description: "<img src=\"states/vt.png\" style=\"width: 585px; height: 370px\"/>"
    },
    ME: {
      inactive: "no",
      hide: "no",
      name: "Maine",
      description: "<img src=\"states/me.png\" style=\"width: 585px; height: 370px\"/>"
    },
    RI: {
      inactive: "no",
      hide: "no",
      name: "Rhode Island",
      description: "<img src=\"states/ri.png\" style=\"width: 585px; height: 370px\"/>"
    },
    NY: {
      inactive: "no",
      hide: "no",
      name: "New York",
      description: "<img src=\"states/ny.png\" style=\"width: 585px; height: 370px\"/>"
    },
    PA: {
      inactive: "no",
      hide: "no",
      name: "Pennsylvania",
      description: "<img src=\"states/pa.png\" style=\"width: 585px; height: 370px\"/>"
    },
    NJ: {
      inactive: "no",
      hide: "no",
      name: "New Jersey",
      description: "<img src=\"states/nj.png\" style=\"width: 585px; height: 370px\"/>"
    },
    DE: {
      inactive: "no",
      hide: "no",
      name: "Delaware",
      description: "<img src=\"states/de.png\" style=\"width: 585px; height: 370px\"/>"
    },
    MD: {
      inactive: "no",
      hide: "no",
      name: "Maryland",
      description: "<img src=\"states/md.png\" style=\"width: 585px; height: 370px\"/>"
    },
    VA: {
      inactive: "no",
      hide: "no",
      name: "Virginia",
      description: "<img src=\"states/va.png\" style=\"width: 585px; height: 370px\"/>"
    },
    WV: {
      inactive: "no",
      hide: "no",
      name: "West Virginia",
      description: "<img src=\"states/wv.png\" style=\"width: 585px; height: 370px\"/>"
    },
    OH: {
      inactive: "no",
      hide: "no",
      name: "Ohio",
      description: "<img src=\"states/oh.png\" style=\"width: 585px; height: 370px\"/>"
    },
    IN: {
      inactive: "no",
      hide: "no",
      name: "Indiana",
      description: " "
    },
    IL: {
      inactive: "no",
      hide: "no",
      name: "Illinois",
      description: " "
    },
    CT: {
      inactive: "no",
      hide: "no",
      name: "Connecticut",
      description: "<img src=\"states/ct.png\" style=\"width: 585px; height: 370px\"/>"
    },
    WI: {
      inactive: "no",
      hide: "no",
      name: "Wisconsin",
      description: " "
    },
    NC: {
      inactive: "no",
      hide: "no",
      name: "North Carolina",
      description: "<img src=\"states/nc.png\" style=\"width: 585px; height: 370px\"/>"
    },
    DC: {
      inactive: "no",
      hide: "no",
      name: "District of Columbia",
      description: "<img src=\"states/dc.png\" style=\"width: 585px; height: 370px\"/>"
    },
    MA: {
      inactive: "no",
      hide: "no",
      name: "Massachusetts",
      description: "<img src=\"states/ma.png\" style=\"width: 585px; height: 370px\"/>"
    },
    TN: {
      inactive: "no",
      hide: "no",
      name: "Tennessee",
      description: " "
    },
    AR: {
      inactive: "no",
      hide: "no",
      name: "Arkansas",
      description: " "
    },
    MO: {
      inactive: "no",
      hide: "no",
      name: "Missouri",
      description: " "
    },
    GA: {
      inactive: "no",
      hide: "no",
      name: "Georgia",
      description: "<img src=\"states/ga.png\" style=\"width: 585px; height: 370px\"/>"
    },
    SC: {
      inactive: "no",
      hide: "no",
      name: "South Carolina",
      description: "<img src=\"states/sc.png\" style=\"width: 585px; height: 370px\"/>"
    },
    KY: {
      inactive: "no",
      hide: "no",
      name: "Kentucky",
      description: " "
    },
    AL: {
      inactive: "no",
      hide: "no",
      name: "Alabama",
      description: "<img src=\"states/al.png\" style=\"width: 585px; height: 370px\"/>"
    },
    LA: {
      inactive: "no",
      hide: "no",
      name: "Louisiana",
      description:" "
    },
    MS: {
      inactive: "no",
      hide: "no",
      name: "Mississippi",
      description: " "
    },
    IA: {
      inactive: "no",
      hide: "no",
      name: "Iowa",
      description: " "
    },
    MN: {
      inactive: "no",
      hide: "no",
      name: "Minnesota",
      description: " "
    },
    OK: {
      inactive: "no",
      hide: "no",
      name: "Oklahoma",
      description: " "
    },
    TX: {
      inactive: "no",
      hide: "no",
      name: "Texas",
      description: " "
    },
    NM: {
      inactive: "no",
      hide: "no",
      name: "New Mexico",
      description: " "
    },
    KS: {
      inactive: "no",
      hide: "no",
      name: "Kansas",
      description: " "
    },
    NE: {
      inactive: "no",
      hide: "no",
      name: "Nebraska",
      description: " "
    },
    SD: {
      inactive: "no",
      hide: "no",
      name: "South Dakota",
      description: " "
    },
    ND: {
      inactive: "no",
      hide: "no",
      name: "North Dakota",
      description: " "
    },
    WY: {
      inactive: "no",
      hide: "no",
      name: "Wyoming",
      description: " "
    },
    MT: {
      description: " ",
      border_hover_color: "#d13c12",
      name: "Montana"
    },
    CO: {
      inactive: "no",
      hide: "no",
      name: "Colorado",
      description: " "
    },
    UT: {
      inactive: "no",
      hide: "no",
      name: "Utah",
      description: " "
    },
    AZ: {
      inactive: "no",
      hide: "no",
      name: "Arizona",
      description: "<img src=\"states/az.png\" style=\"width: 585px; height: 370px\"/>"
    },
    NV: {
      inactive: "no",
      hide: "no",
      name: "Nevada",
      description: " "
    },
    OR: {
      inactive: "no",
      hide: "no",
      name: "Oregon",
      description: " "
    },
    WA: {
      inactive: "no",
      hide: "no",
      name: "Washington",
      description: " "
    },
    CA: {
      inactive: "no",
      hide: "no",
      name: "California",
      description: "<img src=\"states/ca.png\" style=\"width: 585px; height: 370px\"/>"
    },
    MI: {
      inactive: "no",
      hide: "no",
      name: "Michigan",
      description: " "
    },
    ID: {
      inactive: "no",
      hide: "no",
      name: "Idaho",
      description: " "
    },
    GU: {
      inactive: "no",
      hide: "yes",
      name: "Guam",
      description: " "
    },
    VI: {
      inactive: "no",
      hide: "yes",
      name: "Virgin Islands",
      description: " "
    },
    PR: {
      inactive: "no",
      hide: "yes",
      name: "Puerto Rico",
      description: " "
    },
    MP: {
      inactive: "no",
      hide: "yes",
      name: "Northern Mariana Islands",
      description: " "
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      width: 45,
      display: "all",
      pill: "yes"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  regions: {},
  data: {
    data: {}
  }
};
