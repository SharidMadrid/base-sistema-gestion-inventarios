import { Enum_RoleName } from "@prisma/client";
import { useSession } from "next-auth/react";

interface ComponentePrivadoProps {
  children: React.ReactNode;
  roleName: Enum_RoleName;
}

const ComponentePrivado = ({ children, roleName }: ComponentePrivadoProps) => {
  const { data } = useSession();
  if (data?.user?.role === roleName) {
    return <div>{children}</div>;
  }
  return null;
};

export default ComponentePrivado;