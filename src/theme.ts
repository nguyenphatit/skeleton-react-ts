import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}


const theme = createTheme({
    palette: {
        primary: {
            light: '#338b98',
            main: '#006E7F',
            dark: '#004d58',
            contrastText: '#FFFFFF'
        },
        secondary: {
            light: '#f9d557',
            main: '#F8CB2E',
            dark: '#ad8e20',
            contrastText: '#FFFFFF'
        },
        warning: {
            light: '#f08934',
            main: '#006E7F',
            dark: '#a54b01',
            contrastText: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif'
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 768,
            lg: 1440,
            xl: 1536,
        }
    }
});

export default theme;