import { extendTheme } from "@chakra-ui/react";

const config = {
   // initialColorMode: "dark",
   useSystemColorMode: true
};

const colors = {
   brand: {
      100: "#FF6161"
   },
   b: {
      0: "#1E1E1E",
      1: "#292929",
      2: "#313131",
      3: "#565656",
      4: "#8A8A8A"
   },
   or: {
      1: "#FF8759",
      2: "#FFA27E"
   },
   gb: {
      1: "#3E4551",
      2: "#5A6475",
      3: "#8692A3",
      4: "#BABABA"
   }
}

const components = {
   Button: {
      baseStyle: {
         _hover: {},
      },
      variants: {
         primary: {
            bg: "gb.1",
            color: "gb.3",
            _hover: {
               bg: "",
            },
         },
         primary_noHover: {
            bg: "b.2",
            color: "gb.3",
            _hover: {
               bg: "",
            },
         },
         dino_btn: {
            bg: "b.2",
            color: "b.4",
            _hover: {
               bg: "",
            },
         },
         footer_btn: {
            bg: "#252525",
            color: "b.4",
            _hover: {
               bg: "",
            },
         },
      },
   },


};

const ChakraTheme = extendTheme({ config, colors, components })

export default ChakraTheme;