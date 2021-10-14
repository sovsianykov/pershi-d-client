import {createTheme} from "@material-ui/core";


 const theme = createTheme({
    palette: {
        main: "#0e729d",
        mainGrad: "linear-gradient( 0deg ,#0e729d, #b6dcf5 10% , #0e729d)",
        dark: "#000000",
        lesson: "#005f80"
    },
     text : {
        shadow: {
            main: "0 0 3px #000000",
        },
     },
     grey : {
        "100": "#ffffff",
        "200": "#e5e5e5",
        "300": "#b9b6b6",
        "400": "#969393",
        "500": "#8a8585",
     }
});

 export default theme