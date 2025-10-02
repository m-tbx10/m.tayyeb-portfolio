import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import About from "./routes/About.jsx";
import Projects from "./routes/Projects.jsx";
import Blogs from "./routes/Blogs.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/blogs", element: <Blogs /> },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
