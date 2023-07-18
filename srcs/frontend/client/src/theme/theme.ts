import {
  extendTheme,
  ThemeConfig,
  ComponentStyleConfig,
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

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#F8F9FD",
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
    Link: {
      baseStyle: {
        fontFamily: "Poppins",
      },
    },
  },
});

export default theme;
