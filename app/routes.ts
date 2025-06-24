import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayouts.jsx", [
    index("./pages/Home.jsx"),
    // Add the new routes for your article pages here
    route("/articles/cybersecurity", "./pages/articles/CybersecurityArticle.jsx"),
    route("/articles/education-tech", "./pages/articles/EducationTechArticle.jsx"),
  ]),
] satisfies RouteConfig;
