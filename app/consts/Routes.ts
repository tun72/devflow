export const ROUTES = {
  SignIn: "/sign-in",
  SignUp: "/sign-up",
  home: "/",
  profile: (id: string): string => `/profile/${id}`,
  question: (id: string) => `/question/${id}`,
  tags: (id: string) => `/tags/${id}`,
  ask_questuon: "/ask-question",
};
