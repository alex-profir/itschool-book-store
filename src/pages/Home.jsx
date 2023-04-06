import { useEffect } from "react";
import { useAuthContext } from "../contexts/auth/AuthContext";
import { myBooks } from "../services/book";

export default function () {
  const { user } = useAuthContext();

  // myBooks()
  useEffect(() => {
    myBooks()
      .then((books) => {
        console.log("My Books!");
        console.log(books);
      })
      .catch((err) => {
        console.log("Error!", err);
      });
  }, []);

  return (
    <div>
      {user
        ? `Logged in With ${user.firstName} ${user.lastName}`
        : "Not Logged In"}
      <h1>Home Page</h1>
    </div>
  );
}
