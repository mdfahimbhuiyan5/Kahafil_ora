import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayouts.jsx", [
    // Home Page
    index("./pages/Home.jsx"),

    // Article Routes
    route("/articles/cybersecurity", "./pages/articles/CybersecurityArticle.jsx"),
    route("/articles/education-tech", "./pages/articles/EducationTechArticle.jsx"),
    route("/articles/public-speaking-training", "./pages/articles/PublicTraining.jsx"),
    route("/articles/recent-event-activates", "./pages/articles/RecentEvent.jsx"),
    route("/articles/social-activities", "./pages/articles/SocialActivities.jsx"),
  ]),
] satisfies RouteConfig;
