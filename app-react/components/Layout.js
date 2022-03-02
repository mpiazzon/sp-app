import React from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuIcon,
  Container,
  Typography,
} from "@mui/material";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>sp App</title>
        <meta name="description" content="app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography variant="h6" noWrap component="div">
            SP
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>{children}</Container>
    </div>
  );
}
