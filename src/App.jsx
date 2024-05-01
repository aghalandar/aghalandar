import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import Research from "./Research";
import Posts from "./Posts";
import Contact from "./Contact";
import RootLayout from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/Research" element={<Research />} />
      <Route path="/Posts" element={<Posts />} />
      <Route path="/Contact" element={<Contact />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
