import { useEffect, useState, createContext, useMemo } from "react";
import NewsCard from "./Components/NewCard/NewCard";
import AppNavBar from "./Components/NavBar/NavBar";
import React from "react";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [news, setnews] = useState([]);
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const getnews = async (SelectedtabName) => {
    console.log("in getnews :-", SelectedtabName);
    const res = await fetch(
      `https://inshorts.vercel.app/news?category=${SelectedtabName.toLowerCase()}`
    );
    const data = await res.json();
    setnews(data.articles);
  };

  useEffect(() => {
    getnews("all");
  }, []);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Paper>
            <AppNavBar getnews={getnews} colorMode={colorMode} />
            <Box sx={{ pt: 10, px: 5 }}>
              <Grid container spacing={2}>
                {news.map((newdata, index) => (
                  <Grid item xs={12} md={6} xl={4}>
                    <NewsCard newData={newdata} key={index} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
