import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("route/admin/admin-layout.tsx", [
    route('dashboard', 'route/admin/dashboard.tsx'),
    route('all-users', 'route/admin/all-users.tsx')

  ]),
  

] satisfies RouteConfig;