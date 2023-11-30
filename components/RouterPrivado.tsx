import Link from "next/link";
import { BotonNavegacion } from "./menu/BotonNavegacion"

interface RouterPrivadoProps {
  children: React.ReactNode;
}

const RouterPrivado = () => {


  return (
    <main className="flex flex-col h-screen w-full items-center justify-center">
      <img src=".\public\zona.png" 
      />
      <Link href="/">
      <BotonNavegacion text="Volver al Inicio" link="/inventario" />
      </Link>
    </main>
  );
};

export default RouterPrivado;