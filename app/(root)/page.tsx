import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTES } from "../consts/Routes";

const Home = async () => {
  const session = await auth();
  return <></>;
};

export default Home;
