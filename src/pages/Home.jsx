import { Box, Grid } from "@mui/material";
import { BookCard } from "../components/BookCard";

export default function () {
  const books = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid key={book} item xs={12} sm={6} md={3} >
            <BookCard />
          </Grid>
        ))}
        {/* <Grid item xs={6}>
          <BookCard />
        </Grid>
        <Grid item xs={6}>
          <BookCard />
        </Grid> */}
      </Grid>
    </Box>
  );
}
