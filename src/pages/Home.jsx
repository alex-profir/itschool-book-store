import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth/AuthContext";
import { myBooks } from "../services/book";

export default function () {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    myBooks()
      .then((books) => {
        console.log("My Books!");
        console.log(books);
      })
      .catch((err) => {
        console.log("Error!", err);
      });
  }, [user]);

  return (
    <div>
      {user
        ? `Logged in With ${user.firstName} ${user.lastName}`
        : "Not Logged In"}
      <h1>Home Page</h1>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
