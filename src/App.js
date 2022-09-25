// import NewsTabs from "./Components/NewsTabs";
import { useEffect, useState } from "react";
import NewsCard from "./Components/NewCard/NewCard";
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

      <Box sx={{ flexGrow: 1, mt: 10, mx: 5 }}>
        <Grid container spacing={2}>
          {news.map((newdata, index) => (
            <Grid item xs={12} md={6} sm={4}>
              <NewsCard newData={newdata} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <div className="cardHolder">
        {news.map((newData, index) => (
          <>
            <NewsCard key={index} newData={newData} />
          </>
        ))}
      </div> */}
    </>
  );
}

export default App;
