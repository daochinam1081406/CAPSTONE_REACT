import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/home/pages/Home";
import Details from "./modules/details/pages/Details";
import Signin from "./modules/auth/pages/Signin";
import Signup from "./modules/auth/pages/Signup";

import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/details/:movieId" element={<Details />} />
            <Route
              path="/tickets/:ticketId"
              element={
                <PrivateRoute>
                  <h1>Tickets</h1>
                </PrivateRoute>
              }
            />

            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
