// import NewsTabs from "./Components/NewsTabs";
import { useEffect, useState } from "react";
import NewsCards from "./Components/NewsCards";
import NewsCard from "./Components/NewCard/NewCard";
import NewsTabs from "./Components/NewsTabs";
import AppNavBar from "./Components/NavBar/NavBar";
import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [news, setnews] = useState([]);

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
      <AppNavBar getnews={getnews} />

      <NewsTabs getnews={getnews}></NewsTabs>

      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={4}>
            {news.map((newdata, index) => (
              <NewsCards newdata={newdata} key={index}></NewsCards>
            ))}
          </Grid>
        </Grid>
      </Box> */}

      <div className="cardHolder">
        <NewsCard />
        {news.map((newdata, index) => (
          <NewsCards newdata={newdata} key={index}></NewsCards>
        ))}
      </div>
    </>
  );
}

export default App;
