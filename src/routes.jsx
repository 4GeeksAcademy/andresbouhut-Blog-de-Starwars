import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Demo from "./pages/Demo";
import CharacterDetails from "./pages/CharacterDetails";
import PlanetDetails from "./pages/PlanetDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />
      <Route path="/single/:type/:theId" element={<Single />} />
      <Route path="/character/:theId" element={<CharacterDetails />} />
      <Route path="/planet/:theId" element={<PlanetDetails />} />
      <Route path="/demo" element={<Demo />} />
    </Route>
  )
);

export default router;