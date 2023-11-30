import { Enum_RoleName } from "@prisma/client";
import { useSession } from "next-auth/react";
import { BotonNavegacion } from "./menu/BotonNavegacion";
import { Acceso } from "./general/acceso";

interface RouterProtegidosProps {
  children: React.ReactNode;
  roleName: Enum_RoleName;
}

const RouterProtegidos = ({ children, roleName }: RouterProtegidosProps) => {
  const { data, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return <div>{children}</div>;
  }

  if (data?.user?.role === roleName) {
    return <div>{children}</div>;
  }

  return (
    <main className="flex flex-col h-screen w-full items-center justify-center">
      <Acceso/>
      <BotonNavegacion text="Volver al Inicio" link="/" />
    </main>
  );
};

export default RouterProtegidos;