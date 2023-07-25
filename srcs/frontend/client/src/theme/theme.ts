import {
  extendTheme,
  ThemeConfig,
  ComponentStyleConfig,
  defineStyleConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const FormLabelStyle: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    color: "red",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      color: "#828282",
      paddingLeft: 1,
      marginTop: 4,
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};

const ButtonStyle: ComponentStyleConfig = {
  // style object for base or default style
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      padding: "8px 14px",
      backgroundColor: "primary",
      borderRadius: "8px",
      color: "#fff",
      fontFamily: "Poppins",
      fontWeight: "500",
      _hover: {
        backgroundColor: "primaryLight",
      },

      _active: {
        backgroundColor: "#fff",
        outline: "2px solid #5497f0",
        color: "primary",
      },
    },
    secondary: {
      padding: "8px 14px",
      backgroundColor: "gray.100",
      border: "1px solid rgba(0,0,0,0.1)",
      borderRadius: "8px",
      color: "#828282",
      fontFamily: "Poppins",
      fontSize: "sm",
      fontWeight: "500",
      _hover: {
        backgroundColor: "transparent",
        border: "1px solid #828282",
      },
    },
    largePrimary: {
      padding: "12px 24px",
      backgroundColor: "blue.100",
      border: "1px solid rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      color: "blue.500",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "sm",
      width: "260px",
      borderRadius: "8px",
      _hover: {
        backgroundColor: "transparent",
        border: "1px solid #5497f0",
        color: "primary",
      },
      _active: {
        backgroundColor: "#fff",
        outline: "2px solid #5497f0",
        color: "primary",
      },
    },
    ghost: {
      padding: "8px 14px",
      backgroundColor: "transparent",
      color: "#828282",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "sm",
      borderRadius: "8px",
      _hover: {
        backgroundColor: "gray.100",
      },
    },
    green: {
      padding: "8px 14px",
      backgroundColor: "green.400",
      color: "#fff",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "sm",
      borderRadius: "8px",
      _hover: {
        backgroundColor: "green.500",
      },
    },
    ghostSecondary: {
      padding: "8px 14px",
      backgroundColor: "transparent",
      border: "1px solid white",
      color: "#828282",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "sm",
      borderRadius: "8px",
      _hover: {
        backgroundColor: "transparent",
        border: "1px solid #828282",
      },
    },
    ghostRed: {
      padding: "8px 14px",
      backgroundColor: "transparent",
      border: "1px solid white",
      color: "red",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "sm",
      borderRadius: "8px",
      _hover: {
        border: "1px solid red",
      },
    },
    outlineRed: {
      padding: "8px 14px",
      backgroundColor: "transparent",
      color: "red",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "sm",
      borderRadius: "8px",
      border: "1px solid red",
      _hover: {
        backgroundColor: "red",
        color: "#fff",
      },
    },
    outlineSecondary: {
      padding: "8px 14px",
      backgroundColor: "transparent",
      color: "#828282",
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "sm",
      borderRadius: "8px",
      border: "1px solid #828282",
      _hover: {
        backgroundColor: "#828282",
        color: "#fff",
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "primary",
    colorScheme: "",
  },
};

const InputStyle: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    outline: {
      field: {
        borderColor: "blue.500",
        borderWidth: "0",
        backgroundColor: ".100",
        boxShadow: "0px 2px 8px rgba(220,220,220, 0.8)",
        padding: "8px 14px",
        marginBottom: "3px",
        borderRadius: "8px",
        "&::placeholder": {
          color: "#BDBDBD",
          fontFamily: "Poppins",
        },
      },
    },
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
    focusBorderColor: "primary",
  },
};

const HeadingStyle: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    cardTitle: {
      color: "#000",
      fontFamily: "Noto Sans",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.56px",
      padding: "5px",
    },
    listTitle: {
      color: "#333",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "-0.49px",
    },
    HeaderTitle: {
      color: "#333",
      fontFamily: "Poppins",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
      letterSpacing: "-0.63px",
    },
  },
};

const BoxStyle = defineStyleConfig({
  // style object for base or default style
  baseStyle: {},
  sizes: {},
  variants: {
    smallSpaceBetween: {
      display: "flex",
      margin: "10px auto",
      justifyContent: "space-between",
      width: "90%",
    },
    mdSpaceBetween: {
      display: "flex",
      margin: "10px auto",
      justifyContent: "space-between",
      width: "96%",
      py: "10px",
    },
    boardStack: {
      width: "96%",
      margin: "10px auto",
      boxShadow: "sm",
      display: "flex",
      justifyContent: "flex-start",
      gap: "25px",
      alignItems: "flex-start",
      padding: "18px 14px",
      overflowX: "scroll",
      bg: "#F8F9FD",
      borderRadius: "8px",
      maxHeight: "75vh",
      minHeight: "75vh",
    },
    listStack: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      overflowY: "scroll",
      height: "100%",
      maxHeight: "100%",
      gap: "18px",
      padding: "10px",
    },
    Card: {
      width: "260px",
      px: "5px",
      py: "8px",
      border: "none",
      borderRadius: "8px",
      minHeight: "80px",
      boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.05)",
      _hover: {
        boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.1)",
      },
      _active: {
        outline: "2px solid #5497f0",
      },
    },
    placeHolder: {
      width: "90%",
      height: "70vh",
      borderRadius: "lg",
      bg: "gray.100",
      mx:'auto',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        // bg: "#F8F9FD",
      },
    },
  },
  colors: {
    primary: "#2F80ED",
    primaryLight: "#5497f0",
  },
  components: {
    Input: InputStyle,
    Button: ButtonStyle,
    FormLabel: FormLabelStyle,
    Heading: HeadingStyle,
    BoxStyle: BoxStyle,
    Link: {
      baseStyle: {
        fontFamily: "Poppins",
      },
    },
  },
});

export default theme;
