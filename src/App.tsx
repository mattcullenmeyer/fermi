import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// Components
import { Paper } from '@mui/material';
// State
import { fetchUser } from './state/slices/userSlice';
import { useAppDispatch } from './state/store';
import { GlobalContext } from './state/context';
// Constants
import { FERMI_REFRESH_TOKEN } from './constants/cookies';
import { THEME_MODE } from './constants/localStorage';
// Other
import { Routes } from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeMode } from './types/user';

export const App = () => {
  const dispatch = useAppDispatch();
  // TODO: Get dark mode from user account if logged in
  // const { user } = useAppSelector((state) => state);

  const themeMode = localStorage.getItem(THEME_MODE) as ThemeMode;
  const [isDarkMode, setIsDarkMode] = useState(themeMode === ThemeMode.Dark);
  const globalContextValue = { isDarkMode, setIsDarkMode };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? ThemeMode.Dark : ThemeMode.Light,
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
        <Paper style={{ minHeight: '100vh' }}>
          <Routes />
        </Paper>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
