import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import About from "./routes/About.jsx";
import Projects from "./routes/Projects.jsx";
import Blogs from "./routes/Blogs.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/m.tayyeb-portfolio", element: <App /> },
  { path: "/m.tayyeb-portfolio/about", element: <About /> },
  { path: "/m.tayyeb-portfolio/projects", element: <Projects /> },
  { path: "/m.tayyeb-portfolio/blogs", element: <Blogs /> },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
