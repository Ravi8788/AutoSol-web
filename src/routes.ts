import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Training from "./pages/Training";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Industries from "./pages/Industries";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "services/:slug", Component: ServiceDetail },
      { path: "solutions", Component: Industries },
      { path: "products", Component: Products },
      { path: "products/:slug", Component: ProductDetail },
      { path: "work", Component: Work },
      { path: "work/:slug", Component: ProjectDetail },
      { path: "training", Component: Training },
      { path: "insights", Component: Insights },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
      { path: "industries", Component: Industries },
      { path: "*", Component: NotFound },
    ],
  },
]);
