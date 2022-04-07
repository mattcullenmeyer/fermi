import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// Components
import { Paper } from '@mui/material';
// State
import { fetchUser, ThemeMode } from './state/slices/userSlice';
import { useAppDispatch } from './state/store';
import { GlobalContext } from './state/context';
// Constants
import { FERMI_REFRESH_TOKEN } from './constants/cookies';
import { THEME_MODE } from './constants/localStorage';
// Other
import { Routes } from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const App = () => {
  const dispatch = useAppDispatch();
  // TODO: Get dark mode from user account if logged in
  // const { user } = useAppSelector((state) => state);

  const themeMode = localStorage.getItem(THEME_MODE) as ThemeMode;
  const [isDarkMode, setIsDarkMode] = useState(themeMode === 'dark');
  const globalContextValue = { isDarkMode, setIsDarkMode };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  const fermiRefreshToken = Cookies.get(FERMI_REFRESH_TOKEN);

  useEffect(() => {
    if (fermiRefreshToken) {
      dispatch(fetchUser());
    }
  }, [fermiRefreshToken]);

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: '100vh' }}>
          <Routes />
        </Paper>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
