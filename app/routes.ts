import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  route("sign-in", "route/root/sign-in.tsx"),
  route('api/create-trip', 'route/api/create-trip.ts'),
    layout("route/admin/admin-layout.tsx", [
    route('dashboard', 'route/admin/dashboard.tsx'),
    route('all-users', 'route/admin/all-users.tsx'),
    route('trips', 'route/admin/trips.tsx'),
    route('trips/create', 'route/admin/create-trip.tsx'),
    route('trips/:tripId', 'route/admin/trip-detail.tsx'),
  ]),
  layout('route/root/page-layout.tsx', [
    index('route/root/travel-page.tsx')
  ])
  

] satisfies RouteConfig;