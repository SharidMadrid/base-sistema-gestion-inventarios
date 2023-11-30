import { BotonNavegacion } from "./BotonNavegacion";

const Menu = () => {
    return (
      <aside className="gap-16 px-5 py-2 top-0 bg-blue-50 flex-col flex h-full w-[330px]">
        <section>
          <div className="flex flex-col items-center gap-2 mt-12">
            <img
              className="h-[150px] w-[150px] rounded-full"
              alt="Profile pic"
            />
            <span className="text-gray-500">user</span>
          </div>
          <br></br>
        </section>
        <section className="flex flex-col items-center gap-2">
          <BotonNavegacion text="Inventarios" link="/inventario" />
          <BotonNavegacion text="Materiales" link="/materiales" />
            <BotonNavegacion text="Usuarios" link="/usuario" />
        </section>
        <section className="flex flex-col items-center gap-2 mt-auto">
          <BotonNavegacion text="Cerrar Sesión" link="/api/auth/signout" />
        </section>
      </aside>
    );
  };
  
  export { Menu };