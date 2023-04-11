import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export function BookCard({ book }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 400 }}
        image={book.coverImageURL}
        title={book.title}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            height: "4rem",
            lineHeight: "2rem",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {book.title}
        </Typography>
        <Typography
          sx={{
            height: "4rem",
            lineHeight: "2rem",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          variant="body2"
          color="text.secondary"
        >
          {book.author}
        </Typography>
      </CardContent>
    </Card>
  );
}
