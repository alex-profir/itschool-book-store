import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <Box>
      <Header />
      <Container maxWidth="xs">
        <Outlet />
      </Container>
    </Box>
  );
}
