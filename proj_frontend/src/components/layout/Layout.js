import {CssBaseline, ThemeProvider} from '@material-ui/core';
import { useTheme } from './overallTheme.js';

function Layout(props) {
  const theme = useTheme();

  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {props.children}
      </main>
    </ThemeProvider>
  </>
}

export default Layout;