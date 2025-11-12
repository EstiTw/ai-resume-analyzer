import { type RouteConfig, index, route } from "@react-router/dev/routes";

//C:\Users\estit\ai-resume-analyzer\app\routes\auth.tsx
export default [
    index("routes/home.tsx"),
    route("/auth", "routes/auth.tsx")
] satisfies RouteConfig;
