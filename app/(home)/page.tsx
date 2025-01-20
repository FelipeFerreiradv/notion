import { redirect } from "next/navigation";
import { login } from "../api/_untils/login";
import NavbarHorizontal from "../components/ui/navbar-horizontal";

const Home = async () => {
  const userLogin = await login();

  if (!userLogin) redirect("/product");

  return (
    <>
      <title>... - Home</title>
      <section className="w-screen h-screen bg-[#141414]">
        <NavbarHorizontal />
      </section>
    </>
  );
};

export default Home;
