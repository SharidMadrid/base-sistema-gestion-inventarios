import { EncabezadoTabla } from "@/components/general/EncabezadoTabla";
import { Titulo } from "@/components/general/titulo";
import { Menu } from "@/components/menu";

const Materiales = () => {
    return (
      <main className="flex flex-row  font-medium w-auto h-screen">
        <Menu />
        <div className="flex flex-col py-12 gap-12 mx-28 w-full">
            <Titulo text="Gesti&oacute;n de Materiales"/>
        <section className="flex flex-col gap-4" style={{ overflow: "auto" }}>
          <div
            className="flex flex-col w-full border-2"
            style={{ maxHeight: "200px", overflow: "auto" }}
          >
            <table className="table-auto">
                <EncabezadoTabla 
                text1="Identificador"
                text2="Fecha de creación"
                text3="Nombre"
                text4="Saldo"
                text5="Creado por"/>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </section> 
        </div> 
      </main>
    );
  };
  
  export default Materiales;
  