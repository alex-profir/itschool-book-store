import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

import * as Pages from "../pages";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/register" element={<Pages.Register />} />
      </Route>
    </Routes>
  );
}
