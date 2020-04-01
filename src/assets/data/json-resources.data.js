export const jsonResources = {
  analysis_modules: [
    {
      config: {},
      enabled: true,
      module: "vrm.MonthOverview",
      name: "vrm.MonthOverview"
    },
    {
      config: {
        design_values: [
          {
            factors: [
              {
                name: "durchsatz",
                values: [74, 6, 0.85]
              },
              {
                name: "stop_cont",
                values: [100]
              },
              {
                name: "sum_wm",
                values: [43.03, 72.88, -0.2985]
              },
              {
                name: "vibr_niv",
                values: [1, 3.5, -0.025]
              },
              {
                name: "water",
                values: [1.8, 2.8, -0.01]
              },
              {
                name: "wm_fan",
                values: [12.14, 20.56, -0.0842]
              },
              {
                name: "wm_muehle",
                values: [27.61, 37.66, -0.1005]
              },
              {
                name: "wm_sepol",
                values: [1.27, 2.12, -0.0085]
              }
            ],
            product: "CEM1"
          },
          {
            factors: [
              {
                name: "durchsatz",
                values: [130.7, 31.6, 0.53]
              },
              {
                name: "stop_cont",
                values: [100]
              },
              {
                name: "sum_wm",
                values: [35.6, 72.88, -0.2985]
              },
              {
                name: "vibr_niv",
                values: [1, 3.5, -0.025]
              },
              {
                name: "water",
                values: [1.8, 2.8, -0.01]
              },
              {
                name: "wm_fan",
                values: [12.14, 20.56, -0.0842]
              },
              {
                name: "wm_muehle",
                values: [23.02, 41.62, -0.186]
              },
              {
                name: "wm_sepol",
                values: [1.47, 3.026, -0.0156]
              }
            ],
            product: "CEM2"
          },
          {
            factors: [
              {
                name: "durchsatz",
                values: [119, 79.4, 2.32]
              },
              {
                name: "stop_cont",
                values: [100]
              },
              {
                name: "sum_wm",
                values: [35.86, 74.06, -0.382]
              },
              {
                name: "vibr_niv",
                values: [1, 3.5, -0.025]
              },
              {
                name: "water",
                values: [1.8, 2.8, -0.01]
              },
              {
                name: "wm_fan",
                values: [7.64, 15.786, -0.0814]
              },
              {
                name: "wm_muehle",
                values: [20.66, 36, -0.157]
              },
              {
                name: "wm_sepol",
                values: [1.47, 3.026, -0.0156]
              }
            ],
            product: "Slag"
          }
        ]
      },
      enabled: true,
      module: "vrm.PerformanceIndicators",
      name: "vrm.PerformanceIndicators"
    }
  ],
  output_modules: [
    {
      config: {
        template_name: "template.docx"
      },
      enabled: true,
      module: "documentwriter.DocumentWriter",
      name: "documentwriter.DocumentWriter"
    }
  ],
  preprocess_modules: []
};
