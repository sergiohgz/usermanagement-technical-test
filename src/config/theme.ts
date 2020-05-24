import { blue, grey, pink } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        background: {
            default: grey[200],
        },
    },
});

export default theme;
