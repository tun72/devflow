import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTES } from "../consts/Routes";

const Home = async () => {
  const session = await auth();
  return (
    <div className="h1-bold font-space-grotesk pt-20">
      Welcome Back,{session?.user?.name}
      <form
        action={async () => {
          "use server";
          await signOut({
            redirect: true,
            redirectTo: ROUTES.SignIn,
          });
        }}
      >
        <Button>Log out</Button>
      </form>
    </div>
  );
};

export default Home;
