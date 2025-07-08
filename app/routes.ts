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
    // Routes for individual article pages
    route("/articles/cybersecurity", "./pages/articles/CybersecurityArticle.jsx"),
    route("/articles/education-tech", "./pages/articles/EducationTechArticle.jsx"),
    // Route for Public Speaking & Training articles page
    route("/articles/public-speaking-training", "./pages/articles/PublicTraining.jsx"),
    // Route for Recent Event Activates articles page
    route("/articles/recent-event-activates", "./pages/articles/RecentEvent.jsx"),
    route("/articles/social-activities", "./pages/articles/SocialActivities.jsx"),
  ]),
] satisfies RouteConfig;
