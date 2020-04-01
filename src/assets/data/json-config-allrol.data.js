export const jsonResources = {
    "analysis_modules": [
        {
            "config": {},
            "enabled": true,
            "module": "vrm.MonthOverview",
            "name": "vrm.MonthOverview"
        },
        {
            "config": {},
            "enabled": true,
            "module": "vrm.PerformanceTables",
            "name": "vrm.PerformanceTables"
        },
        {
            "config": {
                "x_limits": {
                    "hist_feed": {
                        "lo": 100,
                        "up": 320
                    },
                    "hist_power": {
                        "lo": 0,
                        "up": 3000
                    },
                    "hist_vibro": {
                        "lo": 0,
                        "up": 8
                    },
                    "hist_wm": {
                        "lo": 0,
                        "up": 15
                    }
                }
            },
            "enabled": true,
            "module": "vrm.Histograms",
            "name": "vrm.Histograms"
        },
        {
            "config": {},
            "enabled": true,
            "module": "vrm.StopperContacts",
            "name": "vrm.StopperContacts"
        },
        {
            "config": {
                "design_values": [
                    {
                        "factors": [
                            {
                                "name": "durchsatz",
                                "values": [
                                    311,
                                    251,
                                    0.75
                                ]
                            },
                            {
                                "name": "sum_wm",
                                "values": [
                                    12.63,
                                    13.98,
                                    -0.0135
                                ]
                            },
                            {
                                "name": "vibr_niv",
                                "values": [
                                    1,
                                    3.5,
                                    -0.025
                                ]
                            },
                            {
                                "name": "water",
                                "values": [
                                    1.8,
                                    2.8,
                                    -0.01
                                ]
                            },
                            {
                                "name": "wm_fan",
                                "values": [
                                    6.4,
                                    7.6,
                                    -0.0015
                                ]
                            },
                            {
                                "name": "wm_muehle",
                                "values": [
                                    5.85,
                                    8.53,
                                    -0.0335
                                ]
                            },
                            {
                                "name": "wm_sepol",
                                "values": [
                                    0.38,
                                    0.46,
                                    -0.001
                                ]
                            },
                            {
                                "name": "stopper_contacts",
                                "values": [
                                    100,
                                    0,
                                    0
                                ]
                            }
                        ],
                        "product": "RawMeal"
                    }
                ]
            },
            "enabled": true,
            "module": "vrm.PerformanceIndicators",
            "name": "vrm.PerformanceIndicators"
        },
        {
            "config": {
                "utilisation": {
                    "downtime_24h": 1,
                    "mill_stops_equipment": 10,
                    "mill_stops_startproc": 5,
                    "mill_stops_vibro": 20,
                    "operation_time": 744,
                    "total_mill_stops": 30
                }
            },
            "enabled": true,
            "module": "vrm.UtilisationIndicators",
            "name": "vrm.UtilisationIndicators"
        },
        {
            "config": {
                "channels": [
                    {
                        "channel": "General_failure_f",
                        "label": "General failure (no sensor)"
                    },
                    {
                        "channel": "Vibration_RU1_f",
                        "label": "Vibration RU1"
                    },
                    {
                        "channel": "Vibration_RU2_f",
                        "label": "Vibration RU2"
                    },
                    {
                        "channel": "Vibration_RU3_f",
                        "label": "Vibration RU3"
                    },
                    {
                        "channel": "Vibration_RU4_f",
                        "label": "Vibration RU4"
                    },
                    {
                        "channel": "Vibration_Mill_f",
                        "label": "Vibration Mill"
                    },
                    {
                        "channel": "Hyd_Pressure_RU1_f",
                        "label": "Hyd. Pressure RU1"
                    },
                    {
                        "channel": "Hyd_Pressure_RU2_f",
                        "label": "Hyd. Pressure RU2"
                    },
                    {
                        "channel": "Hyd_Pressure_RU3_f",
                        "label": "Hyd. Pressure RU3"
                    },
                    {
                        "channel": "Hyd_Pressure_RU4_f",
                        "label": "Hyd. Pressure RU4"
                    },
                    {
                        "channel": "Strain_axial_RU1_f",
                        "label": "Strain axial RU1"
                    },
                    {
                        "channel": "Strain_axial_RU2_f",
                        "label": "Strain axial RU2"
                    },
                    {
                        "channel": "Strain_axial_RU3_f",
                        "label": "Strain axial RU3"
                    },
                    {
                        "channel": "Strain_axial_RU4_f",
                        "label": "Strain axial RU4"
                    },
                    {
                        "channel": "Torque_MainDrive_f",
                        "label": "Torque MainDrive"
                    }
                ]
            },
            "enabled": true,
            "module": "vrm.ErrorcodeOverview",
            "name": "vrm.ErrorcodeOverview"
        }
    ],
    "output_modules": [
        {
            "config": {
                "template_name": "template.docx",
                "variables": []
            },
            "enabled": true,
            "module": "documentwriter.DocumentWriter",
            "name": "documentwriter.DocumentWriter"
        }
    ],
    "preprocess_modules": [
        {
            "config": {
                "channel_list": [
                    {
                        "id": 189961,
                        "name": "PressureAfterMill_mitte60s_CIP"
                    },
                    {
                        "id": 189959,
                        "name": "PressureAfterMill_min60s_CIP"
                    },
                    {
                        "id": 189957,
                        "name": "PressureAfterMill_max60s_CIP"
                    },
                    {
                        "id": 189955,
                        "name": "WaterInjectionGroup"
                    },
                    {
                        "id": 190266,
                        "name": "WaterInjectionGroup_max60s"
                    },
                    {
                        "id": 190267,
                        "name": "WaterInjectionGroup_min60s"
                    },
                    {
                        "id": 190268,
                        "name": "WaterInjectionGroup_mitte60s"
                    },
                    {
                        "id": 189953,
                        "name": "TransportsGroup"
                    },
                    {
                        "id": 190263,
                        "name": "TransportsGroup_max60s"
                    },
                    {
                        "id": 190264,
                        "name": "TransportsGroup_min60s"
                    },
                    {
                        "id": 190265,
                        "name": "TransportsGroup_mitte60s"
                    },
                    {
                        "id": 189951,
                        "name": "TransportToSiloGroup"
                    },
                    {
                        "id": 190260,
                        "name": "TransportToSiloGroup_max60s"
                    },
                    {
                        "id": 190261,
                        "name": "TransportToSiloGroup_min60s"
                    },
                    {
                        "id": 190262,
                        "name": "TransportToSiloGroup_mitte60s"
                    },
                    {
                        "id": 189949,
                        "name": "TransportToBucketElevatorGroup"
                    },
                    {
                        "id": 190257,
                        "name": "TransportToBucketElevatorGroup_max60s"
                    },
                    {
                        "id": 190258,
                        "name": "TransportToBucketElevatorGroup_min60s"
                    },
                    {
                        "id": 190259,
                        "name": "TransportToBucketElevatorGroup_mitte60s"
                    },
                    {
                        "id": 189947,
                        "name": "SpeedFeedBelt"
                    },
                    {
                        "id": 190254,
                        "name": "SpeedFeedBelt_max60s"
                    },
                    {
                        "id": 190255,
                        "name": "SpeedFeedBelt_min60s"
                    },
                    {
                        "id": 190256,
                        "name": "SpeedFeedBelt_mitte60s"
                    },
                    {
                        "id": 189945,
                        "name": "SeperatorGroup"
                    },
                    {
                        "id": 190251,
                        "name": "SeperatorGroup_max60s"
                    },
                    {
                        "id": 190252,
                        "name": "SeperatorGroup_min60s"
                    },
                    {
                        "id": 190253,
                        "name": "SeperatorGroup_mitte60s"
                    },
                    {
                        "id": 189943,
                        "name": "RollerLubrication_RU4_TemperatureOilReturn"
                    },
                    {
                        "id": 190248,
                        "name": "RollerLubrication_RU4_TemperatureOilReturn_max60s"
                    },
                    {
                        "id": 190249,
                        "name": "RollerLubrication_RU4_TemperatureOilReturn_min60s"
                    },
                    {
                        "id": 190250,
                        "name": "RollerLubrication_RU4_TemperatureOilReturn_mitte60s"
                    },
                    {
                        "id": 189941,
                        "name": "RollerLubrication_RU4_TankTemperature"
                    },
                    {
                        "id": 190245,
                        "name": "RollerLubrication_RU4_TankTemperature_max60s"
                    },
                    {
                        "id": 190246,
                        "name": "RollerLubrication_RU4_TankTemperature_min60s"
                    },
                    {
                        "id": 190247,
                        "name": "RollerLubrication_RU4_TankTemperature_mitte60s"
                    },
                    {
                        "id": 189939,
                        "name": "RollerLubrication_RU4_Pump"
                    },
                    {
                        "id": 190242,
                        "name": "RollerLubrication_RU4_Pump_max60s"
                    },
                    {
                        "id": 190243,
                        "name": "RollerLubrication_RU4_Pump_min60s"
                    },
                    {
                        "id": 190244,
                        "name": "RollerLubrication_RU4_Pump_mitte60s"
                    },
                    {
                        "id": 189937,
                        "name": "RollerLubrication_RU4_LevelMinMin"
                    },
                    {
                        "id": 190236,
                        "name": "RollerLubrication_RU4_LevelMinMin_max60s"
                    },
                    {
                        "id": 190237,
                        "name": "RollerLubrication_RU4_LevelMinMin_min60s"
                    },
                    {
                        "id": 190238,
                        "name": "RollerLubrication_RU4_LevelMinMin_mitte60s"
                    },
                    {
                        "id": 189935,
                        "name": "RollerLubrication_RU4_LevelMin"
                    },
                    {
                        "id": 190239,
                        "name": "RollerLubrication_RU4_LevelMin_max60s"
                    },
                    {
                        "id": 190240,
                        "name": "RollerLubrication_RU4_LevelMin_min60s"
                    },
                    {
                        "id": 190241,
                        "name": "RollerLubrication_RU4_LevelMin_mitte60s"
                    },
                    {
                        "id": 189933,
                        "name": "RollerLubrication_RU4_Heater3"
                    },
                    {
                        "id": 190233,
                        "name": "RollerLubrication_RU4_Heater3_max60s"
                    },
                    {
                        "id": 190234,
                        "name": "RollerLubrication_RU4_Heater3_min60s"
                    },
                    {
                        "id": 190235,
                        "name": "RollerLubrication_RU4_Heater3_mitte60s"
                    },
                    {
                        "id": 189931,
                        "name": "RollerLubrication_RU4_Heater2"
                    },
                    {
                        "id": 190230,
                        "name": "RollerLubrication_RU4_Heater2_max60s"
                    },
                    {
                        "id": 190231,
                        "name": "RollerLubrication_RU4_Heater2_min60s"
                    },
                    {
                        "id": 190232,
                        "name": "RollerLubrication_RU4_Heater2_mitte60s"
                    },
                    {
                        "id": 189929,
                        "name": "RollerLubrication_RU4_Heater1"
                    },
                    {
                        "id": 190227,
                        "name": "RollerLubrication_RU4_Heater1_max60s"
                    },
                    {
                        "id": 190228,
                        "name": "RollerLubrication_RU4_Heater1_min60s"
                    },
                    {
                        "id": 190229,
                        "name": "RollerLubrication_RU4_Heater1_mitte60s"
                    },
                    {
                        "id": 189927,
                        "name": "RollerLubrication_RU4_Flow"
                    },
                    {
                        "id": 190224,
                        "name": "RollerLubrication_RU4_Flow_max60s"
                    },
                    {
                        "id": 190225,
                        "name": "RollerLubrication_RU4_Flow_min60s"
                    },
                    {
                        "id": 190226,
                        "name": "RollerLubrication_RU4_Flow_mitte60s"
                    },
                    {
                        "id": 189925,
                        "name": "RollerLubrication_RU4_FilterClogged"
                    },
                    {
                        "id": 190221,
                        "name": "RollerLubrication_RU4_FilterClogged_max60s"
                    },
                    {
                        "id": 190222,
                        "name": "RollerLubrication_RU4_FilterClogged_min60s"
                    },
                    {
                        "id": 190223,
                        "name": "RollerLubrication_RU4_FilterClogged_mitte60s"
                    },
                    {
                        "id": 189923,
                        "name": "RollerLubrication_RU4_CoolerMotor"
                    },
                    {
                        "id": 190218,
                        "name": "RollerLubrication_RU4_CoolerMotor_max60s"
                    },
                    {
                        "id": 190219,
                        "name": "RollerLubrication_RU4_CoolerMotor_min60s"
                    },
                    {
                        "id": 190220,
                        "name": "RollerLubrication_RU4_CoolerMotor_mitte60s"
                    },
                    {
                        "id": 189921,
                        "name": "RollerLubrication_RU3_TemperatureOilReturn"
                    },
                    {
                        "id": 190215,
                        "name": "RollerLubrication_RU3_TemperatureOilReturn_max60s"
                    },
                    {
                        "id": 190216,
                        "name": "RollerLubrication_RU3_TemperatureOilReturn_min60s"
                    },
                    {
                        "id": 190217,
                        "name": "RollerLubrication_RU3_TemperatureOilReturn_mitte60s"
                    },
                    {
                        "id": 189919,
                        "name": "RollerLubrication_RU3_TankTemperature"
                    },
                    {
                        "id": 190212,
                        "name": "RollerLubrication_RU3_TankTemperature_max60s"
                    },
                    {
                        "id": 190213,
                        "name": "RollerLubrication_RU3_TankTemperature_min60s"
                    },
                    {
                        "id": 190214,
                        "name": "RollerLubrication_RU3_TankTemperature_mitte60s"
                    },
                    {
                        "id": 189917,
                        "name": "RollerLubrication_RU3_Pump"
                    },
                    {
                        "id": 190209,
                        "name": "RollerLubrication_RU3_Pump_max60s"
                    },
                    {
                        "id": 190210,
                        "name": "RollerLubrication_RU3_Pump_min60s"
                    },
                    {
                        "id": 190211,
                        "name": "RollerLubrication_RU3_Pump_mitte60s"
                    },
                    {
                        "id": 189915,
                        "name": "RollerLubrication_RU3_LevelMinMin"
                    },
                    {
                        "id": 190203,
                        "name": "RollerLubrication_RU3_LevelMinMin_max60s"
                    },
                    {
                        "id": 190204,
                        "name": "RollerLubrication_RU3_LevelMinMin_min60s"
                    },
                    {
                        "id": 190205,
                        "name": "RollerLubrication_RU3_LevelMinMin_mitte60s"
                    },
                    {
                        "id": 189913,
                        "name": "RollerLubrication_RU3_LevelMin"
                    },
                    {
                        "id": 190206,
                        "name": "RollerLubrication_RU3_LevelMin_max60s"
                    },
                    {
                        "id": 190207,
                        "name": "RollerLubrication_RU3_LevelMin_min60s"
                    },
                    {
                        "id": 190208,
                        "name": "RollerLubrication_RU3_LevelMin_mitte60s"
                    },
                    {
                        "id": 189911,
                        "name": "RollerLubrication_RU3_Heater3"
                    },
                    {
                        "id": 190200,
                        "name": "RollerLubrication_RU3_Heater3_max60s"
                    },
                    {
                        "id": 190201,
                        "name": "RollerLubrication_RU3_Heater3_min60s"
                    },
                    {
                        "id": 190202,
                        "name": "RollerLubrication_RU3_Heater3_mitte60s"
                    },
                    {
                        "id": 189909,
                        "name": "RollerLubrication_RU3_Heater2"
                    },
                    {
                        "id": 190197,
                        "name": "RollerLubrication_RU3_Heater2_max60s"
                    },
                    {
                        "id": 190198,
                        "name": "RollerLubrication_RU3_Heater2_min60s"
                    },
                    {
                        "id": 190199,
                        "name": "RollerLubrication_RU3_Heater2_mitte60s"
                    },
                    {
                        "id": 189907,
                        "name": "RollerLubrication_RU3_Heater1"
                    },
                    {
                        "id": 190194,
                        "name": "RollerLubrication_RU3_Heater1_max60s"
                    },
                    {
                        "id": 190195,
                        "name": "RollerLubrication_RU3_Heater1_min60s"
                    },
                    {
                        "id": 190196,
                        "name": "RollerLubrication_RU3_Heater1_mitte60s"
                    },
                    {
                        "id": 189905,
                        "name": "RollerLubrication_RU3_Flow"
                    },
                    {
                        "id": 190191,
                        "name": "RollerLubrication_RU3_Flow_max60s"
                    },
                    {
                        "id": 190192,
                        "name": "RollerLubrication_RU3_Flow_min60s"
                    },
                    {
                        "id": 190193,
                        "name": "RollerLubrication_RU3_Flow_mitte60s"
                    },
                    {
                        "id": 189901,
                        "name": "RollerLubrication_RU3_FilterClogged"
                    },
                    {
                        "id": 190188,
                        "name": "RollerLubrication_RU3_FilterClogged_max60s"
                    },
                    {
                        "id": 190189,
                        "name": "RollerLubrication_RU3_FilterClogged_min60s"
                    },
                    {
                        "id": 190190,
                        "name": "RollerLubrication_RU3_FilterClogged_mitte60s"
                    },
                    {
                        "id": 189899,
                        "name": "RollerLubrication_RU3_CoolerMotor"
                    },
                    {
                        "id": 190185,
                        "name": "RollerLubrication_RU3_CoolerMotor_max60s"
                    },
                    {
                        "id": 190186,
                        "name": "RollerLubrication_RU3_CoolerMotor_min60s"
                    },
                    {
                        "id": 190187,
                        "name": "RollerLubrication_RU3_CoolerMotor_mitte60s"
                    },
                    {
                        "id": 189897,
                        "name": "RollerLubrication_RU2_TemperatureOilReturn"
                    },
                    {
                        "id": 190182,
                        "name": "RollerLubrication_RU2_TemperatureOilReturn_max60s"
                    },
                    {
                        "id": 190183,
                        "name": "RollerLubrication_RU2_TemperatureOilReturn_min60s"
                    },
                    {
                        "id": 190184,
                        "name": "RollerLubrication_RU2_TemperatureOilReturn_mitte60s"
                    },
                    {
                        "id": 189895,
                        "name": "RollerLubrication_RU2_TankTemperature"
                    },
                    {
                        "id": 190179,
                        "name": "RollerLubrication_RU2_TankTemperature_max60s"
                    },
                    {
                        "id": 190180,
                        "name": "RollerLubrication_RU2_TankTemperature_min60s"
                    },
                    {
                        "id": 190181,
                        "name": "RollerLubrication_RU2_TankTemperature_mitte60s"
                    },
                    {
                        "id": 189893,
                        "name": "RollerLubrication_RU2_Pump"
                    },
                    {
                        "id": 190176,
                        "name": "RollerLubrication_RU2_Pump_max60s"
                    },
                    {
                        "id": 190177,
                        "name": "RollerLubrication_RU2_Pump_min60s"
                    },
                    {
                        "id": 190178,
                        "name": "RollerLubrication_RU2_Pump_mitte60s"
                    },
                    {
                        "id": 189891,
                        "name": "RollerLubrication_RU2_LevelMinMin"
                    },
                    {
                        "id": 190170,
                        "name": "RollerLubrication_RU2_LevelMinMin_max60s"
                    },
                    {
                        "id": 190171,
                        "name": "RollerLubrication_RU2_LevelMinMin_min60s"
                    },
                    {
                        "id": 190172,
                        "name": "RollerLubrication_RU2_LevelMinMin_mitte60s"
                    },
                    {
                        "id": 189889,
                        "name": "RollerLubrication_RU2_LevelMin"
                    },
                    {
                        "id": 190173,
                        "name": "RollerLubrication_RU2_LevelMin_max60s"
                    },
                    {
                        "id": 190174,
                        "name": "RollerLubrication_RU2_LevelMin_min60s"
                    },
                    {
                        "id": 190175,
                        "name": "RollerLubrication_RU2_LevelMin_mitte60s"
                    },
                    {
                        "id": 189887,
                        "name": "RollerLubrication_RU2_Heater3"
                    },
                    {
                        "id": 190167,
                        "name": "RollerLubrication_RU2_Heater3_max60s"
                    },
                    {
                        "id": 190168,
                        "name": "RollerLubrication_RU2_Heater3_min60s"
                    },
                    {
                        "id": 190169,
                        "name": "RollerLubrication_RU2_Heater3_mitte60s"
                    },
                    {
                        "id": 189885,
                        "name": "RollerLubrication_RU2_Heater2"
                    },
                    {
                        "id": 190164,
                        "name": "RollerLubrication_RU2_Heater2_max60s"
                    },
                    {
                        "id": 190165,
                        "name": "RollerLubrication_RU2_Heater2_min60s"
                    },
                    {
                        "id": 190166,
                        "name": "RollerLubrication_RU2_Heater2_mitte60s"
                    },
                    {
                        "id": 189883,
                        "name": "RollerLubrication_RU2_Heater1"
                    },
                    {
                        "id": 190161,
                        "name": "RollerLubrication_RU2_Heater1_max60s"
                    },
                    {
                        "id": 190162,
                        "name": "RollerLubrication_RU2_Heater1_min60s"
                    },
                    {
                        "id": 190163,
                        "name": "RollerLubrication_RU2_Heater1_mitte60s"
                    },
                    {
                        "id": 189881,
                        "name": "RollerLubrication_RU2_Flow"
                    },
                    {
                        "id": 190158,
                        "name": "RollerLubrication_RU2_Flow_max60s"
                    },
                    {
                        "id": 190159,
                        "name": "RollerLubrication_RU2_Flow_min60s"
                    },
                    {
                        "id": 190160,
                        "name": "RollerLubrication_RU2_Flow_mitte60s"
                    },
                    {
                        "id": 189879,
                        "name": "RollerLubrication_RU2_FilterClogged"
                    },
                    {
                        "id": 190155,
                        "name": "RollerLubrication_RU2_FilterClogged_max60s"
                    },
                    {
                        "id": 190156,
                        "name": "RollerLubrication_RU2_FilterClogged_min60s"
                    },
                    {
                        "id": 190157,
                        "name": "RollerLubrication_RU2_FilterClogged_mitte60s"
                    },
                    {
                        "id": 189877,
                        "name": "RollerLubrication_RU2_CoolerMotor"
                    },
                    {
                        "id": 190152,
                        "name": "RollerLubrication_RU2_CoolerMotor_max60s"
                    },
                    {
                        "id": 190153,
                        "name": "RollerLubrication_RU2_CoolerMotor_min60s"
                    },
                    {
                        "id": 190154,
                        "name": "RollerLubrication_RU2_CoolerMotor_mitte60s"
                    },
                    {
                        "id": 189875,
                        "name": "RollerLubrication_RU1_TemperatureOilReturn"
                    },
                    {
                        "id": 190149,
                        "name": "RollerLubrication_RU1_TemperatureOilReturn_max60s"
                    },
                    {
                        "id": 190150,
                        "name": "RollerLubrication_RU1_TemperatureOilReturn_min60s"
                    },
                    {
                        "id": 190151,
                        "name": "RollerLubrication_RU1_TemperatureOilReturn_mitte60s"
                    },
                    {
                        "id": 189873,
                        "name": "RollerLubrication_RU1_TankTemperature"
                    },
                    {
                        "id": 190146,
                        "name": "RollerLubrication_RU1_TankTemperature_max60s"
                    },
                    {
                        "id": 190147,
                        "name": "RollerLubrication_RU1_TankTemperature_min60s"
                    },
                    {
                        "id": 190148,
                        "name": "RollerLubrication_RU1_TankTemperature_mitte60s"
                    },
                    {
                        "id": 189871,
                        "name": "RollerLubrication_RU1_Pump"
                    },
                    {
                        "id": 190143,
                        "name": "RollerLubrication_RU1_Pump_max60s"
                    },
                    {
                        "id": 190144,
                        "name": "RollerLubrication_RU1_Pump_min60s"
                    },
                    {
                        "id": 190145,
                        "name": "RollerLubrication_RU1_Pump_mitte60s"
                    },
                    {
                        "id": 189869,
                        "name": "RollerLubrication_RU1_LevelMinMin"
                    },
                    {
                        "id": 190137,
                        "name": "RollerLubrication_RU1_LevelMinMin_max60s"
                    },
                    {
                        "id": 190138,
                        "name": "RollerLubrication_RU1_LevelMinMin_min60s"
                    },
                    {
                        "id": 190139,
                        "name": "RollerLubrication_RU1_LevelMinMin_mitte60s"
                    },
                    {
                        "id": 189867,
                        "name": "RollerLubrication_RU1_LevelMin"
                    },
                    {
                        "id": 190140,
                        "name": "RollerLubrication_RU1_LevelMin_max60s"
                    },
                    {
                        "id": 190141,
                        "name": "RollerLubrication_RU1_LevelMin_min60s"
                    },
                    {
                        "id": 190142,
                        "name": "RollerLubrication_RU1_LevelMin_mitte60s"
                    },
                    {
                        "id": 189865,
                        "name": "RollerLubrication_RU1_Heater3"
                    },
                    {
                        "id": 190134,
                        "name": "RollerLubrication_RU1_Heater3_max60s"
                    },
                    {
                        "id": 190135,
                        "name": "RollerLubrication_RU1_Heater3_min60s"
                    },
                    {
                        "id": 190136,
                        "name": "RollerLubrication_RU1_Heater3_mitte60s"
                    },
                    {
                        "id": 189863,
                        "name": "RollerLubrication_RU1_Heater2"
                    },
                    {
                        "id": 190131,
                        "name": "RollerLubrication_RU1_Heater2_max60s"
                    },
                    {
                        "id": 190132,
                        "name": "RollerLubrication_RU1_Heater2_min60s"
                    },
                    {
                        "id": 190133,
                        "name": "RollerLubrication_RU1_Heater2_mitte60s"
                    },
                    {
                        "id": 189861,
                        "name": "RollerLubrication_RU1_Heater1"
                    },
                    {
                        "id": 190128,
                        "name": "RollerLubrication_RU1_Heater1_max60s"
                    },
                    {
                        "id": 190129,
                        "name": "RollerLubrication_RU1_Heater1_min60s"
                    },
                    {
                        "id": 190130,
                        "name": "RollerLubrication_RU1_Heater1_mitte60s"
                    },
                    {
                        "id": 189859,
                        "name": "RollerLubrication_RU1_Flow"
                    },
                    {
                        "id": 190125,
                        "name": "RollerLubrication_RU1_Flow_max60s"
                    },
                    {
                        "id": 190126,
                        "name": "RollerLubrication_RU1_Flow_min60s"
                    },
                    {
                        "id": 190127,
                        "name": "RollerLubrication_RU1_Flow_mitte60s"
                    },
                    {
                        "id": 189857,
                        "name": "RollerLubrication_RU1_FilterClogged"
                    },
                    {
                        "id": 190122,
                        "name": "RollerLubrication_RU1_FilterClogged_max60s"
                    },
                    {
                        "id": 190123,
                        "name": "RollerLubrication_RU1_FilterClogged_min60s"
                    },
                    {
                        "id": 190124,
                        "name": "RollerLubrication_RU1_FilterClogged_mitte60s"
                    },
                    {
                        "id": 189855,
                        "name": "RollerLubrication_RU1_CoolerMotor"
                    },
                    {
                        "id": 190119,
                        "name": "RollerLubrication_RU1_CoolerMotor_max60s"
                    },
                    {
                        "id": 190120,
                        "name": "RollerLubrication_RU1_CoolerMotor_min60s"
                    },
                    {
                        "id": 190121,
                        "name": "RollerLubrication_RU1_CoolerMotor_mitte60s"
                    },
                    {
                        "id": 189853,
                        "name": "RollerLubricationGroup"
                    },
                    {
                        "id": 190116,
                        "name": "RollerLubricationGroup_max60s"
                    },
                    {
                        "id": 190117,
                        "name": "RollerLubricationGroup_min60s"
                    },
                    {
                        "id": 190118,
                        "name": "RollerLubricationGroup_mitte60s"
                    },
                    {
                        "id": 189851,
                        "name": "PressureLiftRU4"
                    },
                    {
                        "id": 190113,
                        "name": "PressureLiftRU4_max60s"
                    },
                    {
                        "id": 190114,
                        "name": "PressureLiftRU4_min60s"
                    },
                    {
                        "id": 190115,
                        "name": "PressureLiftRU4_mitte60s"
                    },
                    {
                        "id": 189849,
                        "name": "PressureLiftRU3"
                    },
                    {
                        "id": 190110,
                        "name": "PressureLiftRU3_max60s"
                    },
                    {
                        "id": 190111,
                        "name": "PressureLiftRU3_min60s"
                    },
                    {
                        "id": 190112,
                        "name": "PressureLiftRU3_mitte60s"
                    },
                    {
                        "id": 189847,
                        "name": "PressureLiftRU2"
                    },
                    {
                        "id": 190107,
                        "name": "PressureLiftRU2_max60s"
                    },
                    {
                        "id": 190108,
                        "name": "PressureLiftRU2_min60s"
                    },
                    {
                        "id": 190109,
                        "name": "PressureLiftRU2_mitte60s"
                    },
                    {
                        "id": 189845,
                        "name": "PressureLiftRU1"
                    },
                    {
                        "id": 190104,
                        "name": "PressureLiftRU1_max60s"
                    },
                    {
                        "id": 190105,
                        "name": "PressureLiftRU1_min60s"
                    },
                    {
                        "id": 190106,
                        "name": "PressureLiftRU1_mitte60s"
                    },
                    {
                        "id": 189843,
                        "name": "PressureDiffCyclones"
                    },
                    {
                        "id": 190101,
                        "name": "PressureDiffCyclones_max60s"
                    },
                    {
                        "id": 190102,
                        "name": "PressureDiffCyclones_min60s"
                    },
                    {
                        "id": 190103,
                        "name": "PressureDiffCyclones_mitte60s"
                    },
                    {
                        "id": 189841,
                        "name": "PressureBeforeVenti"
                    },
                    {
                        "id": 190098,
                        "name": "PressureBeforeVenti_max60s"
                    },
                    {
                        "id": 190099,
                        "name": "PressureBeforeVenti_min60s"
                    },
                    {
                        "id": 190100,
                        "name": "PressureBeforeVenti_mitte60s"
                    },
                    {
                        "id": 189839,
                        "name": "PressureAfterMill_CIP"
                    },
                    {
                        "id": 189837,
                        "name": "PressureAfterMill"
                    },
                    {
                        "id": 190095,
                        "name": "PressureAfterMill_max60s"
                    },
                    {
                        "id": 190096,
                        "name": "PressureAfterMill_min60s"
                    },
                    {
                        "id": 190097,
                        "name": "PressureAfterMill_mitte60s"
                    },
                    {
                        "id": 189835,
                        "name": "PressureAfterFilter"
                    },
                    {
                        "id": 190092,
                        "name": "PressureAfterFilter_max60s"
                    },
                    {
                        "id": 190093,
                        "name": "PressureAfterFilter_min60s"
                    },
                    {
                        "id": 190094,
                        "name": "PressureAfterFilter_mitte60s"
                    },
                    {
                        "id": 189833,
                        "name": "PositionRejectFlap"
                    },
                    {
                        "id": 190089,
                        "name": "PositionRejectFlap_max60s"
                    },
                    {
                        "id": 190090,
                        "name": "PositionRejectFlap_min60s"
                    },
                    {
                        "id": 190091,
                        "name": "PositionRejectFlap_mitte60s"
                    },
                    {
                        "id": 189829,
                        "name": "OperatingHoursTotal"
                    },
                    {
                        "id": 190086,
                        "name": "OperatingHoursTotal_max60s"
                    },
                    {
                        "id": 190087,
                        "name": "OperatingHoursTotal_min60s"
                    },
                    {
                        "id": 190088,
                        "name": "OperatingHoursTotal_mitte60s"
                    },
                    {
                        "id": 189827,
                        "name": "MillFanGroup"
                    },
                    {
                        "id": 190083,
                        "name": "MillFanGroup_max60s"
                    },
                    {
                        "id": 190084,
                        "name": "MillFanGroup_min60s"
                    },
                    {
                        "id": 190085,
                        "name": "MillFanGroup_mitte60s"
                    },
                    {
                        "id": 189825,
                        "name": "MainDrivePower"
                    },
                    {
                        "id": 190080,
                        "name": "MainDrivePower_max60s"
                    },
                    {
                        "id": 190081,
                        "name": "MainDrivePower_min60s"
                    },
                    {
                        "id": 190082,
                        "name": "MainDrivePower_mitte60s"
                    },
                    {
                        "id": 189821,
                        "name": "MainDriveGroup"
                    },
                    {
                        "id": 190077,
                        "name": "MainDriveGroup_max60s"
                    },
                    {
                        "id": 190078,
                        "name": "MainDriveGroup_min60s"
                    },
                    {
                        "id": 190079,
                        "name": "MainDriveGroup_mitte60s"
                    },
                    {
                        "id": 189819,
                        "name": "Hydraulic_Y2"
                    },
                    {
                        "id": 190074,
                        "name": "Hydraulic_Y2_max60s"
                    },
                    {
                        "id": 190075,
                        "name": "Hydraulic_Y2_min60s"
                    },
                    {
                        "id": 190076,
                        "name": "Hydraulic_Y2_mitte60s"
                    },
                    {
                        "id": 189817,
                        "name": "Hydraulic_RU4_Y4"
                    },
                    {
                        "id": 190071,
                        "name": "Hydraulic_RU4_Y4_max60s"
                    },
                    {
                        "id": 190072,
                        "name": "Hydraulic_RU4_Y4_min60s"
                    },
                    {
                        "id": 190073,
                        "name": "Hydraulic_RU4_Y4_mitte60s"
                    },
                    {
                        "id": 189815,
                        "name": "Hydraulic_RU4_Y3"
                    },
                    {
                        "id": 190068,
                        "name": "Hydraulic_RU4_Y3_max60s"
                    },
                    {
                        "id": 190069,
                        "name": "Hydraulic_RU4_Y3_min60s"
                    },
                    {
                        "id": 190070,
                        "name": "Hydraulic_RU4_Y3_mitte60s"
                    },
                    {
                        "id": 189813,
                        "name": "Hydraulic_RU4_Y19"
                    },
                    {
                        "id": 190065,
                        "name": "Hydraulic_RU4_Y19_max60s"
                    },
                    {
                        "id": 190066,
                        "name": "Hydraulic_RU4_Y19_min60s"
                    },
                    {
                        "id": 190067,
                        "name": "Hydraulic_RU4_Y19_mitte60s"
                    },
                    {
                        "id": 189811,
                        "name": "Hydraulic_RU4_Y12"
                    },
                    {
                        "id": 190062,
                        "name": "Hydraulic_RU4_Y12_max60s"
                    },
                    {
                        "id": 190063,
                        "name": "Hydraulic_RU4_Y12_min60s"
                    },
                    {
                        "id": 190064,
                        "name": "Hydraulic_RU4_Y12_mitte60s"
                    },
                    {
                        "id": 189809,
                        "name": "Hydraulic_RU4_Y11"
                    },
                    {
                        "id": 190059,
                        "name": "Hydraulic_RU4_Y11_max60s"
                    },
                    {
                        "id": 190060,
                        "name": "Hydraulic_RU4_Y11_min60s"
                    },
                    {
                        "id": 190061,
                        "name": "Hydraulic_RU4_Y11_mitte60s"
                    },
                    {
                        "id": 189807,
                        "name": "Hydraulic_RU4_FilterClogged"
                    },
                    {
                        "id": 190056,
                        "name": "Hydraulic_RU4_FilterClogged_max60s"
                    },
                    {
                        "id": 190057,
                        "name": "Hydraulic_RU4_FilterClogged_min60s"
                    },
                    {
                        "id": 190058,
                        "name": "Hydraulic_RU4_FilterClogged_mitte60s"
                    },
                    {
                        "id": 189805,
                        "name": "Hydraulic_RU3_Y4"
                    },
                    {
                        "id": 190053,
                        "name": "Hydraulic_RU3_Y4_max60s"
                    },
                    {
                        "id": 190054,
                        "name": "Hydraulic_RU3_Y4_min60s"
                    },
                    {
                        "id": 190055,
                        "name": "Hydraulic_RU3_Y4_mitte60s"
                    },
                    {
                        "id": 189803,
                        "name": "Hydraulic_RU3_Y3"
                    },
                    {
                        "id": 190050,
                        "name": "Hydraulic_RU3_Y3_max60s"
                    },
                    {
                        "id": 190051,
                        "name": "Hydraulic_RU3_Y3_min60s"
                    },
                    {
                        "id": 190052,
                        "name": "Hydraulic_RU3_Y3_mitte60s"
                    },
                    {
                        "id": 189801,
                        "name": "Hydraulic_RU3_Y19"
                    },
                    {
                        "id": 190047,
                        "name": "Hydraulic_RU3_Y19_max60s"
                    },
                    {
                        "id": 190048,
                        "name": "Hydraulic_RU3_Y19_min60s"
                    },
                    {
                        "id": 190049,
                        "name": "Hydraulic_RU3_Y19_mitte60s"
                    },
                    {
                        "id": 189797,
                        "name": "Hydraulic_RU3_Y12"
                    },
                    {
                        "id": 190044,
                        "name": "Hydraulic_RU3_Y12_max60s"
                    },
                    {
                        "id": 190045,
                        "name": "Hydraulic_RU3_Y12_min60s"
                    },
                    {
                        "id": 190046,
                        "name": "Hydraulic_RU3_Y12_mitte60s"
                    },
                    {
                        "id": 189795,
                        "name": "HydraulicPumpCurrent"
                    },
                    {
                        "id": 189987,
                        "name": "HydraulicPumpCurrent_max60s"
                    },
                    {
                        "id": 189988,
                        "name": "HydraulicPumpCurrent_min60s"
                    },
                    {
                        "id": 189989,
                        "name": "HydraulicPumpCurrent_mitte60s"
                    },
                    {
                        "id": 189793,
                        "name": "Hydraulic_RU3_Y11"
                    },
                    {
                        "id": 190041,
                        "name": "Hydraulic_RU3_Y11_max60s"
                    },
                    {
                        "id": 190042,
                        "name": "Hydraulic_RU3_Y11_min60s"
                    },
                    {
                        "id": 190043,
                        "name": "Hydraulic_RU3_Y11_mitte60s"
                    },
                    {
                        "id": 189791,
                        "name": "HydraulicHeater2"
                    },
                    {
                        "id": 189984,
                        "name": "HydraulicHeater2_max60s"
                    },
                    {
                        "id": 189985,
                        "name": "HydraulicHeater2_min60s"
                    },
                    {
                        "id": 189986,
                        "name": "HydraulicHeater2_mitte60s"
                    },
                    {
                        "id": 189789,
                        "name": "Hydraulic_RU3_FilterClogged"
                    },
                    {
                        "id": 190038,
                        "name": "Hydraulic_RU3_FilterClogged_max60s"
                    },
                    {
                        "id": 190039,
                        "name": "Hydraulic_RU3_FilterClogged_min60s"
                    },
                    {
                        "id": 190040,
                        "name": "Hydraulic_RU3_FilterClogged_mitte60s"
                    },
                    {
                        "id": 189787,
                        "name": "HydraulicHeater1"
                    },
                    {
                        "id": 189981,
                        "name": "HydraulicHeater1_max60s"
                    },
                    {
                        "id": 189982,
                        "name": "HydraulicHeater1_min60s"
                    },
                    {
                        "id": 189983,
                        "name": "HydraulicHeater1_mitte60s"
                    },
                    {
                        "id": 189785,
                        "name": "Hydraulic_RU2_Y4"
                    },
                    {
                        "id": 190035,
                        "name": "Hydraulic_RU2_Y4_max60s"
                    },
                    {
                        "id": 190036,
                        "name": "Hydraulic_RU2_Y4_min60s"
                    },
                    {
                        "id": 190037,
                        "name": "Hydraulic_RU2_Y4_mitte60s"
                    },
                    {
                        "id": 189783,
                        "name": "HydraulicGroup"
                    },
                    {
                        "id": 189978,
                        "name": "HydraulicGroup_max60s"
                    },
                    {
                        "id": 189979,
                        "name": "HydraulicGroup_min60s"
                    },
                    {
                        "id": 189980,
                        "name": "HydraulicGroup_mitte60s"
                    },
                    {
                        "id": 189779,
                        "name": "Hydraulic_RU2_Y3"
                    },
                    {
                        "id": 190032,
                        "name": "Hydraulic_RU2_Y3_max60s"
                    },
                    {
                        "id": 190033,
                        "name": "Hydraulic_RU2_Y3_min60s"
                    },
                    {
                        "id": 190034,
                        "name": "Hydraulic_RU2_Y3_mitte60s"
                    },
                    {
                        "id": 189775,
                        "name": "GuideRailLubricationGroup"
                    },
                    {
                        "id": 189975,
                        "name": "GuideRailLubricationGroup_max60s"
                    },
                    {
                        "id": 189976,
                        "name": "GuideRailLubricationGroup_min60s"
                    },
                    {
                        "id": 189977,
                        "name": "GuideRailLubricationGroup_mitte60s"
                    },
                    {
                        "id": 189773,
                        "name": "Hydraulic_RU2_Y19"
                    },
                    {
                        "id": 190029,
                        "name": "Hydraulic_RU2_Y19_max60s"
                    },
                    {
                        "id": 190030,
                        "name": "Hydraulic_RU2_Y19_min60s"
                    },
                    {
                        "id": 190031,
                        "name": "Hydraulic_RU2_Y19_mitte60s"
                    },
                    {
                        "id": 189771,
                        "name": "FeedSand"
                    },
                    {
                        "id": 189972,
                        "name": "FeedSand_max60s"
                    },
                    {
                        "id": 189973,
                        "name": "FeedSand_min60s"
                    },
                    {
                        "id": 189974,
                        "name": "FeedSand_mitte60s"
                    },
                    {
                        "id": 189769,
                        "name": "Hydraulic_RU2_Y12"
                    },
                    {
                        "id": 190026,
                        "name": "Hydraulic_RU2_Y12_max60s"
                    },
                    {
                        "id": 190027,
                        "name": "Hydraulic_RU2_Y12_min60s"
                    },
                    {
                        "id": 190028,
                        "name": "Hydraulic_RU2_Y12_mitte60s"
                    },
                    {
                        "id": 189767,
                        "name": "FeedOre"
                    },
                    {
                        "id": 189969,
                        "name": "FeedOre_max60s"
                    },
                    {
                        "id": 189970,
                        "name": "FeedOre_min60s"
                    },
                    {
                        "id": 189971,
                        "name": "FeedOre_mitte60s"
                    },
                    {
                        "id": 189765,
                        "name": "Hydraulic_RU2_Y11"
                    },
                    {
                        "id": 190023,
                        "name": "Hydraulic_RU2_Y11_max60s"
                    },
                    {
                        "id": 190024,
                        "name": "Hydraulic_RU2_Y11_min60s"
                    },
                    {
                        "id": 190025,
                        "name": "Hydraulic_RU2_Y11_mitte60s"
                    },
                    {
                        "id": 189763,
                        "name": "FeedGravel2"
                    },
                    {
                        "id": 189966,
                        "name": "FeedGravel2_max60s"
                    },
                    {
                        "id": 189967,
                        "name": "FeedGravel2_min60s"
                    },
                    {
                        "id": 189968,
                        "name": "FeedGravel2_mitte60s"
                    },
                    {
                        "id": 189761,
                        "name": "Hydraulic_RU2_FilterClogged"
                    },
                    {
                        "id": 190020,
                        "name": "Hydraulic_RU2_FilterClogged_max60s"
                    },
                    {
                        "id": 190021,
                        "name": "Hydraulic_RU2_FilterClogged_min60s"
                    },
                    {
                        "id": 190022,
                        "name": "Hydraulic_RU2_FilterClogged_mitte60s"
                    },
                    {
                        "id": 189759,
                        "name": "FeedGravel1"
                    },
                    {
                        "id": 189963,
                        "name": "FeedGravel1_max60s"
                    },
                    {
                        "id": 189964,
                        "name": "FeedGravel1_min60s"
                    },
                    {
                        "id": 189965,
                        "name": "FeedGravel1_mitte60s"
                    },
                    {
                        "id": 189757,
                        "name": "Hydraulic_RU1_Y4"
                    },
                    {
                        "id": 190017,
                        "name": "Hydraulic_RU1_Y4_max60s"
                    },
                    {
                        "id": 190018,
                        "name": "Hydraulic_RU1_Y4_min60s"
                    },
                    {
                        "id": 190019,
                        "name": "Hydraulic_RU1_Y4_mitte60s"
                    },
                    {
                        "id": 189755,
                        "name": "Hydraulic_RU1_Y3"
                    },
                    {
                        "id": 190014,
                        "name": "Hydraulic_RU1_Y3_max60s"
                    },
                    {
                        "id": 190015,
                        "name": "Hydraulic_RU1_Y3_min60s"
                    },
                    {
                        "id": 190016,
                        "name": "Hydraulic_RU1_Y3_mitte60s"
                    },
                    {
                        "id": 189753,
                        "name": "Hydraulic_RU1_Y19"
                    },
                    {
                        "id": 190011,
                        "name": "Hydraulic_RU1_Y19_max60s"
                    },
                    {
                        "id": 190012,
                        "name": "Hydraulic_RU1_Y19_min60s"
                    },
                    {
                        "id": 190013,
                        "name": "Hydraulic_RU1_Y19_mitte60s"
                    },
                    {
                        "id": 189751,
                        "name": "Hydraulic_RU1_Y12"
                    },
                    {
                        "id": 190008,
                        "name": "Hydraulic_RU1_Y12_max60s"
                    },
                    {
                        "id": 190009,
                        "name": "Hydraulic_RU1_Y12_min60s"
                    },
                    {
                        "id": 190010,
                        "name": "Hydraulic_RU1_Y12_mitte60s"
                    },
                    {
                        "id": 189749,
                        "name": "Hydraulic_RU1_Y11"
                    },
                    {
                        "id": 190005,
                        "name": "Hydraulic_RU1_Y11_max60s"
                    },
                    {
                        "id": 190006,
                        "name": "Hydraulic_RU1_Y11_min60s"
                    },
                    {
                        "id": 190007,
                        "name": "Hydraulic_RU1_Y11_mitte60s"
                    },
                    {
                        "id": 189747,
                        "name": "Hydraulic_RU1_FilterClogged"
                    },
                    {
                        "id": 190002,
                        "name": "Hydraulic_RU1_FilterClogged_max60s"
                    },
                    {
                        "id": 190003,
                        "name": "Hydraulic_RU1_FilterClogged_min60s"
                    },
                    {
                        "id": 190004,
                        "name": "Hydraulic_RU1_FilterClogged_mitte60s"
                    },
                    {
                        "id": 189745,
                        "name": "HydraulicTankTemperature"
                    },
                    {
                        "id": 189999,
                        "name": "HydraulicTankTemperature_max60s"
                    },
                    {
                        "id": 190000,
                        "name": "HydraulicTankTemperature_min60s"
                    },
                    {
                        "id": 190001,
                        "name": "HydraulicTankTemperature_mitte60s"
                    },
                    {
                        "id": 189743,
                        "name": "HydraulicTankLevelMinMin"
                    },
                    {
                        "id": 189993,
                        "name": "HydraulicTankLevelMinMin_max60s"
                    },
                    {
                        "id": 189994,
                        "name": "HydraulicTankLevelMinMin_min60s"
                    },
                    {
                        "id": 189995,
                        "name": "HydraulicTankLevelMinMin_mitte60s"
                    },
                    {
                        "id": 189741,
                        "name": "HydraulicTankLevelMin"
                    },
                    {
                        "id": 189996,
                        "name": "HydraulicTankLevelMin_max60s"
                    },
                    {
                        "id": 189997,
                        "name": "HydraulicTankLevelMin_min60s"
                    },
                    {
                        "id": 189998,
                        "name": "HydraulicTankLevelMin_mitte60s"
                    },
                    {
                        "id": 189739,
                        "name": "HydraulicReturnFilterClogged"
                    },
                    {
                        "id": 189990,
                        "name": "HydraulicReturnFilterClogged_max60s"
                    },
                    {
                        "id": 189991,
                        "name": "HydraulicReturnFilterClogged_min60s"
                    },
                    {
                        "id": 189992,
                        "name": "HydraulicReturnFilterClogged_mitte60s"
                    },
                    {
                        "id": 209,
                        "name": "pSum_max60s"
                    },
                    {
                        "id": 210,
                        "name": "pSum_min60s"
                    },
                    {
                        "id": 211,
                        "name": "pSum_mitte60s"
                    },
                    {
                        "id": 212,
                        "name": "pSum_std60s"
                    },
                    {
                        "id": 315,
                        "name": "pSum_mitte1s"
                    },
                    {
                        "id": 13483,
                        "name": "pSum"
                    },
                    {
                        "id": 14287,
                        "name": "pSum_mitte5Hz"
                    },
                    {
                        "id": 14339,
                        "name": "pSum_mitte5min"
                    },
                    {
                        "id": 205,
                        "name": "lUARTDiagnose_max60s"
                    },
                    {
                        "id": 206,
                        "name": "lUARTDiagnose_min60s"
                    },
                    {
                        "id": 207,
                        "name": "lUARTDiagnose_mitte60s"
                    },
                    {
                        "id": 208,
                        "name": "lUARTDiagnose_std60s"
                    },
                    {
                        "id": 322,
                        "name": "lUARTDiagnose_mitte1s"
                    },
                    {
                        "id": 13489,
                        "name": "lUARTDiagnose"
                    },
                    {
                        "id": 14289,
                        "name": "lUARTDiagnose_mitte5Hz"
                    },
                    {
                        "id": 14340,
                        "name": "lUARTDiagnose_mitte5min"
                    },
                    {
                        "id": 201,
                        "name": "lRunState_max60s"
                    },
                    {
                        "id": 202,
                        "name": "lRunState_min60s"
                    },
                    {
                        "id": 203,
                        "name": "lRunState_mitte60s"
                    },
                    {
                        "id": 204,
                        "name": "lRunState_std60s"
                    },
                    {
                        "id": 321,
                        "name": "lRunState_mitte1s"
                    },
                    {
                        "id": 13492,
                        "name": "lRunState"
                    },
                    {
                        "id": 14288,
                        "name": "lRunState_mitte5Hz"
                    },
                    {
                        "id": 14338,
                        "name": "lRunState_mitte5min"
                    },
                    {
                        "id": 197,
                        "name": "lErrorState_max60s"
                    },
                    {
                        "id": 198,
                        "name": "lErrorState_min60s"
                    },
                    {
                        "id": 199,
                        "name": "lErrorState_mitte60s"
                    },
                    {
                        "id": 200,
                        "name": "lErrorState_std60s"
                    },
                    {
                        "id": 320,
                        "name": "lErrorState_mitte1s"
                    },
                    {
                        "id": 13487,
                        "name": "lErrorState"
                    },
                    {
                        "id": 14286,
                        "name": "lErrorState_mitte5Hz"
                    },
                    {
                        "id": 14333,
                        "name": "lErrorState_mitte5min"
                    },
                    {
                        "id": 193,
                        "name": "lDiagnoseRU4_max60s"
                    },
                    {
                        "id": 194,
                        "name": "lDiagnoseRU4_min60s"
                    },
                    {
                        "id": 195,
                        "name": "lDiagnoseRU4_mitte60s"
                    },
                    {
                        "id": 196,
                        "name": "lDiagnoseRU4_std60s"
                    },
                    {
                        "id": 319,
                        "name": "lDiagnoseRU4_mitte1s"
                    },
                    {
                        "id": 13491,
                        "name": "lDiagnoseRU4"
                    },
                    {
                        "id": 14284,
                        "name": "lDiagnoseRU4_mitte5Hz"
                    },
                    {
                        "id": 14330,
                        "name": "lDiagnoseRU4_mitte5min"
                    },
                    {
                        "id": 189,
                        "name": "lDiagnoseRU3_max60s"
                    },
                    {
                        "id": 190,
                        "name": "lDiagnoseRU3_min60s"
                    },
                    {
                        "id": 191,
                        "name": "lDiagnoseRU3_mitte60s"
                    },
                    {
                        "id": 192,
                        "name": "lDiagnoseRU3_std60s"
                    },
                    {
                        "id": 318,
                        "name": "lDiagnoseRU3_mitte1s"
                    },
                    {
                        "id": 13490,
                        "name": "lDiagnoseRU3"
                    },
                    {
                        "id": 14282,
                        "name": "lDiagnoseRU3_mitte5Hz"
                    },
                    {
                        "id": 14328,
                        "name": "lDiagnoseRU3_mitte5min"
                    },
                    {
                        "id": 185,
                        "name": "lDiagnoseRU2_max60s"
                    },
                    {
                        "id": 186,
                        "name": "lDiagnoseRU2_min60s"
                    },
                    {
                        "id": 187,
                        "name": "lDiagnoseRU2_mitte60s"
                    },
                    {
                        "id": 188,
                        "name": "lDiagnoseRU2_std60s"
                    },
                    {
                        "id": 317,
                        "name": "lDiagnoseRU2_mitte1s"
                    },
                    {
                        "id": 13488,
                        "name": "lDiagnoseRU2"
                    },
                    {
                        "id": 14285,
                        "name": "lDiagnoseRU2_mitte5Hz"
                    },
                    {
                        "id": 14342,
                        "name": "lDiagnoseRU2_mitte5min"
                    },
                    {
                        "id": 181,
                        "name": "lDiagnoseRU1_max60s"
                    },
                    {
                        "id": 182,
                        "name": "lDiagnoseRU1_min60s"
                    },
                    {
                        "id": 183,
                        "name": "lDiagnoseRU1_mitte60s"
                    },
                    {
                        "id": 184,
                        "name": "lDiagnoseRU1_std60s"
                    },
                    {
                        "id": 314,
                        "name": "lDiagnoseRU1_mitte1s"
                    },
                    {
                        "id": 13484,
                        "name": "lDiagnoseRU1"
                    },
                    {
                        "id": 14283,
                        "name": "lDiagnoseRU1_mitte5Hz"
                    },
                    {
                        "id": 14341,
                        "name": "lDiagnoseRU1_mitte5min"
                    },
                    {
                        "id": 177,
                        "name": "lDiagnoseGeneral_max60s"
                    },
                    {
                        "id": 178,
                        "name": "lDiagnoseGeneral_min60s"
                    },
                    {
                        "id": 179,
                        "name": "lDiagnoseGeneral_mitte60s"
                    },
                    {
                        "id": 180,
                        "name": "lDiagnoseGeneral_std60s"
                    },
                    {
                        "id": 311,
                        "name": "lDiagnoseGeneral_mitte1s"
                    },
                    {
                        "id": 13494,
                        "name": "lDiagnoseGeneral"
                    },
                    {
                        "id": 14281,
                        "name": "lDiagnoseGeneral_mitte5Hz"
                    },
                    {
                        "id": 14337,
                        "name": "lDiagnoseGeneral_mitte5min"
                    },
                    {
                        "id": 173,
                        "name": "e4_max60s"
                    },
                    {
                        "id": 174,
                        "name": "e4_min60s"
                    },
                    {
                        "id": 175,
                        "name": "e4_mitte60s"
                    },
                    {
                        "id": 176,
                        "name": "e4_std60s"
                    },
                    {
                        "id": 308,
                        "name": "e4_mitte1s"
                    },
                    {
                        "id": 13463,
                        "name": "e4"
                    },
                    {
                        "id": 14279,
                        "name": "e4_mitte5Hz"
                    },
                    {
                        "id": 14335,
                        "name": "e4_mitte5min"
                    },
                    {
                        "id": 169,
                        "name": "e3_max60s"
                    },
                    {
                        "id": 170,
                        "name": "e3_min60s"
                    },
                    {
                        "id": 171,
                        "name": "e3_mitte60s"
                    },
                    {
                        "id": 172,
                        "name": "e3_std60s"
                    },
                    {
                        "id": 316,
                        "name": "e3_mitte1s"
                    },
                    {
                        "id": 13461,
                        "name": "e3"
                    },
                    {
                        "id": 14277,
                        "name": "e3_mitte5Hz"
                    },
                    {
                        "id": 14332,
                        "name": "e3_mitte5min"
                    },
                    {
                        "id": 165,
                        "name": "e2_max60s"
                    },
                    {
                        "id": 166,
                        "name": "e2_min60s"
                    },
                    {
                        "id": 167,
                        "name": "e2_mitte60s"
                    },
                    {
                        "id": 168,
                        "name": "e2_std60s"
                    },
                    {
                        "id": 313,
                        "name": "e2_mitte1s"
                    },
                    {
                        "id": 13464,
                        "name": "e2"
                    },
                    {
                        "id": 14274,
                        "name": "e2_mitte5Hz"
                    },
                    {
                        "id": 14329,
                        "name": "e2_mitte5min"
                    },
                    {
                        "id": 161,
                        "name": "e1_max60s"
                    },
                    {
                        "id": 162,
                        "name": "e1_min60s"
                    },
                    {
                        "id": 163,
                        "name": "e1_mitte60s"
                    },
                    {
                        "id": 164,
                        "name": "e1_std60s"
                    },
                    {
                        "id": 310,
                        "name": "e1_mitte1s"
                    },
                    {
                        "id": 13458,
                        "name": "e1"
                    },
                    {
                        "id": 14272,
                        "name": "e1_mitte5Hz"
                    },
                    {
                        "id": 14326,
                        "name": "e1_mitte5min"
                    },
                    {
                        "id": 157,
                        "name": "WaterFlowRate_max60s"
                    },
                    {
                        "id": 158,
                        "name": "WaterFlowRate_min60s"
                    },
                    {
                        "id": 159,
                        "name": "WaterFlowRate_mitte60s"
                    },
                    {
                        "id": 160,
                        "name": "WaterFlowRate_std60s"
                    },
                    {
                        "id": 307,
                        "name": "WaterFlowRate_mitte1s"
                    },
                    {
                        "id": 13445,
                        "name": "WaterFlowRate"
                    },
                    {
                        "id": 14271,
                        "name": "WaterFlowRate_mitte5Hz"
                    },
                    {
                        "id": 14323,
                        "name": "WaterFlowRate_mitte5min"
                    },
                    {
                        "id": 153,
                        "name": "VibrationRU4_max60s"
                    },
                    {
                        "id": 154,
                        "name": "VibrationRU4_min60s"
                    },
                    {
                        "id": 155,
                        "name": "VibrationRU4_mitte60s"
                    },
                    {
                        "id": 156,
                        "name": "VibrationRU4_std60s"
                    },
                    {
                        "id": 312,
                        "name": "VibrationRU4_mitte1s"
                    },
                    {
                        "id": 13476,
                        "name": "VibrationRU4"
                    },
                    {
                        "id": 14280,
                        "name": "VibrationRU4_mitte5Hz"
                    },
                    {
                        "id": 14321,
                        "name": "VibrationRU4_mitte5min"
                    },
                    {
                        "id": 149,
                        "name": "VibrationRU3_max60s"
                    },
                    {
                        "id": 150,
                        "name": "VibrationRU3_min60s"
                    },
                    {
                        "id": 151,
                        "name": "VibrationRU3_mitte60s"
                    },
                    {
                        "id": 152,
                        "name": "VibrationRU3_std60s"
                    },
                    {
                        "id": 309,
                        "name": "VibrationRU3_mitte1s"
                    },
                    {
                        "id": 13473,
                        "name": "VibrationRU3"
                    },
                    {
                        "id": 14278,
                        "name": "VibrationRU3_mitte5Hz"
                    },
                    {
                        "id": 14318,
                        "name": "VibrationRU3_mitte5min"
                    },
                    {
                        "id": 145,
                        "name": "VibrationRU2_max60s"
                    },
                    {
                        "id": 146,
                        "name": "VibrationRU2_min60s"
                    },
                    {
                        "id": 147,
                        "name": "VibrationRU2_mitte60s"
                    },
                    {
                        "id": 148,
                        "name": "VibrationRU2_std60s"
                    },
                    {
                        "id": 306,
                        "name": "VibrationRU2_mitte1s"
                    },
                    {
                        "id": 13470,
                        "name": "VibrationRU2"
                    },
                    {
                        "id": 14276,
                        "name": "VibrationRU2_mitte5Hz"
                    },
                    {
                        "id": 14336,
                        "name": "VibrationRU2_mitte5min"
                    },
                    {
                        "id": 141,
                        "name": "VibrationRU1_max60s"
                    },
                    {
                        "id": 142,
                        "name": "VibrationRU1_min60s"
                    },
                    {
                        "id": 143,
                        "name": "VibrationRU1_mitte60s"
                    },
                    {
                        "id": 144,
                        "name": "VibrationRU1_std60s"
                    },
                    {
                        "id": 303,
                        "name": "VibrationRU1_mitte1s"
                    },
                    {
                        "id": 13467,
                        "name": "VibrationRU1"
                    },
                    {
                        "id": 14275,
                        "name": "VibrationRU1_mitte5Hz"
                    },
                    {
                        "id": 14334,
                        "name": "VibrationRU1_mitte5min"
                    },
                    {
                        "id": 137,
                        "name": "VibrationMill_max60s"
                    },
                    {
                        "id": 138,
                        "name": "VibrationMill_min60s"
                    },
                    {
                        "id": 139,
                        "name": "VibrationMill_mitte60s"
                    },
                    {
                        "id": 140,
                        "name": "VibrationMill_std60s"
                    },
                    {
                        "id": 301,
                        "name": "VibrationMill_mitte1s"
                    },
                    {
                        "id": 13480,
                        "name": "VibrationMill"
                    },
                    {
                        "id": 14273,
                        "name": "VibrationMill_mitte5Hz"
                    },
                    {
                        "id": 14331,
                        "name": "VibrationMill_mitte5min"
                    },
                    {
                        "id": 133,
                        "name": "VentilatorSpeed_max60s"
                    },
                    {
                        "id": 134,
                        "name": "VentilatorSpeed_min60s"
                    },
                    {
                        "id": 135,
                        "name": "VentilatorSpeed_mitte60s"
                    },
                    {
                        "id": 136,
                        "name": "VentilatorSpeed_std60s"
                    },
                    {
                        "id": 299,
                        "name": "VentilatorSpeed_mitte1s"
                    },
                    {
                        "id": 13450,
                        "name": "VentilatorSpeed"
                    },
                    {
                        "id": 14270,
                        "name": "VentilatorSpeed_mitte5Hz"
                    },
                    {
                        "id": 14327,
                        "name": "VentilatorSpeed_mitte5min"
                    },
                    {
                        "id": 129,
                        "name": "VentilatorPower_max60s"
                    },
                    {
                        "id": 130,
                        "name": "VentilatorPower_min60s"
                    },
                    {
                        "id": 131,
                        "name": "VentilatorPower_mitte60s"
                    },
                    {
                        "id": 132,
                        "name": "VentilatorPower_std60s"
                    },
                    {
                        "id": 304,
                        "name": "VentilatorPower_mitte1s"
                    },
                    {
                        "id": 13451,
                        "name": "VentilatorPower"
                    },
                    {
                        "id": 14269,
                        "name": "VentilatorPower_mitte5Hz"
                    },
                    {
                        "id": 14325,
                        "name": "VentilatorPower_mitte5min"
                    },
                    {
                        "id": 125,
                        "name": "UptimeMill_h_max60s"
                    },
                    {
                        "id": 126,
                        "name": "UptimeMill_h_min60s"
                    },
                    {
                        "id": 127,
                        "name": "UptimeMill_h_mitte60s"
                    },
                    {
                        "id": 128,
                        "name": "UptimeMill_h_std60s"
                    },
                    {
                        "id": 300,
                        "name": "UptimeMill_h_mitte1s"
                    },
                    {
                        "id": 13486,
                        "name": "UptimeMill_h"
                    },
                    {
                        "id": 14267,
                        "name": "UptimeMill_h_mitte5Hz"
                    },
                    {
                        "id": 14322,
                        "name": "UptimeMill_h_mitte5min"
                    },
                    {
                        "id": 121,
                        "name": "TotalFeed_max60s"
                    },
                    {
                        "id": 122,
                        "name": "TotalFeed_min60s"
                    },
                    {
                        "id": 123,
                        "name": "TotalFeed_mitte60s"
                    },
                    {
                        "id": 124,
                        "name": "TotalFeed_std60s"
                    },
                    {
                        "id": 297,
                        "name": "TotalFeed_mitte1s"
                    },
                    {
                        "id": 13453,
                        "name": "TotalFeed"
                    },
                    {
                        "id": 14265,
                        "name": "TotalFeed_mitte5Hz"
                    },
                    {
                        "id": 14319,
                        "name": "TotalFeed_mitte5min"
                    },
                    {
                        "id": 117,
                        "name": "TorqueMainDrive_max60s"
                    },
                    {
                        "id": 118,
                        "name": "TorqueMainDrive_min60s"
                    },
                    {
                        "id": 119,
                        "name": "TorqueMainDrive_mitte60s"
                    },
                    {
                        "id": 120,
                        "name": "TorqueMainDrive_std60s"
                    },
                    {
                        "id": 295,
                        "name": "TorqueMainDrive_mitte1s"
                    },
                    {
                        "id": 13465,
                        "name": "TorqueMainDrive"
                    },
                    {
                        "id": 14263,
                        "name": "TorqueMainDrive_mitte5Hz"
                    },
                    {
                        "id": 14316,
                        "name": "TorqueMainDrive_mitte5min"
                    },
                    {
                        "id": 113,
                        "name": "TempBeforeMill_max60s"
                    },
                    {
                        "id": 114,
                        "name": "TempBeforeMill_min60s"
                    },
                    {
                        "id": 115,
                        "name": "TempBeforeMill_mitte60s"
                    },
                    {
                        "id": 116,
                        "name": "TempBeforeMill_std60s"
                    },
                    {
                        "id": 292,
                        "name": "TempBeforeMill_mitte1s"
                    },
                    {
                        "id": 13443,
                        "name": "TempBeforeMill"
                    },
                    {
                        "id": 14260,
                        "name": "TempBeforeMill_mitte5Hz"
                    },
                    {
                        "id": 14315,
                        "name": "TempBeforeMill_mitte5min"
                    },
                    {
                        "id": 109,
                        "name": "TempAfterMill_max60s"
                    },
                    {
                        "id": 110,
                        "name": "TempAfterMill_min60s"
                    },
                    {
                        "id": 111,
                        "name": "TempAfterMill_mitte60s"
                    },
                    {
                        "id": 112,
                        "name": "TempAfterMill_std60s"
                    },
                    {
                        "id": 289,
                        "name": "TempAfterMill_mitte1s"
                    },
                    {
                        "id": 13444,
                        "name": "TempAfterMill"
                    },
                    {
                        "id": 14258,
                        "name": "TempAfterMill_mitte5Hz"
                    },
                    {
                        "id": 14312,
                        "name": "TempAfterMill_mitte5min"
                    },
                    {
                        "id": 105,
                        "name": "StatusWordMPS_max60s"
                    },
                    {
                        "id": 106,
                        "name": "StatusWordMPS_min60s"
                    },
                    {
                        "id": 107,
                        "name": "StatusWordMPS_mitte60s"
                    },
                    {
                        "id": 108,
                        "name": "StatusWordMPS_std60s"
                    },
                    {
                        "id": 287,
                        "name": "StatusWordMPS_mitte1s"
                    },
                    {
                        "id": 13454,
                        "name": "StatusWordMPS"
                    },
                    {
                        "id": 14255,
                        "name": "StatusWordMPS_mitte5Hz"
                    },
                    {
                        "id": 14307,
                        "name": "StatusWordMPS_mitte5min"
                    },
                    {
                        "id": 101,
                        "name": "SpeedRU4_max60s"
                    },
                    {
                        "id": 102,
                        "name": "SpeedRU4_min60s"
                    },
                    {
                        "id": 103,
                        "name": "SpeedRU4_mitte60s"
                    },
                    {
                        "id": 104,
                        "name": "SpeedRU4_std60s"
                    },
                    {
                        "id": 305,
                        "name": "SpeedRU4_mitte1s"
                    },
                    {
                        "id": 13485,
                        "name": "SpeedRU4"
                    },
                    {
                        "id": 14268,
                        "name": "SpeedRU4_mitte5Hz"
                    },
                    {
                        "id": 14324,
                        "name": "SpeedRU4_mitte5min"
                    },
                    {
                        "id": 97,
                        "name": "SpeedRU3_max60s"
                    },
                    {
                        "id": 98,
                        "name": "SpeedRU3_min60s"
                    },
                    {
                        "id": 99,
                        "name": "SpeedRU3_mitte60s"
                    },
                    {
                        "id": 100,
                        "name": "SpeedRU3_std60s"
                    },
                    {
                        "id": 302,
                        "name": "SpeedRU3_mitte1s"
                    },
                    {
                        "id": 13481,
                        "name": "SpeedRU3"
                    },
                    {
                        "id": 14266,
                        "name": "SpeedRU3_mitte5Hz"
                    },
                    {
                        "id": 14320,
                        "name": "SpeedRU3_mitte5min"
                    },
                    {
                        "id": 93,
                        "name": "SpeedRU2_max60s"
                    },
                    {
                        "id": 94,
                        "name": "SpeedRU2_min60s"
                    },
                    {
                        "id": 95,
                        "name": "SpeedRU2_mitte60s"
                    },
                    {
                        "id": 96,
                        "name": "SpeedRU2_std60s"
                    },
                    {
                        "id": 298,
                        "name": "SpeedRU2_mitte1s"
                    },
                    {
                        "id": 13478,
                        "name": "SpeedRU2"
                    },
                    {
                        "id": 14264,
                        "name": "SpeedRU2_mitte5Hz"
                    },
                    {
                        "id": 14317,
                        "name": "SpeedRU2_mitte5min"
                    },
                    {
                        "id": 89,
                        "name": "SpeedRU1_max60s"
                    },
                    {
                        "id": 90,
                        "name": "SpeedRU1_min60s"
                    },
                    {
                        "id": 91,
                        "name": "SpeedRU1_mitte60s"
                    },
                    {
                        "id": 92,
                        "name": "SpeedRU1_std60s"
                    },
                    {
                        "id": 296,
                        "name": "SpeedRU1_mitte1s"
                    },
                    {
                        "id": 13475,
                        "name": "SpeedRU1"
                    },
                    {
                        "id": 14262,
                        "name": "SpeedRU1_mitte5Hz"
                    },
                    {
                        "id": 14314,
                        "name": "SpeedRU1_mitte5min"
                    },
                    {
                        "id": 85,
                        "name": "SeparatorSpeed_max60s"
                    },
                    {
                        "id": 86,
                        "name": "SeparatorSpeed_min60s"
                    },
                    {
                        "id": 87,
                        "name": "SeparatorSpeed_mitte60s"
                    },
                    {
                        "id": 88,
                        "name": "SeparatorSpeed_std60s"
                    },
                    {
                        "id": 294,
                        "name": "SeparatorSpeed_mitte1s"
                    },
                    {
                        "id": 13448,
                        "name": "SeparatorSpeed"
                    },
                    {
                        "id": 14261,
                        "name": "SeparatorSpeed_mitte5Hz"
                    },
                    {
                        "id": 14311,
                        "name": "SeparatorSpeed_mitte5min"
                    },
                    {
                        "id": 81,
                        "name": "SeparatorPower_max60s"
                    },
                    {
                        "id": 82,
                        "name": "SeparatorPower_min60s"
                    },
                    {
                        "id": 83,
                        "name": "SeparatorPower_mitte60s"
                    },
                    {
                        "id": 84,
                        "name": "SeparatorPower_std60s"
                    },
                    {
                        "id": 293,
                        "name": "SeparatorPower_mitte1s"
                    },
                    {
                        "id": 13449,
                        "name": "SeparatorPower"
                    },
                    {
                        "id": 14259,
                        "name": "SeparatorPower_mitte5Hz"
                    },
                    {
                        "id": 14309,
                        "name": "SeparatorPower_mitte5min"
                    },
                    {
                        "id": 77,
                        "name": "PressureRU4_max60s"
                    },
                    {
                        "id": 78,
                        "name": "PressureRU4_min60s"
                    },
                    {
                        "id": 79,
                        "name": "PressureRU4_mitte60s"
                    },
                    {
                        "id": 80,
                        "name": "PressureRU4_std60s"
                    },
                    {
                        "id": 291,
                        "name": "PressureRU4_mitte1s"
                    },
                    {
                        "id": 13482,
                        "name": "PressureRU4"
                    },
                    {
                        "id": 14257,
                        "name": "PressureRU4_mitte5Hz"
                    },
                    {
                        "id": 14313,
                        "name": "PressureRU4_mitte5min"
                    },
                    {
                        "id": 73,
                        "name": "PressureRU3_max60s"
                    },
                    {
                        "id": 74,
                        "name": "PressureRU3_min60s"
                    },
                    {
                        "id": 75,
                        "name": "PressureRU3_mitte60s"
                    },
                    {
                        "id": 76,
                        "name": "PressureRU3_std60s"
                    },
                    {
                        "id": 290,
                        "name": "PressureRU3_mitte1s"
                    },
                    {
                        "id": 13479,
                        "name": "PressureRU3"
                    },
                    {
                        "id": 14256,
                        "name": "PressureRU3_mitte5Hz"
                    },
                    {
                        "id": 14310,
                        "name": "PressureRU3_mitte5min"
                    },
                    {
                        "id": 69,
                        "name": "PressureRU2_max60s"
                    },
                    {
                        "id": 70,
                        "name": "PressureRU2_min60s"
                    },
                    {
                        "id": 71,
                        "name": "PressureRU2_mitte60s"
                    },
                    {
                        "id": 72,
                        "name": "PressureRU2_std60s"
                    },
                    {
                        "id": 288,
                        "name": "PressureRU2_mitte1s"
                    },
                    {
                        "id": 13477,
                        "name": "PressureRU2"
                    },
                    {
                        "id": 14254,
                        "name": "PressureRU2_mitte5Hz"
                    },
                    {
                        "id": 14308,
                        "name": "PressureRU2_mitte5min"
                    },
                    {
                        "id": 65,
                        "name": "PressureRU1_max60s"
                    },
                    {
                        "id": 66,
                        "name": "PressureRU1_min60s"
                    },
                    {
                        "id": 67,
                        "name": "PressureRU1_mitte60s"
                    },
                    {
                        "id": 68,
                        "name": "PressureRU1_std60s"
                    },
                    {
                        "id": 285,
                        "name": "PressureRU1_mitte1s"
                    },
                    {
                        "id": 13474,
                        "name": "PressureRU1"
                    },
                    {
                        "id": 14253,
                        "name": "PressureRU1_mitte5Hz"
                    },
                    {
                        "id": 14305,
                        "name": "PressureRU1_mitte5min"
                    },
                    {
                        "id": 61,
                        "name": "PressureDiffMill_max60s"
                    },
                    {
                        "id": 62,
                        "name": "PressureDiffMill_min60s"
                    },
                    {
                        "id": 63,
                        "name": "PressureDiffMill_mitte60s"
                    },
                    {
                        "id": 64,
                        "name": "PressureDiffMill_std60s"
                    },
                    {
                        "id": 286,
                        "name": "PressureDiffMill_mitte1s"
                    },
                    {
                        "id": 13446,
                        "name": "PressureDiffMill"
                    },
                    {
                        "id": 14252,
                        "name": "PressureDiffMill_mitte5Hz"
                    },
                    {
                        "id": 14303,
                        "name": "PressureDiffMill_mitte5min"
                    },
                    {
                        "id": 57,
                        "name": "PressureBeforeMill_max60s"
                    },
                    {
                        "id": 58,
                        "name": "PressureBeforeMill_min60s"
                    },
                    {
                        "id": 59,
                        "name": "PressureBeforeMill_mitte60s"
                    },
                    {
                        "id": 60,
                        "name": "PressureBeforeMill_std60s"
                    },
                    {
                        "id": 284,
                        "name": "PressureBeforeMill_mitte1s"
                    },
                    {
                        "id": 13447,
                        "name": "PressureBeforeMill"
                    },
                    {
                        "id": 14251,
                        "name": "PressureBeforeMill_mitte5Hz"
                    },
                    {
                        "id": 14301,
                        "name": "PressureBeforeMill_mitte5min"
                    },
                    {
                        "id": 53,
                        "name": "PositionRU4_max60s"
                    },
                    {
                        "id": 54,
                        "name": "PositionRU4_min60s"
                    },
                    {
                        "id": 55,
                        "name": "PositionRU4_mitte60s"
                    },
                    {
                        "id": 56,
                        "name": "PositionRU4_std60s"
                    },
                    {
                        "id": 280,
                        "name": "PositionRU4_mitte1s"
                    },
                    {
                        "id": 13472,
                        "name": "PositionRU4"
                    },
                    {
                        "id": 14250,
                        "name": "PositionRU4_mitte5Hz"
                    },
                    {
                        "id": 14299,
                        "name": "PositionRU4_mitte5min"
                    },
                    {
                        "id": 49,
                        "name": "PositionRU3_max60s"
                    },
                    {
                        "id": 50,
                        "name": "PositionRU3_min60s"
                    },
                    {
                        "id": 51,
                        "name": "PositionRU3_mitte60s"
                    },
                    {
                        "id": 52,
                        "name": "PositionRU3_std60s"
                    },
                    {
                        "id": 283,
                        "name": "PositionRU3_mitte1s"
                    },
                    {
                        "id": 13469,
                        "name": "PositionRU3"
                    },
                    {
                        "id": 14249,
                        "name": "PositionRU3_mitte5Hz"
                    },
                    {
                        "id": 14306,
                        "name": "PositionRU3_mitte5min"
                    },
                    {
                        "id": 45,
                        "name": "PositionRU2_max60s"
                    },
                    {
                        "id": 46,
                        "name": "PositionRU2_min60s"
                    },
                    {
                        "id": 47,
                        "name": "PositionRU2_mitte60s"
                    },
                    {
                        "id": 48,
                        "name": "PositionRU2_std60s"
                    },
                    {
                        "id": 282,
                        "name": "PositionRU2_mitte1s"
                    },
                    {
                        "id": 13468,
                        "name": "PositionRU2"
                    },
                    {
                        "id": 14248,
                        "name": "PositionRU2_mitte5Hz"
                    },
                    {
                        "id": 14304,
                        "name": "PositionRU2_mitte5min"
                    },
                    {
                        "id": 41,
                        "name": "PositionRU1_max60s"
                    },
                    {
                        "id": 42,
                        "name": "PositionRU1_min60s"
                    },
                    {
                        "id": 43,
                        "name": "PositionRU1_mitte60s"
                    },
                    {
                        "id": 44,
                        "name": "PositionRU1_std60s"
                    },
                    {
                        "id": 281,
                        "name": "PositionRU1_mitte1s"
                    },
                    {
                        "id": 13466,
                        "name": "PositionRU1"
                    },
                    {
                        "id": 14247,
                        "name": "PositionRU1_mitte5Hz"
                    },
                    {
                        "id": 14302,
                        "name": "PositionRU1_mitte5min"
                    },
                    {
                        "id": 37,
                        "name": "Performance_max60s"
                    },
                    {
                        "id": 38,
                        "name": "Performance_min60s"
                    },
                    {
                        "id": 39,
                        "name": "Performance_mitte60s"
                    },
                    {
                        "id": 40,
                        "name": "Performance_std60s"
                    },
                    {
                        "id": 279,
                        "name": "Performance_mitte1s"
                    },
                    {
                        "id": 13493,
                        "name": "Performance"
                    },
                    {
                        "id": 14246,
                        "name": "Performance_mitte5Hz"
                    },
                    {
                        "id": 14300,
                        "name": "Performance_mitte5min"
                    },
                    {
                        "id": 33,
                        "name": "MotorSpeed_max60s"
                    },
                    {
                        "id": 34,
                        "name": "MotorSpeed_min60s"
                    },
                    {
                        "id": 35,
                        "name": "MotorSpeed_mitte60s"
                    },
                    {
                        "id": 36,
                        "name": "MotorSpeed_std60s"
                    },
                    {
                        "id": 278,
                        "name": "MotorSpeed_mitte1s"
                    },
                    {
                        "id": 13471,
                        "name": "MotorSpeed"
                    },
                    {
                        "id": 14245,
                        "name": "MotorSpeed_mitte5Hz"
                    },
                    {
                        "id": 14298,
                        "name": "MotorSpeed_mitte5min"
                    },
                    {
                        "id": 29,
                        "name": "LoadRU4_max60s"
                    },
                    {
                        "id": 30,
                        "name": "LoadRU4_min60s"
                    },
                    {
                        "id": 31,
                        "name": "LoadRU4_mitte60s"
                    },
                    {
                        "id": 32,
                        "name": "LoadRU4_std60s"
                    },
                    {
                        "id": 277,
                        "name": "LoadRU4_mitte1s"
                    },
                    {
                        "id": 13462,
                        "name": "LoadRU4"
                    },
                    {
                        "id": 14244,
                        "name": "LoadRU4_mitte5Hz"
                    },
                    {
                        "id": 14297,
                        "name": "LoadRU4_mitte5min"
                    },
                    {
                        "id": 25,
                        "name": "LoadRU3_max60s"
                    },
                    {
                        "id": 26,
                        "name": "LoadRU3_min60s"
                    },
                    {
                        "id": 27,
                        "name": "LoadRU3_mitte60s"
                    },
                    {
                        "id": 28,
                        "name": "LoadRU3_std60s"
                    },
                    {
                        "id": 276,
                        "name": "LoadRU3_mitte1s"
                    },
                    {
                        "id": 13460,
                        "name": "LoadRU3"
                    },
                    {
                        "id": 14243,
                        "name": "LoadRU3_mitte5Hz"
                    },
                    {
                        "id": 14296,
                        "name": "LoadRU3_mitte5min"
                    },
                    {
                        "id": 21,
                        "name": "LoadRU2_max60s"
                    },
                    {
                        "id": 22,
                        "name": "LoadRU2_min60s"
                    },
                    {
                        "id": 23,
                        "name": "LoadRU2_mitte60s"
                    },
                    {
                        "id": 24,
                        "name": "LoadRU2_std60s"
                    },
                    {
                        "id": 275,
                        "name": "LoadRU2_mitte1s"
                    },
                    {
                        "id": 13459,
                        "name": "LoadRU2"
                    },
                    {
                        "id": 14242,
                        "name": "LoadRU2_mitte5Hz"
                    },
                    {
                        "id": 14295,
                        "name": "LoadRU2_mitte5min"
                    },
                    {
                        "id": 17,
                        "name": "LoadRU1_max60s"
                    },
                    {
                        "id": 18,
                        "name": "LoadRU1_min60s"
                    },
                    {
                        "id": 19,
                        "name": "LoadRU1_mitte60s"
                    },
                    {
                        "id": 20,
                        "name": "LoadRU1_std60s"
                    },
                    {
                        "id": 274,
                        "name": "LoadRU1_mitte1s"
                    },
                    {
                        "id": 13457,
                        "name": "LoadRU1"
                    },
                    {
                        "id": 14241,
                        "name": "LoadRU1_mitte5Hz"
                    },
                    {
                        "id": 14294,
                        "name": "LoadRU1_mitte5min"
                    },
                    {
                        "id": 13,
                        "name": "LoadMill_max60s"
                    },
                    {
                        "id": 14,
                        "name": "LoadMill_min60s"
                    },
                    {
                        "id": 15,
                        "name": "LoadMill_mitte60s"
                    },
                    {
                        "id": 16,
                        "name": "LoadMill_std60s"
                    },
                    {
                        "id": 273,
                        "name": "LoadMill_mitte1s"
                    },
                    {
                        "id": 13456,
                        "name": "LoadMill"
                    },
                    {
                        "id": 14240,
                        "name": "LoadMill_mitte5Hz"
                    },
                    {
                        "id": 14293,
                        "name": "LoadMill_mitte5min"
                    },
                    {
                        "id": 9,
                        "name": "ErrorCodeMPS_max60s"
                    },
                    {
                        "id": 10,
                        "name": "ErrorCodeMPS_min60s"
                    },
                    {
                        "id": 11,
                        "name": "ErrorCodeMPS_mitte60s"
                    },
                    {
                        "id": 12,
                        "name": "ErrorCodeMPS_std60s"
                    },
                    {
                        "id": 272,
                        "name": "ErrorCodeMPS_mitte1s"
                    },
                    {
                        "id": 13455,
                        "name": "ErrorCodeMPS"
                    },
                    {
                        "id": 14239,
                        "name": "ErrorCodeMPS_mitte5Hz"
                    },
                    {
                        "id": 14292,
                        "name": "ErrorCodeMPS_mitte5min"
                    },
                    {
                        "id": 5,
                        "name": "BucketElevCurrent_max60s"
                    },
                    {
                        "id": 6,
                        "name": "BucketElevCurrent_min60s"
                    },
                    {
                        "id": 7,
                        "name": "BucketElevCurrent_mitte60s"
                    },
                    {
                        "id": 8,
                        "name": "BucketElevCurrent_std60s"
                    },
                    {
                        "id": 271,
                        "name": "BucketElevCurrent_mitte1s"
                    },
                    {
                        "id": 13452,
                        "name": "BucketElevCurrent"
                    },
                    {
                        "id": 14238,
                        "name": "BucketElevCurrent_mitte5Hz"
                    },
                    {
                        "id": 14291,
                        "name": "BucketElevCurrent_mitte5min"
                    },
                    {
                        "id": 1,
                        "name": "AuxDriveCurrent_max60s"
                    },
                    {
                        "id": 2,
                        "name": "AuxDriveCurrent_min60s"
                    },
                    {
                        "id": 3,
                        "name": "AuxDriveCurrent_mitte60s"
                    },
                    {
                        "id": 4,
                        "name": "AuxDriveCurrent_std60s"
                    },
                    {
                        "id": 270,
                        "name": "AuxDriveCurrent_mitte1s"
                    },
                    {
                        "id": 13442,
                        "name": "AuxDriveCurrent"
                    },
                    {
                        "id": 14237,
                        "name": "AuxDriveCurrent_mitte5Hz"
                    },
                    {
                        "id": 14290,
                        "name": "AuxDriveCurrent_mitte5min"
                    }
                ],
                "fill_mode": "3",
                "freq": "Minute",
                "skip_dates": []
            },
            "enabled": true,
            "module": "data_providers.IndigoDataReader",
            "name": "data_providers.IndigoDataReader"
        },
        {
            "config": {
                "calc_tags": [
                    {
                        "name": "vib_lvl",
                        "rule": "(VibrationRU1_mitte60s + VibrationRU2_mitte60s + VibrationRU3_mitte60s + VibrationRU4_mitte60s) / 4"
                    },
                    {
                        "name": "P_MainDrive",
                        "rule": "TorqueMainDrive_mitte60s * MotorSpeed_mitte60s * 2 * 3.14159 / 60"
                    },
                    {
                        "name": "Wm",
                        "rule": "P_MainDrive / TotalFeed_mitte60s"
                    },
                    {
                        "name": "water",
                        "rule": "WaterFlowRate_mitte60s"
                    },
                    {
                        "name": "relwater",
                        "rule": "WaterFlowRate_mitte60s / (TotalFeed_mitte60s * 10)"
                    },
                    {
                        "name": "throughput",
                        "rule": "(TotalFeed_mitte60s * 99) / 100"
                    },
                    {
                        "name": "TorqueDelta",
                        "rule": "abs(TorqueMainDrive_max60s - TorqueMainDrive_min60s)"
                    }
                ],
                "machine_type": {
                    "class": "quadrupol",
                    "drive": "table",
                    "n_roller_units": 4
                },
                "product_types": {
                    "origin": "set_single_product",
                    "product_dict": {
                        "id": 1,
                        "name": "RawMeal"
                    }
                },
                "split_into": "plantLoads",
                "vibro_tag": "VibrationRU1_max60s"
            },
            "enabled": true,
            "module": "vrm.PlantInitializer",
            "name": "vrm.PlantInitializer"
        },
        {
            "config": {
                "bit_names": [
                    "General_failure",
                    "Reserved",
                    "Reserved",
                    "Reserved",
                    "Reserved",
                    "Vibration_RU1",
                    "Vibration_RU2",
                    "Vibration_RU3",
                    "Vibration_RU4",
                    "Vibration_Mill",
                    "Reserved",
                    "Reserved",
                    "Reserved",
                    "Reserved",
                    "Hyd_Pressure_RU1",
                    "Hyd_Pressure_RU2",
                    "Hyd_Pressure_RU3",
                    "Hyd_Pressure_RU4",
                    "Strain_axial_RU1",
                    "Strain_axial_RU2",
                    "Strain_axial_RU3",
                    "Strain_axial_RU4",
                    "Reserved",
                    "Load_RU1",
                    "Load_RU2",
                    "Load_RU3",
                    "Load_RU4",
                    "Torque_MainDrive",
                    "Reserved",
                    "Reserved",
                    "Reserved",
                    "Reserved"
                ],
                "field": "ErrorCodeMPS_max60s"
            },
            "enabled": true,
            "module": "vrm.BitDecoder",
            "name": "vrm.BitDecoder"
        },
        {
            "config": {},
            "enabled": true,
            "module": "vrm.TorqueOutlierRemover",
            "name": "vrm.TorqueOutlierRemover"
        },
        {
            "config": {
                "operating_thresholds": [
                    {
                        "channel": "TotalFeed_mitte60s",
                        "operator": ">=",
                        "threshold": 30
                    }
                ]
            },
            "enabled": true,
            "module": "vrm.CalcMillOper",
            "name": "vrm.CalcMillOper"
        },
        {
            "config": {
                "error_tag": {
                    "err_threshold": 0,
                    "name": "ErrorCodeMPS_max60s"
                },
                "mill_stop_triggers": {
                    "vib_lvl": 10
                }
            },
            "enabled": true,
            "module": "vrm.MillStopsPre",
            "name": "vrm.MillStopsPre"
        },
        {
            "config": {
                "RU_position_filter": {
                    "filter1": 0.5,
                    "filter2": 0
                },
                "Stopper_Positions": {
                    "RU1": null,
                    "RU2": null,
                    "RU3": null,
                    "RU4": null
                }
            },
            "enabled": true,
            "module": "vrm.StopperContactsPre",
            "name": "vrm.StopperContactsPre"
        },
        {
            "config": {},
            "enabled": true,
            "module": "vrm.ProducedProductTypes",
            "name": "vrm.ProducedProductTypes"
        },
        {
            "config": {},
            "enabled": true,
            "module": "vrm.PlantLoad",
            "name": "vrm.PlantLoad"
        }
    ]
}

