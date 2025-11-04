const dynamicRoutes = ["vue"];
export const router = [
  "/",
  "/about",
  ...dynamicRoutes.map(id => `/project/${id}`)
];
