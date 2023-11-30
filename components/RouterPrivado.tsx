import { BotonNavegacion } from "./menu/BotonNavegacion"
import { Acceso } from "./general/acceso";

const RouterPrivado = () => {


  return (
    <main className="flex flex-col h-screen w-full items-center justify-center">
      <Acceso/>
      <BotonNavegacion text="Volver al Inicio" link="/" />
    </main>
  );
};

export default RouterPrivado;