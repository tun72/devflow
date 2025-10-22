export const ROUTES = {
  SignIn: "/sign-in",
  SignUp: "/sign-up",
  home: "/",
  profile: (id: string): string => `/profile/${id}`,
  tags: (id: string) => `/tags/${id}`,
};
