export const jsonConfig = {
  default: null,
  description: "General report settings 1",
  properties: {
    analysis_modules: {
      description: "List of analysis modules",
      format: "tabs",
      items: {
        headerTemplate: "{{ self.name }}",
        oneOf: [
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["example.ExampleModule"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },

              name: {
                default: "example.ExampleModule",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "example.ExampleModule",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  title: {
                    default: "New chapter",
                    title: "Title",
                    type: "string"
                  },
                  type: {
                    default: "Heading1",
                    enum: ["Heading1", "Heading2"],
                    title: "Type",
                    type: "string"
                  }
                },
                propertyOrder: 12,
                required: ["title", "type"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.Heading"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.Heading",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.Heading",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  data: {
                    description: "",
                    format: "table",
                    items: {
                      properties: {
                        agg: {
                          default: "none",
                          enum: [
                            "none",
                            "mean",
                            "max",
                            "min",
                            "median",
                            "sum",
                            "size",
                            "count",
                            "std",
                            "var",
                            "first",
                            "last"
                          ],
                          propertyOrder: 19,
                          title: "Aggregation",
                          type: "string"
                        },
                        channel: {
                          propertyOrder: 16,
                          title: "Channel",
                          type: "string"
                        },
                        fill: {
                          default: "keep",
                          enum: ["bfill", "pad", "interpolate", "drop", "keep"],
                          propertyOrder: 19,
                          title: "Fill nan",
                          type: "string"
                        },
                        filter: {
                          default: "none",
                          propertyOrder: 17,
                          title: "Filter",
                          type: "string"
                        },
                        label: {
                          propertyOrder: 15,
                          title: "Label",
                          type: "string"
                        },
                        resample: {
                          default: "none",
                          propertyOrder: 18,
                          title: "Resample",
                          type: "string"
                        }
                      },
                      required: [
                        "label",
                        "channel",
                        "filter",
                        "resample",
                        "agg"
                      ],
                      title: "new name",
                      type: "object"
                    },
                    propertyOrder: 11,
                    title: "Data",
                    type: "array"
                  },
                  figure: {
                    description: "",
                    format: "table",
                    options: {
                      collapsed: true
                    },
                    properties: {
                      artists: {
                        description: "",
                        items: {
                          headerTemplate: "Artist {{ i1 }}",
                          oneOf: [
                            {
                              description: "A basic histogram artist.",
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  description: "Alpha level of the bars.",
                                  propertyOrder: 13,
                                  title: "Alpha",
                                  type: "number"
                                },
                                bin_width: {
                                  default: null,
                                  description: "Bin width of the histogram.",
                                  propertyOrder: 14,
                                  title: "Bin Width",
                                  type: ["null", "number"]
                                },
                                color: {
                                  default: "#00a0f5",
                                  description: "Color of the bars.",
                                  format: "color",
                                  propertyOrder: 12,
                                  title: "Color",
                                  type: "string"
                                },
                                data: {
                                  description: "Data Identifier.",
                                  propertyOrder: 10,
                                  title: "Data",
                                  type: "string"
                                },
                                label: {
                                  default: "__nolegend__",
                                  description:
                                    "Label of the artist as it is shown in the legend.",
                                  propertyOrder: 11,
                                  title: "Label",
                                  type: "string"
                                },
                                type: {
                                  enum: ["histOneD"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  description:
                                    "The z-order determines which artist is on top of another. Higher values are on top.",
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["data", "color"],
                              title: "Histogram",
                              type: "object"
                            },
                            {
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  propertyOrder: 20,
                                  title: "Alpha",
                                  type: "number"
                                },
                                color: {
                                  default: "#00a0f5",
                                  format: "color",
                                  propertyOrder: 11,
                                  title: "Color",
                                  type: "string"
                                },
                                label: {
                                  default: "__nolegend__",
                                  propertyOrder: 12,
                                  title: "Label",
                                  type: "string"
                                },
                                linestyle: {
                                  default: "-",
                                  enum: ["-", "--", "-.", ":"],
                                  propertyOrder: 13,
                                  title: "Line Style",
                                  type: "string"
                                },
                                linewidth: {
                                  default: 1,
                                  propertyOrder: 14,
                                  title: "Line width",
                                  type: "number"
                                },
                                type: {
                                  enum: ["vline"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                x: {
                                  propertyOrder: 10,
                                  title: "X value",
                                  type: "number"
                                },
                                yaxis: {
                                  default: "left",
                                  enum: ["left", "right"],
                                  propertyOrder: 16,
                                  title: "Yaxis",
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["x"],
                              title: "Vertical Line",
                              type: "object"
                            }
                          ],
                          options: {
                            keep_oneof_values: false
                          }
                        },
                        propertyOrder: 21,
                        title: "Artists",
                        type: "array"
                      },
                      figsize: {
                        default: "12,6",
                        description:
                          "Set the size of the figure in inches (width,height)",
                        propertyOrder: 10,
                        title: "Figure size",
                        type: "string"
                      },
                      grid: {
                        description: "Toggle grid.",
                        format: "checkbox",
                        propertyOrder: 2,
                        title: "Grid",
                        type: "boolean"
                      },
                      legend: {
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "No Legend",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              anchor: {
                                description: "Anchor of legend box",
                                oneOf: [
                                  {
                                    additionalProperties: false,
                                    options: {
                                      disable_collapse: true,
                                      disable_edit_json: true,
                                      disable_properties: true
                                    },
                                    title: "Auto",
                                    type: "null"
                                  },
                                  {
                                    additionalProperties: false,
                                    format: "grid",
                                    options: {
                                      disable_collapse: true,
                                      disable_edit_json: true,
                                      disable_properties: true
                                    },
                                    properties: {
                                      x: {
                                        type: "number"
                                      },
                                      y: {
                                        type: "number"
                                      }
                                    },
                                    title: "Manual",
                                    type: "object"
                                  }
                                ],
                                options: {
                                  keep_oneof_values: false
                                },
                                propertyOrder: 19,
                                title: "Anchor"
                              },
                              location: {
                                default: "upper left",
                                description: "Location of legend box",
                                enum: [
                                  "best",
                                  "upper right",
                                  "upper left",
                                  "lower left",
                                  "lower right",
                                  "right",
                                  "center left",
                                  "center right",
                                  "lower center",
                                  "upper center",
                                  "center"
                                ],
                                title: "Location",
                                type: "string"
                              }
                            },
                            title: "Show Legend",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 16,
                        title: "Legend"
                      },
                      stacked: {
                        description:
                          "Specify whether the bars of different channels shall be stacked. If bins or alpha are                                    specified, the last artist determines how the parameter is handled.",
                        format: "checkbox",
                        propertyOrder: 1,
                        title: "Stacked",
                        type: "boolean"
                      },
                      title: {
                        description: "Set figure title",
                        propertyOrder: 0,
                        title: "Figure Title",
                        type: "string"
                      },
                      xlabel: {
                        default: "",
                        description: "Set the label for the x-axis.",
                        propertyOrder: 11,
                        title: "X Label",
                        type: "string"
                      },
                      xlim: {
                        description:
                          "Set a lower and upper limit for the x-axis.",
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "Auto",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            format: "grid",
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              xmax: {
                                description: "Upper limit",
                                propertyOrder: 11,
                                type: "number"
                              },
                              xmin: {
                                description: "Lower limit",
                                propertyOrder: 10,
                                type: "number"
                              }
                            },
                            title: "Manual",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 13,
                        title: "X Limits"
                      },
                      y_factor: {
                        default: 1,
                        description:
                          "Factor to multiply the y-axis with (e.g. for conversion of number of                                     occurences to hours).",
                        propertyOrder: 16,
                        title: "Y Factor",
                        type: "number"
                      },
                      yaxis_color: {
                        default: "#000000",
                        description:
                          "Set color of the ticks of the left y axis.",
                        format: "color",
                        propertyOrder: 15,
                        title: "Left Y Axis Color",
                        type: "string"
                      },
                      ylabel: {
                        default: "",
                        description: "Set the label for the y-axis.",
                        propertyOrder: 12,
                        title: "Y Label",
                        type: "string"
                      },
                      ylim: {
                        description:
                          "Set a lower and upper limit for the y-axis.",
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "Auto",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            format: "grid",
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              ymax: {
                                description: "Upper limit",
                                propertyOrder: 11,
                                type: "number"
                              },
                              ymin: {
                                description: "Lower limit",
                                propertyOrder: 10,
                                type: "number"
                              }
                            },
                            title: "Manual",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 14,
                        title: "Y Limits"
                      }
                    },
                    propertyOrder: 11,
                    title: "Figure",
                    type: "object"
                  },
                  word_settings: {
                    description: "Add a chapter or subchapter to the figure.",
                    format: "table",
                    options: {
                      collapsed: true
                    },
                    properties: {
                      chapter_type: {
                        default: "none",
                        description: "Select from chapter or sub-chapter.",
                        enum: ["none", "chapter", "subchapter"],
                        propertyOrder: 0,
                        title: "Chapter",
                        type: "string"
                      },
                      heading: {
                        description: "Heading text.",
                        propertyOrder: 1,
                        title: "Heading",
                        type: "string"
                      },
                      page_break: {
                        default: false,
                        description: "Add figure to new page.",
                        format: "checkbox",
                        propertyOrder: 2,
                        title: "Page Break",
                        type: "boolean"
                      },
                      remark_box: {
                        default: false,
                        description: "Optionally add remark box below graph.",
                        format: "checkbox",
                        propertyOrder: 3,
                        title: "Remark Box",
                        type: "boolean"
                      }
                    },
                    propertyOrder: 0,
                    title: "Word Settings",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["data", "figure"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.Histogram"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.Histogram",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.Histogram",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  data: {
                    description: "",
                    format: "table",
                    items: {
                      properties: {
                        agg: {
                          default: "none",
                          enum: [
                            "none",
                            "mean",
                            "max",
                            "min",
                            "median",
                            "sum",
                            "size",
                            "count",
                            "std",
                            "var",
                            "first",
                            "last"
                          ],
                          propertyOrder: 19,
                          title: "Aggregation",
                          type: "string"
                        },
                        channel: {
                          propertyOrder: 16,
                          title: "Channel",
                          type: "string"
                        },
                        fill: {
                          default: "keep",
                          enum: ["bfill", "pad", "interpolate", "drop", "keep"],
                          propertyOrder: 19,
                          title: "Fill nan",
                          type: "string"
                        },
                        filter: {
                          default: "none",
                          propertyOrder: 17,
                          title: "Filter",
                          type: "string"
                        },
                        label: {
                          propertyOrder: 15,
                          title: "Label",
                          type: "string"
                        },
                        resample: {
                          default: "none",
                          propertyOrder: 18,
                          title: "Resample",
                          type: "string"
                        }
                      },
                      required: [
                        "label",
                        "channel",
                        "filter",
                        "resample",
                        "agg"
                      ],
                      title: "new name",
                      type: "object"
                    },
                    propertyOrder: 11,
                    title: "Data",
                    type: "array"
                  },
                  figure: {
                    description: "",
                    format: "table",
                    options: {
                      collapsed: true
                    },
                    properties: {
                      artists: {
                        description: "",
                        items: {
                          headerTemplate: "Artist {{ i1 }}",
                          oneOf: [
                            {
                              description: "A 2D histogram artist.",
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  description: "Alpha level of the bars.",
                                  propertyOrder: 13,
                                  title: "Alpha",
                                  type: "number"
                                },
                                bins: {
                                  default: 50,
                                  description:
                                    "Number of bins in each direction.",
                                  propertyOrder: 14,
                                  title: "Bins",
                                  type: "number"
                                },
                                type: {
                                  enum: ["histTwoD"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                x_data: {
                                  description: "Data Identifier X.",
                                  propertyOrder: 10,
                                  title: "X-Data",
                                  type: "string"
                                },
                                y_data: {
                                  description: "Data Identifier Y.",
                                  propertyOrder: 10,
                                  title: "Y-Data",
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  description:
                                    "The z-order determines which artist is on top of another. Higher values are on top.",
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["y_data", "x_data"],
                              title: "2D Histogram",
                              type: "object"
                            },
                            {
                              description: "A KDE artist.",
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  description: "Alpha level of the bars.",
                                  propertyOrder: 13,
                                  title: "Alpha",
                                  type: "number"
                                },
                                bw: {
                                  default: null,
                                  description:
                                    "Seaborn parameter to specify kernel size. Can be scott, silverman or scalar.",
                                  propertyOrder: 14,
                                  title: "Kernel Size Computation",
                                  type: ["string", "number"]
                                },
                                type: {
                                  enum: ["kde"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                x_data: {
                                  description: "Data Identifier X.",
                                  propertyOrder: 10,
                                  title: "X-Data",
                                  type: "string"
                                },
                                y_data: {
                                  description: "Data Identifier Y.",
                                  propertyOrder: 10,
                                  title: "Y-Data",
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  description:
                                    "The z-order determines which artist is on top of another. Higher values are on top.",
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["y_data", "x_data"],
                              title: "KDE Plot",
                              type: "object"
                            },
                            {
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  propertyOrder: 20,
                                  title: "Alpha",
                                  type: "number"
                                },
                                color: {
                                  default: "#00a0f5",
                                  format: "color",
                                  propertyOrder: 11,
                                  title: "Color",
                                  type: "string"
                                },
                                label: {
                                  default: "__nolegend__",
                                  propertyOrder: 12,
                                  title: "Label",
                                  type: "string"
                                },
                                linestyle: {
                                  default: "-",
                                  enum: ["-", "--", "-.", ":"],
                                  propertyOrder: 13,
                                  title: "Line Style",
                                  type: "string"
                                },
                                linewidth: {
                                  default: 1,
                                  propertyOrder: 14,
                                  title: "Line width",
                                  type: "number"
                                },
                                type: {
                                  enum: ["vline"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                x: {
                                  propertyOrder: 10,
                                  title: "X value",
                                  type: "number"
                                },
                                yaxis: {
                                  default: "left",
                                  enum: ["left", "right"],
                                  propertyOrder: 16,
                                  title: "Yaxis",
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["x"],
                              title: "Vertical Line",
                              type: "object"
                            },
                            {
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  propertyOrder: 20,
                                  title: "Alpha",
                                  type: "number"
                                },
                                color: {
                                  default: "#00a0f5",
                                  format: "color",
                                  propertyOrder: 11,
                                  title: "Color",
                                  type: "string"
                                },
                                label: {
                                  default: "__nolegend__",
                                  propertyOrder: 12,
                                  title: "Label",
                                  type: "string"
                                },
                                linestyle: {
                                  default: "-",
                                  enum: ["-", "--", "-.", ":"],
                                  propertyOrder: 13,
                                  title: "Line Style",
                                  type: "string"
                                },
                                linewidth: {
                                  default: 1,
                                  propertyOrder: 14,
                                  title: "Line width",
                                  type: "number"
                                },
                                type: {
                                  enum: ["hline"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                y: {
                                  propertyOrder: 10,
                                  title: "Y value",
                                  type: "number"
                                },
                                yaxis: {
                                  default: "left",
                                  enum: ["left", "right"],
                                  propertyOrder: 16,
                                  title: "Yaxis",
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["color", "y"],
                              title: "Horizontal Line",
                              type: "object"
                            }
                          ],
                          options: {
                            keep_oneof_values: false
                          }
                        },
                        propertyOrder: 21,
                        title: "Artists",
                        type: "array"
                      },
                      cbar: {
                        format: "grid",
                        properties: {
                          label: {
                            description: "Label of colorbar.",
                            propertyOrder: 2,
                            title: "label",
                            type: "string"
                          },
                          show: {
                            description: "Show or hide colorbar.",
                            format: "checkbox",
                            propertyOrder: 1,
                            title: "Show",
                            type: "boolean"
                          }
                        },
                        propertyOrder: 15,
                        title: "Colorbar",
                        type: "object"
                      },
                      cmap: {
                        default: "jet",
                        description: "Choose from a colormap.",
                        enum: [
                          "jet",
                          "Spectral",
                          "Greys",
                          "Purples",
                          "Blues",
                          "Greens",
                          "RdBu",
                          "Oranges",
                          "Reds",
                          "spring",
                          "summer",
                          "winter"
                        ],
                        propertyOrder: 16,
                        title: "Colormap",
                        type: "string"
                      },
                      figsize: {
                        default: "12,6",
                        description:
                          "Set the size of the figure in inches (width,height)",
                        propertyOrder: 10,
                        title: "Figure size",
                        type: "string"
                      },
                      grid: {
                        description: "Toggle grid.",
                        format: "checkbox",
                        propertyOrder: 2,
                        title: "Grid",
                        type: "boolean"
                      },
                      legend: {
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "No Legend",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              anchor: {
                                description: "Anchor of legend box",
                                oneOf: [
                                  {
                                    additionalProperties: false,
                                    options: {
                                      disable_collapse: true,
                                      disable_edit_json: true,
                                      disable_properties: true
                                    },
                                    title: "Auto",
                                    type: "null"
                                  },
                                  {
                                    additionalProperties: false,
                                    format: "grid",
                                    options: {
                                      disable_collapse: true,
                                      disable_edit_json: true,
                                      disable_properties: true
                                    },
                                    properties: {
                                      x: {
                                        type: "number"
                                      },
                                      y: {
                                        type: "number"
                                      }
                                    },
                                    title: "Manual",
                                    type: "object"
                                  }
                                ],
                                options: {
                                  keep_oneof_values: false
                                },
                                propertyOrder: 19,
                                title: "Anchor"
                              },
                              location: {
                                default: "upper left",
                                description: "Location of legend box",
                                enum: [
                                  "best",
                                  "upper right",
                                  "upper left",
                                  "lower left",
                                  "lower right",
                                  "right",
                                  "center left",
                                  "center right",
                                  "lower center",
                                  "upper center",
                                  "center"
                                ],
                                title: "Location",
                                type: "string"
                              }
                            },
                            title: "Show Legend",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 16,
                        title: "Legend"
                      },
                      title: {
                        description: "Set figure title",
                        propertyOrder: 0,
                        title: "Figure Title",
                        type: "string"
                      },
                      xlabel: {
                        default: "",
                        description: "Set the label for the x-axis.",
                        propertyOrder: 11,
                        title: "X Label",
                        type: "string"
                      },
                      xlim: {
                        description:
                          "Set a lower and upper limit for the x-axis.",
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "Auto",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            format: "grid",
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              xmax: {
                                description: "Upper limit",
                                propertyOrder: 11,
                                type: "number"
                              },
                              xmin: {
                                description: "Lower limit",
                                propertyOrder: 10,
                                type: "number"
                              }
                            },
                            title: "Manual",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 13,
                        title: "X Limits"
                      },
                      yaxis_color: {
                        default: "#000000",
                        description:
                          "Set color of the ticks of the left y axis.",
                        format: "color",
                        propertyOrder: 15,
                        title: "Left Y Axis Color",
                        type: "string"
                      },
                      ylabel: {
                        default: "",
                        description: "Set the label for the y-axis.",
                        propertyOrder: 12,
                        title: "Y Label",
                        type: "string"
                      },
                      ylim: {
                        description:
                          "Set a lower and upper limit for the y-axis.",
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "Auto",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            format: "grid",
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              ymax: {
                                description: "Upper limit",
                                propertyOrder: 11,
                                type: "number"
                              },
                              ymin: {
                                description: "Lower limit",
                                propertyOrder: 10,
                                type: "number"
                              }
                            },
                            title: "Manual",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 14,
                        title: "Y Limits"
                      }
                    },
                    propertyOrder: 11,
                    title: "Figure",
                    type: "object"
                  },
                  word_settings: {
                    description: "Add a chapter or subchapter to the figure.",
                    format: "table",
                    options: {
                      collapsed: true
                    },
                    properties: {
                      chapter_type: {
                        default: "none",
                        description: "Select from chapter or sub-chapter.",
                        enum: ["none", "chapter", "subchapter"],
                        propertyOrder: 0,
                        title: "Chapter",
                        type: "string"
                      },
                      heading: {
                        description: "Heading text.",
                        propertyOrder: 1,
                        title: "Heading",
                        type: "string"
                      },
                      page_break: {
                        default: false,
                        description: "Add figure to new page.",
                        format: "checkbox",
                        propertyOrder: 2,
                        title: "Page Break",
                        type: "boolean"
                      },
                      remark_box: {
                        default: false,
                        description: "Optionally add remark box below graph.",
                        format: "checkbox",
                        propertyOrder: 3,
                        title: "Remark Box",
                        type: "boolean"
                      }
                    },
                    propertyOrder: 0,
                    title: "Word Settings",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["data", "figure"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.HistogramTwoD"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.HistogramTwoD",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.HistogramTwoD",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.PageBreak"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.PageBreak",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.PageBreak",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.RemarkBox"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.RemarkBox",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.RemarkBox",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  data: {
                    description: "",
                    format: "table",
                    items: {
                      properties: {
                        agg: {
                          default: "none",
                          enum: [
                            "none",
                            "mean",
                            "max",
                            "min",
                            "median",
                            "sum",
                            "size",
                            "count",
                            "std",
                            "var",
                            "first",
                            "last"
                          ],
                          propertyOrder: 19,
                          title: "Aggregation",
                          type: "string"
                        },
                        channel: {
                          propertyOrder: 16,
                          title: "Channel",
                          type: "string"
                        },
                        fill: {
                          default: "keep",
                          enum: ["bfill", "pad", "interpolate", "drop", "keep"],
                          propertyOrder: 19,
                          title: "Fill nan",
                          type: "string"
                        },
                        filter: {
                          default: "none",
                          propertyOrder: 17,
                          title: "Filter",
                          type: "string"
                        },
                        label: {
                          propertyOrder: 15,
                          title: "Label",
                          type: "string"
                        },
                        resample: {
                          default: "none",
                          propertyOrder: 18,
                          title: "Resample",
                          type: "string"
                        }
                      },
                      required: [
                        "label",
                        "channel",
                        "filter",
                        "resample",
                        "agg"
                      ],
                      title: "new name",
                      type: "object"
                    },
                    propertyOrder: 11,
                    title: "Data",
                    type: "array"
                  },
                  table: {
                    oneOf: [
                      {
                        format: "table",
                        properties: {
                          colalign: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "center",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                }
                              },
                              required: ["col_1"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 12,
                            title: "Column alignment",
                            type: "array"
                          },
                          colshade: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "E0E0E0",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                }
                              },
                              required: ["col_1"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 14,
                            title: "Column Shade",
                            type: "array"
                          },
                          colwidth: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: 100,
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "number"
                                }
                              },
                              required: ["col_1"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 13,
                            title: "Column Width",
                            type: "array"
                          },
                          header: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                }
                              },
                              required: ["col_1"],
                              title: "Header",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 10,
                            title: "Header",
                            type: "array"
                          },
                          rows: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                }
                              },
                              required: ["col_1"],
                              title: "Row",
                              type: "object"
                            },
                            propertyOrder: 11,
                            title: "Rows",
                            type: "array"
                          },
                          table_width: {
                            default: 100,
                            description: "Maximum Width of Table",
                            propertyOrder: 15,
                            title: "Table Width",
                            type: "number"
                          },
                          type: {
                            enum: ["table_1_cols"],
                            options: {
                              hidden: true
                            },
                            type: "string"
                          }
                        },
                        required: [
                          "header",
                          "rows",
                          "type",
                          "colalign",
                          "colwidth",
                          "colshade",
                          "table_width"
                        ],
                        title: "1 Cols Table",
                        type: "object"
                      },
                      {
                        format: "table",
                        properties: {
                          colalign: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "center",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "center",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 12,
                            title: "Column alignment",
                            type: "array"
                          },
                          colshade: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "E0E0E0",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 14,
                            title: "Column Shade",
                            type: "array"
                          },
                          colwidth: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: 50,
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "number"
                                },
                                col_2: {
                                  default: 50,
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "number"
                                }
                              },
                              required: ["col_1", "col_2"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 13,
                            title: "Column Width",
                            type: "array"
                          },
                          header: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2"],
                              title: "Header",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 10,
                            title: "Header",
                            type: "array"
                          },
                          rows: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2"],
                              title: "Row",
                              type: "object"
                            },
                            propertyOrder: 11,
                            title: "Rows",
                            type: "array"
                          },
                          table_width: {
                            default: 100,
                            description: "Maximum Width of Table",
                            propertyOrder: 15,
                            title: "Table Width",
                            type: "number"
                          },
                          type: {
                            enum: ["table_2_cols"],
                            options: {
                              hidden: true
                            },
                            type: "string"
                          }
                        },
                        required: [
                          "header",
                          "rows",
                          "type",
                          "colalign",
                          "colwidth",
                          "colshade",
                          "table_width"
                        ],
                        title: "2 Cols Table",
                        type: "object"
                      },
                      {
                        format: "table",
                        properties: {
                          colalign: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "center",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "center",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "center",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2", "col_3"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 12,
                            title: "Column alignment",
                            type: "array"
                          },
                          colshade: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "E0E0E0",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2", "col_3"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 14,
                            title: "Column Shade",
                            type: "array"
                          },
                          colwidth: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: 33,
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "number"
                                },
                                col_2: {
                                  default: 33,
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "number"
                                },
                                col_3: {
                                  default: 33,
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "number"
                                }
                              },
                              required: ["col_1", "col_2", "col_3"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 13,
                            title: "Column Width",
                            type: "array"
                          },
                          header: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2", "col_3"],
                              title: "Header",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 10,
                            title: "Header",
                            type: "array"
                          },
                          rows: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2", "col_3"],
                              title: "Row",
                              type: "object"
                            },
                            propertyOrder: 11,
                            title: "Rows",
                            type: "array"
                          },
                          table_width: {
                            default: 100,
                            description: "Maximum Width of Table",
                            propertyOrder: 15,
                            title: "Table Width",
                            type: "number"
                          },
                          type: {
                            enum: ["table_3_cols"],
                            options: {
                              hidden: true
                            },
                            type: "string"
                          }
                        },
                        required: [
                          "header",
                          "rows",
                          "type",
                          "colalign",
                          "colwidth",
                          "colshade",
                          "table_width"
                        ],
                        title: "3 Cols Table",
                        type: "object"
                      },
                      {
                        format: "table",
                        properties: {
                          colalign: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "center",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "center",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "center",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "center",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2", "col_3", "col_4"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 12,
                            title: "Column alignment",
                            type: "array"
                          },
                          colshade: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "E0E0E0",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2", "col_3", "col_4"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 14,
                            title: "Column Shade",
                            type: "array"
                          },
                          colwidth: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: 25,
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "number"
                                },
                                col_2: {
                                  default: 25,
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "number"
                                },
                                col_3: {
                                  default: 25,
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "number"
                                },
                                col_4: {
                                  default: 25,
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "number"
                                }
                              },
                              required: ["col_1", "col_2", "col_3", "col_4"],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 13,
                            title: "Column Width",
                            type: "array"
                          },
                          header: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2", "col_3", "col_4"],
                              title: "Header",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 10,
                            title: "Header",
                            type: "array"
                          },
                          rows: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                }
                              },
                              required: ["col_1", "col_2", "col_3", "col_4"],
                              title: "Row",
                              type: "object"
                            },
                            propertyOrder: 11,
                            title: "Rows",
                            type: "array"
                          },
                          table_width: {
                            default: 100,
                            description: "Maximum Width of Table",
                            propertyOrder: 15,
                            title: "Table Width",
                            type: "number"
                          },
                          type: {
                            enum: ["table_4_cols"],
                            options: {
                              hidden: true
                            },
                            type: "string"
                          }
                        },
                        required: [
                          "header",
                          "rows",
                          "type",
                          "colalign",
                          "colwidth",
                          "colshade",
                          "table_width"
                        ],
                        title: "4 Cols Table",
                        type: "object"
                      },
                      {
                        format: "table",
                        properties: {
                          colalign: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "center",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "center",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "center",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "center",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  default: "center",
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 12,
                            title: "Column alignment",
                            type: "array"
                          },
                          colshade: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "E0E0E0",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  default: "",
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 14,
                            title: "Column Shade",
                            type: "array"
                          },
                          colwidth: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: 20,
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "number"
                                },
                                col_2: {
                                  default: 20,
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "number"
                                },
                                col_3: {
                                  default: 20,
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "number"
                                },
                                col_4: {
                                  default: 20,
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "number"
                                },
                                col_5: {
                                  default: 20,
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "number"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 13,
                            title: "Column Width",
                            type: "array"
                          },
                          header: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5"
                              ],
                              title: "Header",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 10,
                            title: "Header",
                            type: "array"
                          },
                          rows: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            propertyOrder: 11,
                            title: "Rows",
                            type: "array"
                          },
                          table_width: {
                            default: 100,
                            description: "Maximum Width of Table",
                            propertyOrder: 15,
                            title: "Table Width",
                            type: "number"
                          },
                          type: {
                            enum: ["table_5_cols"],
                            options: {
                              hidden: true
                            },
                            type: "string"
                          }
                        },
                        required: [
                          "header",
                          "rows",
                          "type",
                          "colalign",
                          "colwidth",
                          "colshade",
                          "table_width"
                        ],
                        title: "5 Cols Table",
                        type: "object"
                      },
                      {
                        format: "table",
                        properties: {
                          colalign: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "center",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "center",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "center",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "center",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  default: "center",
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  default: "center",
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 12,
                            title: "Column alignment",
                            type: "array"
                          },
                          colshade: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "E0E0E0",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  default: "",
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  default: "",
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 14,
                            title: "Column Shade",
                            type: "array"
                          },
                          colwidth: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: 16,
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "number"
                                },
                                col_2: {
                                  default: 16,
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "number"
                                },
                                col_3: {
                                  default: 16,
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "number"
                                },
                                col_4: {
                                  default: 16,
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "number"
                                },
                                col_5: {
                                  default: 16,
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "number"
                                },
                                col_6: {
                                  default: 16,
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "number"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 13,
                            title: "Column Width",
                            type: "array"
                          },
                          header: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6"
                              ],
                              title: "Header",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 10,
                            title: "Header",
                            type: "array"
                          },
                          rows: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            propertyOrder: 11,
                            title: "Rows",
                            type: "array"
                          },
                          table_width: {
                            default: 100,
                            description: "Maximum Width of Table",
                            propertyOrder: 15,
                            title: "Table Width",
                            type: "number"
                          },
                          type: {
                            enum: ["table_6_cols"],
                            options: {
                              hidden: true
                            },
                            type: "string"
                          }
                        },
                        required: [
                          "header",
                          "rows",
                          "type",
                          "colalign",
                          "colwidth",
                          "colshade",
                          "table_width"
                        ],
                        title: "6 Cols Table",
                        type: "object"
                      },
                      {
                        format: "table",
                        properties: {
                          colalign: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "center",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "center",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "center",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "center",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  default: "center",
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  default: "center",
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                },
                                col_7: {
                                  default: "center",
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 12,
                            title: "Column alignment",
                            type: "array"
                          },
                          colshade: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "E0E0E0",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  default: "",
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  default: "",
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                },
                                col_7: {
                                  default: "",
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 14,
                            title: "Column Shade",
                            type: "array"
                          },
                          colwidth: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: 14,
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "number"
                                },
                                col_2: {
                                  default: 14,
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "number"
                                },
                                col_3: {
                                  default: 14,
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "number"
                                },
                                col_4: {
                                  default: 14,
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "number"
                                },
                                col_5: {
                                  default: 14,
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "number"
                                },
                                col_6: {
                                  default: 14,
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "number"
                                },
                                col_7: {
                                  default: 14,
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "number"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 13,
                            title: "Column Width",
                            type: "array"
                          },
                          header: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                },
                                col_7: {
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7"
                              ],
                              title: "Header",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 10,
                            title: "Header",
                            type: "array"
                          },
                          rows: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                },
                                col_7: {
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            propertyOrder: 11,
                            title: "Rows",
                            type: "array"
                          },
                          table_width: {
                            default: 100,
                            description: "Maximum Width of Table",
                            propertyOrder: 15,
                            title: "Table Width",
                            type: "number"
                          },
                          type: {
                            enum: ["table_7_cols"],
                            options: {
                              hidden: true
                            },
                            type: "string"
                          }
                        },
                        required: [
                          "header",
                          "rows",
                          "type",
                          "colalign",
                          "colwidth",
                          "colshade",
                          "table_width"
                        ],
                        title: "7 Cols Table",
                        type: "object"
                      },
                      {
                        format: "table",
                        properties: {
                          colalign: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "center",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "center",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "center",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "center",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  default: "center",
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  default: "center",
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                },
                                col_7: {
                                  default: "center",
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "string"
                                },
                                col_8: {
                                  default: "center",
                                  propertyOrder: 8,
                                  title: "Column 8",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7",
                                "col_8"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 12,
                            title: "Column alignment",
                            type: "array"
                          },
                          colshade: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: "E0E0E0",
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  default: "",
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  default: "",
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  default: "",
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  default: "",
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  default: "",
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                },
                                col_7: {
                                  default: "",
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "string"
                                },
                                col_8: {
                                  default: "",
                                  propertyOrder: 8,
                                  title: "Column 8",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7",
                                "col_8"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 14,
                            title: "Column Shade",
                            type: "array"
                          },
                          colwidth: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  default: 12,
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "number"
                                },
                                col_2: {
                                  default: 12,
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "number"
                                },
                                col_3: {
                                  default: 12,
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "number"
                                },
                                col_4: {
                                  default: 12,
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "number"
                                },
                                col_5: {
                                  default: 12,
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "number"
                                },
                                col_6: {
                                  default: 12,
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "number"
                                },
                                col_7: {
                                  default: 12,
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "number"
                                },
                                col_8: {
                                  default: 12,
                                  propertyOrder: 8,
                                  title: "Column 8",
                                  type: "number"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7",
                                "col_8"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 13,
                            title: "Column Width",
                            type: "array"
                          },
                          header: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                },
                                col_7: {
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "string"
                                },
                                col_8: {
                                  propertyOrder: 8,
                                  title: "Column 8",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7",
                                "col_8"
                              ],
                              title: "Header",
                              type: "object"
                            },
                            maxItems: 1,
                            minItems: 1,
                            propertyOrder: 10,
                            title: "Header",
                            type: "array"
                          },
                          rows: {
                            format: "table",
                            items: {
                              options: {
                                display_required_only: true
                              },
                              properties: {
                                col_1: {
                                  propertyOrder: 1,
                                  title: "Column 1",
                                  type: "string"
                                },
                                col_2: {
                                  propertyOrder: 2,
                                  title: "Column 2",
                                  type: "string"
                                },
                                col_3: {
                                  propertyOrder: 3,
                                  title: "Column 3",
                                  type: "string"
                                },
                                col_4: {
                                  propertyOrder: 4,
                                  title: "Column 4",
                                  type: "string"
                                },
                                col_5: {
                                  propertyOrder: 5,
                                  title: "Column 5",
                                  type: "string"
                                },
                                col_6: {
                                  propertyOrder: 6,
                                  title: "Column 6",
                                  type: "string"
                                },
                                col_7: {
                                  propertyOrder: 7,
                                  title: "Column 7",
                                  type: "string"
                                },
                                col_8: {
                                  propertyOrder: 8,
                                  title: "Column 8",
                                  type: "string"
                                }
                              },
                              required: [
                                "col_1",
                                "col_2",
                                "col_3",
                                "col_4",
                                "col_5",
                                "col_6",
                                "col_7",
                                "col_8"
                              ],
                              title: "Row",
                              type: "object"
                            },
                            propertyOrder: 11,
                            title: "Rows",
                            type: "array"
                          },
                          table_width: {
                            default: 100,
                            description: "Maximum Width of Table",
                            propertyOrder: 15,
                            title: "Table Width",
                            type: "number"
                          },
                          type: {
                            enum: ["table_8_cols"],
                            options: {
                              hidden: true
                            },
                            type: "string"
                          }
                        },
                        required: [
                          "header",
                          "rows",
                          "type",
                          "colalign",
                          "colwidth",
                          "colshade",
                          "table_width"
                        ],
                        title: "8 Cols Table",
                        type: "object"
                      }
                    ],
                    options: {
                      keep_oneof_values: true
                    },
                    title: "Table"
                  }
                },
                propertyOrder: 12,
                required: ["data", "table"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.Table"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.Table",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.Table",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  data: {
                    description: "",
                    format: "table",
                    items: {
                      properties: {
                        agg: {
                          default: "none",
                          enum: [
                            "none",
                            "mean",
                            "max",
                            "min",
                            "median",
                            "sum",
                            "size",
                            "count",
                            "std",
                            "var",
                            "first",
                            "last"
                          ],
                          propertyOrder: 19,
                          title: "Aggregation",
                          type: "string"
                        },
                        channel: {
                          propertyOrder: 16,
                          title: "Channel",
                          type: "string"
                        },
                        fill: {
                          default: "keep",
                          enum: ["bfill", "pad", "interpolate", "drop", "keep"],
                          propertyOrder: 19,
                          title: "Fill nan",
                          type: "string"
                        },
                        filter: {
                          default: "none",
                          propertyOrder: 17,
                          title: "Filter",
                          type: "string"
                        },
                        label: {
                          propertyOrder: 15,
                          title: "Label",
                          type: "string"
                        },
                        resample: {
                          default: "none",
                          propertyOrder: 18,
                          title: "Resample",
                          type: "string"
                        }
                      },
                      required: [
                        "label",
                        "channel",
                        "filter",
                        "resample",
                        "agg"
                      ],
                      title: "new name",
                      type: "object"
                    },
                    propertyOrder: 11,
                    title: "Data",
                    type: "array"
                  },
                  figure: {
                    description: "",
                    properties: {
                      artists: {
                        description: "",
                        items: {
                          headerTemplate: "Artist {{ i1 }}",
                          oneOf: [
                            {
                              description:
                                "A basic line artist for all kind of line representations.",
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  description: "Alpha level of the line.",
                                  propertyOrder: 13,
                                  title: "Alpha",
                                  type: "number"
                                },
                                color: {
                                  default: "#00a0f5",
                                  description: "Color of the Line.",
                                  format: "color",
                                  propertyOrder: 12,
                                  title: "Color",
                                  type: "string"
                                },
                                data: {
                                  description: "Data Identifier.",
                                  propertyOrder: 10,
                                  title: "Data",
                                  type: "string"
                                },
                                label: {
                                  default: "__nolegend__",
                                  description:
                                    "Label of the artist as it is shown in the legend.",
                                  propertyOrder: 11,
                                  title: "Label",
                                  type: "string"
                                },
                                linestyle: {
                                  default: "-",
                                  description: "Linestyle of the artist.",
                                  enum: ["-", "--", "-.", ":"],
                                  propertyOrder: 14,
                                  title: "Line Style",
                                  type: "string"
                                },
                                linewidth: {
                                  default: 1,
                                  description: "Width of the artist.",
                                  propertyOrder: 15,
                                  title: "Line width",
                                  type: "number"
                                },
                                step: {
                                  default: "off",
                                  description:
                                    "Use a stepped line to connect the points. The options determine where the step occurs.",
                                  enum: ["off", "pre", "post", "mid"],
                                  propertyOrder: 15,
                                  title: "Step",
                                  type: "string"
                                },
                                type: {
                                  enum: ["lineplot"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                yaxis: {
                                  default: "left",
                                  description:
                                    "Set to which y axis the line will be attached.",
                                  enum: ["left", "right"],
                                  propertyOrder: 16,
                                  title: "Yaxis",
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  description:
                                    "The z-order determines which artist is on top of another. Higher values are on top.",
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["data", "color"],
                              title: "LinePlot",
                              type: "object"
                            },
                            {
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  propertyOrder: 20,
                                  title: "Alpha",
                                  type: "number"
                                },
                                color: {
                                  default: "#00a0f5",
                                  format: "color",
                                  propertyOrder: 11,
                                  title: "Color",
                                  type: "string"
                                },
                                label: {
                                  default: "__nolegend__",
                                  propertyOrder: 12,
                                  title: "Label",
                                  type: "string"
                                },
                                linestyle: {
                                  default: "-",
                                  enum: ["-", "--", "-.", ":"],
                                  propertyOrder: 13,
                                  title: "Line Style",
                                  type: "string"
                                },
                                linewidth: {
                                  default: 1,
                                  propertyOrder: 14,
                                  title: "Line width",
                                  type: "number"
                                },
                                type: {
                                  enum: ["hline"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                y: {
                                  propertyOrder: 10,
                                  title: "Y value",
                                  type: "number"
                                },
                                yaxis: {
                                  default: "left",
                                  enum: ["left", "right"],
                                  propertyOrder: 16,
                                  title: "Yaxis",
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["color", "y"],
                              title: "Horizontal Line",
                              type: "object"
                            },
                            {
                              properties: {
                                alpha: {
                                  default: 1.0,
                                  propertyOrder: 16,
                                  title: "Alpha",
                                  type: "number"
                                },
                                color: {
                                  default: "#00a0f5",
                                  format: "color",
                                  propertyOrder: 10,
                                  title: "Color",
                                  type: "string"
                                },
                                data_center: {
                                  propertyOrder: 11,
                                  title: "Data Center",
                                  type: "string"
                                },
                                data_hi: {
                                  propertyOrder: 12,
                                  title: "Data Upper",
                                  type: "string"
                                },
                                data_lo: {
                                  propertyOrder: 10,
                                  title: "Data Lower",
                                  type: "string"
                                },
                                label: {
                                  default: "__nolegend__",
                                  propertyOrder: 13,
                                  title: "Label",
                                  type: "string"
                                },
                                linestyle: {
                                  default: "-",
                                  enum: ["-", "--", "-.", ":"],
                                  propertyOrder: 14,
                                  title: "Line Style",
                                  type: "string"
                                },
                                linewidth: {
                                  default: 1,
                                  propertyOrder: 15,
                                  title: "Line width",
                                  type: "number"
                                },
                                step: {
                                  default: "off",
                                  enum: ["off", "pre", "post", "mid"],
                                  propertyOrder: 17,
                                  title: "Step",
                                  type: "string"
                                },
                                type: {
                                  enum: ["band"],
                                  options: {
                                    hidden: true
                                  },
                                  type: "string"
                                },
                                yaxis: {
                                  default: "left",
                                  enum: ["left", "right"],
                                  propertyOrder: 16,
                                  title: "Yaxis",
                                  type: "string"
                                },
                                zorder: {
                                  default: null,
                                  propertyOrder: 21,
                                  title: "Z Order",
                                  type: ["null", "number"]
                                }
                              },
                              required: ["color"],
                              title: "Band",
                              type: "object"
                            }
                          ],
                          options: {
                            keep_oneof_values: false
                          }
                        },
                        propertyOrder: 100,
                        title: "Artists",
                        type: "array"
                      },
                      ax2: {
                        description:
                          "Show a second y axis on the right side of the figure.",
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "Off",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              ax2_yaxis_color: {
                                default: "#000000",
                                format: "color",
                                propertyOrder: 18,
                                title: "Right Y Axis Color",
                                type: "string"
                              },
                              ax2_ylabel: {
                                default: "y_label",
                                propertyOrder: 19,
                                title: "Right Y Label",
                                type: "string"
                              },
                              ax2_ylim: {
                                oneOf: [
                                  {
                                    additionalProperties: false,
                                    options: {
                                      disable_collapse: true,
                                      disable_edit_json: true,
                                      disable_properties: true
                                    },
                                    title: "Auto",
                                    type: "null"
                                  },
                                  {
                                    additionalProperties: false,
                                    format: "grid",
                                    options: {
                                      disable_collapse: true,
                                      disable_edit_json: true,
                                      disable_properties: true
                                    },
                                    properties: {
                                      ymax: {
                                        type: "number"
                                      },
                                      ymin: {
                                        type: "number"
                                      }
                                    },
                                    title: "Manual",
                                    type: "object"
                                  }
                                ],
                                options: {
                                  keep_oneof_values: false
                                },
                                propertyOrder: 20,
                                title: "Right Y Limits"
                              }
                            },
                            title: "Show",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 20,
                        title: "Right Y axis"
                      },
                      fig_title: {
                        default: "",
                        description: "Adds a title to the figure.",
                        propertyOrder: 30,
                        title: "Figure Title",
                        type: "string"
                      },
                      figsize: {
                        default: "12,6",
                        description:
                          "Set the size of the figure in inches (width,height)",
                        propertyOrder: 10,
                        title: "Figure size",
                        type: "string"
                      },
                      legend: {
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "No Legend",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              anchor: {
                                description: "Anchor of legend box",
                                oneOf: [
                                  {
                                    additionalProperties: false,
                                    options: {
                                      disable_collapse: true,
                                      disable_edit_json: true,
                                      disable_properties: true
                                    },
                                    title: "Auto",
                                    type: "null"
                                  },
                                  {
                                    additionalProperties: false,
                                    format: "grid",
                                    options: {
                                      disable_collapse: true,
                                      disable_edit_json: true,
                                      disable_properties: true
                                    },
                                    properties: {
                                      x: {
                                        type: "number"
                                      },
                                      y: {
                                        type: "number"
                                      }
                                    },
                                    title: "Manual",
                                    type: "object"
                                  }
                                ],
                                options: {
                                  keep_oneof_values: false
                                },
                                propertyOrder: 19,
                                title: "Anchor"
                              },
                              location: {
                                default: "upper left",
                                description: "Location of legend box",
                                enum: [
                                  "best",
                                  "upper right",
                                  "upper left",
                                  "lower left",
                                  "lower right",
                                  "right",
                                  "center left",
                                  "center right",
                                  "lower center",
                                  "upper center",
                                  "center"
                                ],
                                title: "Location",
                                type: "string"
                              }
                            },
                            title: "Show Legend",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 16,
                        title: "Legend"
                      },
                      xlabel: {
                        default: "Time",
                        description: "Set the label for the x-axis.",
                        propertyOrder: 11,
                        title: "X Label",
                        type: "string"
                      },
                      xlim: {
                        description:
                          "Set a lower and upper limit for the x-axis.",
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "Auto",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            format: "grid",
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              xmax: {
                                description: "Upper limit",
                                propertyOrder: 11,
                                type: "number"
                              },
                              xmin: {
                                description: "Lower limit",
                                propertyOrder: 10,
                                type: "number"
                              }
                            },
                            title: "Manual",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 13,
                        title: "X Limits"
                      },
                      yaxis_color: {
                        default: "#000000",
                        description:
                          "Set color of the ticks of the left y axis.",
                        format: "color",
                        propertyOrder: 15,
                        title: "Left Y Axis Color",
                        type: "string"
                      },
                      ylabel: {
                        default: "",
                        description: "Set the label for the y-axis.",
                        propertyOrder: 12,
                        title: "Y Label",
                        type: "string"
                      },
                      ylim: {
                        description:
                          "Set a lower and upper limit for the y-axis.",
                        oneOf: [
                          {
                            additionalProperties: false,
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            title: "Auto",
                            type: "null"
                          },
                          {
                            additionalProperties: false,
                            format: "grid",
                            options: {
                              disable_collapse: true,
                              disable_edit_json: true,
                              disable_properties: true
                            },
                            properties: {
                              ymax: {
                                description: "Upper limit",
                                propertyOrder: 11,
                                type: "number"
                              },
                              ymin: {
                                description: "Lower limit",
                                propertyOrder: 10,
                                type: "number"
                              }
                            },
                            title: "Manual",
                            type: "object"
                          }
                        ],
                        options: {
                          keep_oneof_values: false
                        },
                        propertyOrder: 14,
                        title: "Y Limits"
                      }
                    },
                    propertyOrder: 11,
                    title: "Figure",
                    type: "object"
                  },
                  word_settings: {
                    description: "Add a chapter or subchapter to the figure.",
                    format: "table",
                    options: {
                      collapsed: true
                    },
                    properties: {
                      chapter_type: {
                        default: "none",
                        description: "Select from chapter or sub-chapter.",
                        enum: ["none", "chapter", "subchapter"],
                        propertyOrder: 0,
                        title: "Chapter",
                        type: "string"
                      },
                      heading: {
                        description: "Heading text.",
                        propertyOrder: 1,
                        title: "Heading",
                        type: "string"
                      },
                      page_break: {
                        default: false,
                        description: "Add figure to new page.",
                        format: "checkbox",
                        propertyOrder: 2,
                        title: "Page Break",
                        type: "boolean"
                      },
                      remark_box: {
                        default: false,
                        description: "Optionally add remark box below graph.",
                        format: "checkbox",
                        propertyOrder: 3,
                        title: "Remark Box",
                        type: "boolean"
                      }
                    },
                    propertyOrder: 0,
                    title: "Word Settings",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["data", "figure"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.TimeSeriesPlot"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.TimeSeriesPlot",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.TimeSeriesPlot",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  channels: {
                    format: "table",
                    items: {
                      properties: {
                        channel: {
                          title: "Channel Tag Name",
                          type: "string"
                        },
                        color: {
                          default: null,
                          format: "color",
                          title: "Bar color",
                          type: "string"
                        },
                        label: {
                          title: "Channel Label in figure",
                          type: "string"
                        }
                      },
                      required: ["channel"],
                      title: "Channel",
                      type: "object"
                    },
                    title: "List of channels in histogram",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["channels"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["pet.AdditiveConsumption"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "pet.AdditiveConsumption",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "pet.AdditiveConsumption",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                title: "Module Settings"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["pet.DiscageViscosityControl"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "pet.DiscageViscosityControl",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "pet.DiscageViscosityControl",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  channels: {
                    format: "table",
                    items: {
                      properties: {
                        channel: {
                          title: "Channel Tag Name",
                          type: "string"
                        },
                        color: {
                          format: "color",
                          title: "Bar color",
                          type: "string"
                        },
                        label: {
                          title: "Channel Label in figure",
                          type: "string"
                        }
                      },
                      required: ["channel", "label", "color"],
                      title: "Channel",
                      type: "object"
                    },
                    title: "List of channels in histogram",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["channels"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["pet.PETProduction"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "pet.PETProduction",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "pet.PETProduction",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                title: "Module Settings"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["pet.PerformanceIndicators"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "pet.PerformanceIndicators",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "pet.PerformanceIndicators",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  channel: {
                    title: "Channel",
                    type: "string"
                  },
                  color: {
                    title: "Color",
                    type: "string"
                  },
                  label: {
                    title: "Label",
                    type: "string"
                  }
                },
                propertyOrder: 12,
                required: ["channel", "label", "color"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["pet.PlantCapacity"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "pet.PlantCapacity",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "pet.PlantCapacity",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  deg_channels: {
                    items: {
                      title: "Deg_channel",
                      type: "string"
                    },
                    title: "Deg_channels",
                    type: "array"
                  },
                  eg_channels: {
                    items: {
                      title: "Eg_channel",
                      type: "string"
                    },
                    title: "Eg_channels",
                    type: "array"
                  },
                  pta_channels: {
                    items: {
                      title: "Pta_channel",
                      type: "string"
                    },
                    title: "Pta_channels",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["deg_channels", "eg_channels", "pta_channels"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["pet.RawMaterialConsumption"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "pet.RawMaterialConsumption",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "pet.RawMaterialConsumption",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  amc_tag: {
                    title: "AMC tagname",
                    type: "string"
                  },
                  channels: {
                    description:
                      "Tags considered for calculation of stops due to vibration",
                    format: "table",
                    items: {
                      description: "Enter channel name or formula",
                      title: "Channel",
                      type: "string"
                    },
                    title: "Channels for Vibration Stops",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["amc_tag"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.AMC"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.AMC",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.AMC",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.ContactPoint"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.ContactPoint",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.ContactPoint",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  x_limits: {
                    description: "x-limits for the DorolVibroHistogram plots",
                    properties: {
                      grinding_bed_height: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        title: "grinding bed height",
                        type: "object"
                      },
                      grinding_bed_height_damping_side: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        title: "grinding bed height damping side",
                        type: "object"
                      }
                    },
                    title: "x-limits",
                    type: "object"
                  },
                  y_limits: {
                    description: "y-limits for the DorolVibroHistogram plots",
                    properties: {
                      grinding_bed_height_working_side: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        title: "grinding bed height working side",
                        type: "object"
                      },
                      max_mill_vibration: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        title: "max mill vibration",
                        type: "object"
                      }
                    },
                    title: "y-limits",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["x_limits", "y_limits"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.DorolVibroHistogram"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.DorolVibroHistogram",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.DorolVibroHistogram",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  channels: {
                    description:
                      "List of all error channels considered in figure",
                    format: "table",
                    items: {
                      properties: {
                        channel: {
                          description: "Channel name or pandas formula",
                          title: "Channel",
                          type: "string"
                        },
                        label: {
                          title: "Label",
                          type: "string"
                        }
                      },
                      required: ["channel", "label"],
                      title: "Name",
                      type: "object"
                    },
                    title: "Channels",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["channels"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.ErrorcodeOverview"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.ErrorcodeOverview",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.ErrorcodeOverview",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  errornames: {
                    items: {
                      title: "Errorname",
                      type: "string"
                    },
                    title: "Required Errornames",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["errornames"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.ErrorcodeStatistic"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.ErrorcodeStatistic",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.ErrorcodeStatistic",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  x_limits: {
                    description: "Set the x-axis range for histograms",
                    properties: {
                      hist_feed: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        type: "object"
                      },
                      hist_power: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        type: "object"
                      },
                      hist_tablespeed: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        type: "object"
                      },
                      hist_vibro: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        type: "object"
                      },
                      hist_wm: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        type: "object"
                      }
                    },
                    title: "X limits",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["x_limits"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.Histograms"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.Histograms",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.Histograms",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.MetalDetection"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.MetalDetection",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.MetalDetection",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.MillStops"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.MillStops",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.MillStops",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.MonthOverview"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.MonthOverview",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.MonthOverview",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  design_values: {
                    format: "tabs",
                    items: {
                      headerTemplate: "{{ self.product}}",
                      properties: {
                        factors: {
                          format: "tabs",
                          items: {
                            headerTemplate: "{{ self.name}}",
                            properties: {
                              name: {
                                type: "string"
                              },
                              values: {
                                format: "table",
                                items: {
                                  type: "number"
                                },
                                maxlen: "3",
                                minlen: "1",
                                type: "array"
                              }
                            },
                            required: ["name", "values"],
                            type: "object"
                          },
                          type: "array"
                        },
                        product: {
                          type: "string"
                        }
                      },
                      required: ["product", "factors"],
                      type: "object"
                    },
                    title: "Design Values",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["design_values"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.PerformanceIndicators"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.PerformanceIndicators",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.PerformanceIndicators",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.PerformanceTables"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.PerformanceTables",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.PerformanceTables",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.PositionRUs"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.PositionRUs",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.PositionRUs",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                title: "Module Settings"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.ProductQuality"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.ProductQuality",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.ProductQuality",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.StopperContacts"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.StopperContacts",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.StopperContacts",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  "SW Torque warning max": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "SW Torque warning max",
                    type: "object"
                  },
                  "Speed high error": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "Speed high error",
                    type: "object"
                  },
                  "Speed low error": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "Speed low error",
                    type: "object"
                  },
                  "Speed warning": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "Speed warning",
                    type: "object"
                  },
                  "Torque warning max": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "Torque warning max",
                    type: "object"
                  },
                  "Torque warning min": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "Torque warning min",
                    type: "object"
                  },
                  "Torque warning negative peak": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "Torque warning negative peak",
                    type: "object"
                  },
                  "Torque warning other": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "Torque warning other",
                    type: "object"
                  },
                  "Torque warning positive peak": {
                    properties: {
                      ref_value: {
                        title: "reference value",
                        type: "number"
                      },
                      reflabel: {
                        title: "Label of reference value",
                        type: "string"
                      },
                      ylo: {
                        title: "lower y-limit",
                        type: "number"
                      },
                      yup: {
                        title: "upper y-limit",
                        type: "number"
                      }
                    },
                    title: "Torque warning positive peak",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.TebefaErrorAnalysis"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.TebefaErrorAnalysis",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.TebefaErrorAnalysis",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  power_ref: {
                    title: "Reference value power [kW]",
                    type: "number"
                  },
                  torque_ref: {
                    title: "Reference value torque [kNm]",
                    type: "number"
                  },
                  y_limits: {
                    properties: {
                      power: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        type: "object"
                      },
                      torque: {
                        format: "table",
                        properties: {
                          lo: {
                            title: "lower limit",
                            type: "number"
                          },
                          up: {
                            title: "upper limit",
                            type: "number"
                          }
                        },
                        type: "object"
                      }
                    },
                    title: "Y limits",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["torque_ref", "power_ref", "y_limits"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.Trends"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.Trends",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.Trends",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  utilisation: {
                    description: "Declare the amount for each parameter",
                    properties: {
                      downtime_24h: {
                        title: "Downtime_24h",
                        type: "integer"
                      },
                      mill_stops_equipment: {
                        title: "Mill_stops_equipment",
                        type: "integer"
                      },
                      mill_stops_startproc: {
                        title: "Mill_stops_startproc",
                        type: "integer"
                      },
                      mill_stops_vibro: {
                        title: "Mill_stops_vibro",
                        type: "integer"
                      },
                      operation_time: {
                        title: "Operation_time",
                        type: "integer"
                      },
                      total_mill_stops: {
                        title: "Total_mill_stops",
                        type: "integer"
                      }
                    },
                    required: [
                      "downtime_24h",
                      "mill_stops_equipment",
                      "mill_stops_startproc",
                      "mill_stops_vibro",
                      "operation_time",
                      "total_mill_stops"
                    ],
                    title: "Utilisation",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["utilisation"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.UtilisationIndicators"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.UtilisationIndicators",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.UtilisationIndicators",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  chapters: {
                    additionalProperties: {
                      type: "boolean"
                    },
                    title: "Chapters",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["chapters"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["elec_HCl.ElectrolysisReport"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "elec_HCl.ElectrolysisReport",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "elec_HCl.ElectrolysisReport",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  chapters: {
                    additionalProperties: {
                      type: "boolean"
                    },
                    title: "Chapters",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["chapters"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["elec_NaCl.ElectrolysisReport"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "elec_NaCl.ElectrolysisReport",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "elec_NaCl.ElectrolysisReport",
            type: "object"
          }
        ]
      },
      options: {
        keep_oneof_values: true
      },
      propertyOrder: 30,
      title: "Analysis modules",
      type: "array"
    },
    output_modules: {
      description: "List of output modules",
      items: {
        headerTemplate: "{{ self.name }}",
        oneOf: [
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  template_name: {
                    default: "template.docx",
                    title: "Template file",
                    type: "string"
                  },
                  variables: {
                    description:
                      "Placeholders in the template, marked with {{variable_name}} will be replaced with the resulting text",
                    format: "table",
                    items: {
                      properties: {
                        name: {
                          propertyOrder: 15,
                          title: "Variable Name",
                          type: "string"
                        },
                        value: {
                          propertyOrder: 16,
                          title: "Replacement Text",
                          type: "string"
                        }
                      },
                      required: ["name", "value"],
                      title: "new name",
                      type: "object"
                    },
                    propertyOrder: 11,
                    title: "Placeholders",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["variables", "template_name"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["documentwriter.DocumentWriter"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "documentwriter.DocumentWriter",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "documentwriter.DocumentWriter",
            type: "object"
          }
        ]
      },
      options: {
        keep_oneof_values: true
      },
      propertyOrder: 31,
      title: "Output Modules",
      type: "array"
    },
    preprocess_modules: {
      description: "List of preprocess modules",
      format: "tabs",
      items: {
        headerTemplate: "{{ self.name }}",
        oneOf: [
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  channel_list: {
                    description:
                      "This list shows the unique assignment of field names to Indigo Ids. The list is collapsed by default.",
                    format: "table",
                    items: {
                      properties: {
                        id: {
                          propertyOrder: 11,
                          title: "Id",
                          type: "number"
                        },
                        name: {
                          propertyOrder: 10,
                          title: "Name",
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    options: {
                      collapsed: true
                    },
                    propertyOrder: 12,
                    title: "List of available channels",
                    type: "array"
                  },
                  fill_mode: {
                    description: "Fill mode for missing data",
                    propertyOrder: 11,
                    title: "Fill mode",
                    type: "string"
                  },
                  freq: {
                    description:
                      "The frequency at which data points are requested from tkcloud API",
                    propertyOrder: 10,
                    title: "Frequency",
                    type: "string"
                  },
                  skip_dates: {
                    description: "Skip the following date ranges",
                    format: "table",
                    items: {
                      properties: {
                        start_date: {
                          format: "datetime",
                          options: {
                            inputAttributes: {
                              placeholder: "YYYY-MM-DD HH:MM:SS"
                            }
                          },
                          propertyOrder: 10,
                          title: "Start Date",
                          type: "string"
                        },
                        stop_date: {
                          format: "datetime",
                          options: {
                            inputAttributes: {
                              placeholder: "YYYY-MM-DD HH:MM:SS"
                            }
                          },
                          propertyOrder: 11,
                          title: "Stop Date",
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    propertyOrder: 12,
                    title: "Date Range Excluder",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["freq", "fill_mode", "channel_list", "skip_dates"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["data_providers.IndigoDataReader"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "data_providers.IndigoDataReader",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "data_providers.IndigoDataReader",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  files_pattern: {
                    title: "Files_pattern",
                    type: "string"
                  },
                  freq: {
                    title: "Choose Frequency",
                    type: "string"
                  },
                  merge: {
                    title: "Merge",
                    type: "string"
                  }
                },
                propertyOrder: 12,
                required: ["files_pattern", "freq", "merge"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["data_providers.NpzDataReader"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "data_providers.NpzDataReader",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "data_providers.NpzDataReader",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  filters: {
                    items: {
                      headerTemplate: "{{ self.name}}",
                      properties: {
                        name: {
                          default: "filter_name",
                          title: "Filter name",
                          type: "string"
                        },
                        thresholds: {
                          description:
                            "Choose the used data by specifying the operation threshold rule",
                          items: {
                            format: "table",
                            properties: {
                              channel: {
                                title: "Channel name",
                                type: "string"
                              },
                              operator: {
                                enum: ["<", ">", "<=", ">=", "!=", ">"],
                                title: "Operator",
                                type: "string"
                              },
                              threshold: {
                                title: "Threshold",
                                type: "integer"
                              }
                            },
                            required: ["channel", "threshold", "operator"],
                            title: "Threshold",
                            type: "object"
                          },
                          title: "Operating Thresholds",
                          type: "array"
                        }
                      },
                      type: "object"
                    },
                    title: "DataFrame Filters",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["filters"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.DataFrameFilters"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.DataFrameFilters",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.DataFrameFilters",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  filters: {
                    items: {
                      headerTemplate: "{{ self.name}}",
                      properties: {
                        daytime: {
                          items: {
                            properties: {
                              end: {
                                description: "Format: hh:mm:ss",
                                propertyOrder: 2,
                                title: "End UTC",
                                type: "string"
                              },
                              start: {
                                description: "Format: hh:mm:ss",
                                propertyOrder: 1,
                                title: "Start UTC",
                                type: "string"
                              }
                            },
                            title: "time filter",
                            type: "object"
                          },
                          title: "Time of Day (UTC)",
                          type: "array"
                        },
                        filter_syntax: {
                          description: "Pandas Syntax",
                          propertyOrder: 2,
                          title: "Filter",
                          type: "string"
                        },
                        name: {
                          default: "filter_name",
                          propertyOrder: 1,
                          title: "Filter name",
                          type: "string"
                        },
                        weekday: {
                          properties: {
                            "0": {
                              default: true,
                              format: "checkbox",
                              propertyOrder: 1,
                              title: "Monday",
                              type: "boolean"
                            },
                            "1": {
                              default: true,
                              format: "checkbox",
                              propertyOrder: 2,
                              title: "Tuesday",
                              type: "boolean"
                            },
                            "2": {
                              default: true,
                              format: "checkbox",
                              propertyOrder: 3,
                              title: "Wednesday",
                              type: "boolean"
                            },
                            "3": {
                              default: true,
                              format: "checkbox",
                              propertyOrder: 4,
                              title: "Thursday",
                              type: "boolean"
                            },
                            "4": {
                              default: true,
                              format: "checkbox",
                              propertyOrder: 5,
                              title: "Friday",
                              type: "boolean"
                            },
                            "5": {
                              default: true,
                              format: "checkbox",
                              propertyOrder: 6,
                              title: "Saturday",
                              type: "boolean"
                            },
                            "6": {
                              default: true,
                              format: "checkbox",
                              propertyOrder: 7,
                              title: "Sunday",
                              type: "boolean"
                            }
                          },
                          propertyOrder: 3,
                          title: "Weekday",
                          type: "object"
                        }
                      },
                      type: "object"
                    },
                    title: "DataFrame Filters",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["filters"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["generic.DataFrameFiltersPandas"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "generic.DataFrameFiltersPandas",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "generic.DataFrameFiltersPandas",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                title: "Module Settings"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["pet.SasaInitializer"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "pet.SasaInitializer",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "pet.SasaInitializer",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  bit_names: {
                    description: "List of all bits starting from lowest bit",
                    format: "table",
                    items: {
                      title: "Name",
                      type: "string"
                    },
                    title: "Bit Names",
                    type: "array"
                  },
                  field: {
                    description: "Channel from which bits are extracted",
                    title: "Field",
                    type: "string"
                  }
                },
                propertyOrder: 12,
                required: ["bit_names", "field"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.BitDecoder"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.BitDecoder",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.BitDecoder",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  operating_thresholds: {
                    description:
                      "Choose the used data by specifying the operation threshold rule",
                    items: {
                      properties: {
                        channel: {
                          title: "Channel name",
                          type: "string"
                        },
                        operator: {
                          enum: ["<=", ">="],
                          title: "Operator",
                          type: "string"
                        },
                        threshold: {
                          title: "Threshold",
                          type: "integer"
                        }
                      },
                      required: ["channel", "threshold", "operator"],
                      title: "Threshold",
                      type: "object"
                    },
                    title: "Operating Thresholds",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["operating_thresholds"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.CalcMillOper"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.CalcMillOper",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.CalcMillOper",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  data: {
                    format: "table",
                    properties: {
                      roller_speed_tag: {
                        default: "SpeedVFD{}_mitte60s",
                        description:
                          "Specify tag for roller speed (with placeholder {} for roller number).",
                        title: "Roller speed tag",
                        type: "string"
                      },
                      table_speed_tag: {
                        default: "TableSpeed_mitte60s",
                        description: "Specify tag for table speed.",
                        title: "Table speed tag",
                        type: "string"
                      }
                    },
                    propertyOrder: 1,
                    title: "Data",
                    type: "object"
                  },
                  roller_specs: {
                    format: "table",
                    properties: {
                      b_roller: {
                        default: "710",
                        description: "Roller width [mm].",
                        title: "Roller Width",
                        type: "number"
                      },
                      d_roller: {
                        default: "2540",
                        description: "Roller diameter [mm].",
                        title: "Roller Diameter",
                        type: "number"
                      },
                      d_table: {
                        default: "4370",
                        description: "Table diameter [mm].",
                        title: "Table Diameter",
                        type: "number"
                      },
                      transmission: {
                        default: "28.75",
                        description:
                          "Gearbox transmission from motor to roller unit.",
                        title: "Transmission",
                        type: "number"
                      }
                    },
                    propertyOrder: 2,
                    title: "Roller Unit Specifications",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["data"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.ContactPointsPre"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.ContactPointsPre",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.ContactPointsPre",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.MillOperationTime"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.MillOperationTime",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.MillOperationTime",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  error_tag: {
                    properties: {
                      err_threshold: {
                        title: "Error_threshold",
                        type: "integer"
                      },
                      name: {
                        title: "Name",
                        type: "string"
                      }
                    },
                    required: ["err_threshold", "name"],
                    title: "Error_tag",
                    type: "object"
                  },
                  mill_stop_triggers: {
                    properties: {
                      vib_lvl: {
                        title: "Vib_lvl",
                        type: "integer"
                      }
                    },
                    required: ["vib_lvl"],
                    title: "Mill_stop_triggers",
                    type: "object"
                  },
                  millstops_filter: {
                    description:
                      "Time and weekday filter for calculation of millstops.",
                    properties: {
                      daytime: {
                        description:
                          "Select day times for that shall be excluded for millstop calculation",
                        items: {
                          properties: {
                            end: {
                              default: "",
                              description: "Format: hh:mm:ss",
                              propertyOrder: 2,
                              title: "End UTC",
                              type: "string"
                            },
                            start: {
                              default: "",
                              description: "Format: hh:mm:ss",
                              propertyOrder: 1,
                              title: "Start UTC",
                              type: "string"
                            }
                          },
                          title: "time filter",
                          type: "object"
                        },
                        title: "Excluded Times of Day (UTC)",
                        type: "array"
                      },
                      weekday: {
                        description:
                          "Select weekdays that shall be excluded for millstop calculation",
                        properties: {
                          "0": {
                            default: false,
                            format: "checkbox",
                            propertyOrder: 1,
                            title: "Monday",
                            type: "boolean"
                          },
                          "1": {
                            default: false,
                            format: "checkbox",
                            propertyOrder: 2,
                            title: "Tuesday",
                            type: "boolean"
                          },
                          "2": {
                            default: false,
                            format: "checkbox",
                            propertyOrder: 3,
                            title: "Wednesday",
                            type: "boolean"
                          },
                          "3": {
                            default: false,
                            format: "checkbox",
                            propertyOrder: 4,
                            title: "Thursday",
                            type: "boolean"
                          },
                          "4": {
                            default: false,
                            format: "checkbox",
                            propertyOrder: 5,
                            title: "Friday",
                            type: "boolean"
                          },
                          "5": {
                            default: false,
                            format: "checkbox",
                            propertyOrder: 6,
                            title: "Saturday",
                            type: "boolean"
                          },
                          "6": {
                            default: false,
                            format: "checkbox",
                            propertyOrder: 7,
                            title: "Sunday",
                            type: "boolean"
                          }
                        },
                        propertyOrder: 3,
                        title: "Excluded Weekdays",
                        type: "object"
                      }
                    },
                    title: "Millstop Filter",
                    type: "object"
                  }
                },
                propertyOrder: 12,
                required: ["error_tag", "mill_stop_triggers"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.MillStopsPre"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.MillStopsPre",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.MillStopsPre",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  calc_tags: {
                    description:
                      "You can calculate new channels with a formula or just rename existing channels.",
                    format: "table",
                    items: {
                      properties: {
                        name: {
                          title: "Name",
                          type: "string"
                        },
                        rule: {
                          title: "Formula",
                          type: "string"
                        }
                      },
                      required: ["name", "rule"],
                      title: "Parameter",
                      type: "object"
                    },
                    options: {
                      collapsed: true
                    },
                    propertyOrder: 11,
                    title: "Tag Calculator",
                    type: "array"
                  },
                  machine_type: {
                    description: "Specify the properties of the machine",
                    options: {
                      collapsed: true
                    },
                    properties: {
                      class: {
                        enum: ["quadrupol", "dorol"],
                        type: "string"
                      },
                      drive: {
                        enum: ["roller_units", "table"],
                        title: "drive of",
                        type: "string"
                      },
                      n_roller_units: {
                        enum: [1, 2, 3, 4, 5, 6],
                        type: "number"
                      }
                    },
                    title: "Machine type",
                    type: "object"
                  },
                  norm_tags: {
                    description:
                      "Multiple channels (e.g. caused by renaming) are merged into one and named according to the normed name.",
                    format: "table",
                    items: {
                      properties: {
                        names: {
                          propertyOrder: 11,
                          title: "List of comma separated tag names",
                          type: "string"
                        },
                        norm_name: {
                          propertyOrder: 10,
                          title: "Normed Name",
                          type: "string"
                        }
                      },
                      required: ["norm_name", "names"],
                      title: "new name",
                      type: "object"
                    },
                    options: {
                      collapsed: true
                    },
                    propertyOrder: 10,
                    title: "Tag Normer",
                    type: "array"
                  },
                  product_types: {
                    description: "Choose product type",
                    oneOf: [
                      {
                        properties: {
                          origin: {
                            enum: ["set_single_product"],
                            options: {
                              hidden: true
                            },
                            title: "method to set product type",
                            type: "string"
                          },
                          product_dict: {
                            additionalProperties: false,
                            properties: {
                              id: {
                                enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                                type: "number"
                              },
                              name: {
                                type: "string"
                              }
                            },
                            required: ["id", "name"],
                            title: "Single product",
                            type: "object"
                          }
                        },
                        title: "set single product",
                        type: "object"
                      },
                      {
                        properties: {
                          origin: {
                            enum: ["from_product_tag"],
                            options: {
                              hidden: true
                            },
                            title: "method to set product type",
                            type: "string"
                          },
                          product_dict: {
                            format: "table",
                            items: {
                              properties: {
                                id: {
                                  title: "id in channel",
                                  type: "number"
                                },
                                name: {
                                  type: "string"
                                }
                              },
                              required: ["id", "name"],
                              title: "product",
                              type: "object"
                            },
                            title: "Products",
                            type: "array"
                          }
                        },
                        title: "from product tag",
                        type: "object"
                      }
                    ],
                    title: "Origin of product types"
                  },
                  split_into: {
                    enum: ["productTypes", "plantLoads"],
                    title: "Split evaluations in:",
                    type: "string"
                  },
                  vibro_tag: {
                    enum: ["VibrationRU1_max60s", "VibrationMill_max60s"],
                    title: "Tag utilized for vibration analysis",
                    type: "string"
                  }
                },
                propertyOrder: 12,
                required: [
                  "machine_type",
                  "split_into",
                  "product_types",
                  "vibro_tag"
                ],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.PlantInitializer"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.PlantInitializer",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.PlantInitializer",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.PlantLoad"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.PlantLoad",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.PlantLoad",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.ProducedProductTypes"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.ProducedProductTypes",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.ProducedProductTypes",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  RU_position_filter: {
                    properties: {
                      filter1: {
                        title: "Filter 1",
                        type: "number"
                      },
                      filter2: {
                        title: "Filter 2",
                        type: "number"
                      }
                    },
                    required: ["filter1", "filter2"],
                    title: "RU Positions Filter",
                    type: "object"
                  },
                  Stopper_Positions: {
                    properties: {
                      RU1: {
                        title: "RU1",
                        type: ["number", "null"]
                      },
                      RU2: {
                        title: "RU2",
                        type: ["number", "null"]
                      },
                      RU3: {
                        title: "RU3",
                        type: ["number", "null"]
                      },
                      RU4: {
                        title: "RU4",
                        type: ["number", "null"]
                      }
                    },
                    required: ["RU1", "RU2", "RU3", "RU4"],
                    title: "Stopper_positions"
                  }
                },
                propertyOrder: 12,
                required: ["RU_position_filter", "Stopper_Positions"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.StopperContactsPre"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.StopperContactsPre",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.StopperContactsPre",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                propertyOrder: 12,
                required: [],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.TorqueOutlierRemover"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.TorqueOutlierRemover",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.TorqueOutlierRemover",
            type: "object"
          },
          {
            options: {
              additionalProperties: true,
              collapsed: false
            },
            properties: {
              config: {
                description: "Settings for this module",
                options: {
                  collapsed: false
                },
                properties: {
                  parameters: {
                    description:
                      "Clip or Drop (set to nan) values outside valid parameter range. The drop_row action drops the data for all tags which fullfil the condition.",
                    format: "table",
                    items: {
                      properties: {
                        Action: {
                          enum: ["drop", "clip", "drop_row"],
                          propertyOrder: 4,
                          type: "string"
                        },
                        Max: {
                          propertyOrder: 3,
                          type: "number"
                        },
                        Min: {
                          propertyOrder: 2,
                          type: "number"
                        },
                        Name: {
                          propertyOrder: 1,
                          type: "string"
                        }
                      },
                      title: "Parameter Name",
                      type: "object"
                    },
                    title: "Valid Parameter Range",
                    type: "array"
                  }
                },
                propertyOrder: 12,
                required: ["parameters"],
                title: "Module Settings",
                type: "object"
              },
              enabled: {
                default: true,
                description: "Enable / Disable module",
                format: "checkbox",
                propertyOrder: 11,
                title: "Enabled",
                type: "boolean"
              },
              module: {
                description: "Python Module",
                enum: ["vrm.ValidParameterRange"],
                options: {
                  hidden: true
                },
                title: "Module",
                type: "string"
              },
              name: {
                default: "vrm.ValidParameterRange",
                description:
                  "Change name to better identify the module in the config",
                propertyOrder: 10,
                title: "Name",
                type: "string"
              }
            },
            required: ["module", "enabled", "config", "name"],
            title: "vrm.ValidParameterRange",
            type: "object"
          }
        ]
      },
      options: {
        keep_oneof_values: true
      },
      propertyOrder: 29,
      title: "Preprocess Modules",
      type: "array"
    }
  },
  required: ["analysis_modules", "preprocess_modules"],
  title: "Report Settings",
  type: "object"
};
