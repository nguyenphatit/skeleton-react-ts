import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./context/AuthContext";
import theme from "./theme";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Manatee = lazy(() => import("./pages/manatee"));

const App: FC = () => {
  const renderRoutes = () => {
    return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RequireAuth children={<Home />} />} />
          <Route path="/manatee" element={<RequireAuth children={<Manatee />} />} />
        </Route>
      </Routes>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Suspense fallback={<p>Loading...</p>}>{renderRoutes()}</Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
