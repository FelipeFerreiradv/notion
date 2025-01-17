import { redirect } from "next/navigation";
import { user } from "../api/login/login";
import NavbarHorizontal from "../components/ui/navbar-horizontal";

const Home = () => {
  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <section className="w-screen h-screen bg-[#141414]">
        <NavbarHorizontal />
      </section>
    </>
  );
};

export default Home;
