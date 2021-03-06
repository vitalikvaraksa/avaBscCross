import { createTheme } from "@chainsafe/common-theme";

export const lightTheme = createTheme({
  globalStyling: {
    body: {
      backgroundColor: "#F5F5F5",
    },
  },
  themeConfig: {
    constants: {
      navItemHeight: 42,
    },
    palette: {
      additional: {
        general: {
          1: "#85A5FF", // Accents //geekblue4
        },
        transferUi: {
          1: "#595959", // FAQ button // gray8
        },
        header: {
          1: "#F5F5F5", // Background
          2: "#595959", // Text color //gray8
          3: "#BFBFBF", // border // gray6
        },
        preflight: {
          1: "#85A5FF", // Button bg color
          2: "#262626", // Button color
        },
        transactionModal: {
          1: "#597EF7", // border //geekblue5
          2: "#85A5FF", // indicator border //geekblue4
          3: "#2F54EB", // indicator text //geekblue6
        },
      },
    },
    overrides: {
      CheckboxInput: {
        root: {
          alignItems: "center",
        },
      },
      Button: {
        variants: {
          primary: {
            root: {
              backgroundColor: "rgb(57,57,57)",
              color: "#ffffff",
              border: `1px solid #262626`,
              "& svg": {
                fill: "#ffffff",
              },
            },
            active: {
              backgroundColor: "rgb(46,46,46)",
              color: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            hover: {
              backgroundColor: "rgb(46,46,46)",
              color: "#fffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            focus: {
              backgroundColor: "rgb(46,46,46)",
              color: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
          },
          outline: {
            root: {
              backgroundColor: "rgb(34,34,34)",
              color: "#ffffff",
              border: `1px solid #ffffff`,
              "& svg": {
                fill: "#ffffff",
              },
            },
            active: {
              backgroundColor: "rgb(46,46,46)",
              color: "#ffffff",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            hover: {
              backgroundColor: "rgb(46,46,46)",
              color: "#ffffff",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
            focus: {
              backgroundColor: "rgb(34,34,34)",
              color: "#ffffff",
              borderColor: "#ffffff",
              "& svg": {
                fill: "#262626",
              },
            },
          },
        },
      },
    },
  },
});
