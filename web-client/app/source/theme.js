import {
  createMuiTheme,
  colors,
  amber,
  green,
  yellow,
  orange,
  brown,
  cyan,
  grey,
  blue,
  teal,
  red,
  lightGreen,
  pink,
  white
} from 'material-ui'


export const theme = createMuiTheme({
  palette: {
    primary: {main: '#151F32'}, // burgundy
    secondary: {main: '#CAA264'}, // teal
    // primary: colors.grey, // burgundy
    // secondary: colors.grey, // teal

    // textPrimary: {main: colors.common.black},
    // textSecondary: {main: colors.common.white},

    background: {main: '#3b152c'}, // grey

    // error: green, // kale green,
    error: {main: '#3f5845'}, // kale green,
    success: {main: '#3f5845'}, // dark purple,

    info: {main: '#8F663D'}, // brown,
    warning: {main: '#8F8F3D'}, // yellow,

    // text: {main: colors.white},

    // primary: {main: grey[200]},
    // secondary: {main: grey[700]},
    //
    // error: {main: grey[500]},
    // success: {main: grey[500]},
    // info: {main: grey[500]},
    // warning: {main: grey[500]},
  },
  overrides: {
    MuiTypography: {
      // colorPrimary: {main: colors.common.white},
      colorTextPrimary: {
        // color: {main: colors.common.white},
        // textColor: {main: colors.common.white},
      },
      button: {
        color: '#CAA264'
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#CAA264',
      },
    },
    MuiTab: {
      textColorInherit: {
        color: '#CAA264',
      },
      root: {
        "&$selected": {
          color: '#CAA264',
        },
      }
    },
  },
})
