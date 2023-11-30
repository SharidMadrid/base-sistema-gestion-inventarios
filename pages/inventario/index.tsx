import { EncabezadoTabla } from "@/components/general/EncabezadoTabla";
import { Titulo } from "@/components/general/titulo";
import { Menu } from "@/components/menu";

const Inventario = () => {
    return (
      <main
        className="flex font-medium w-screen h-screen"
        style={{ overflowX: "hidden" }}
      >
        <Menu />
        <div className="flex flex-col py-12 gap-12 mx-28 w-full">
            <Titulo text="Gesti&oacute;n de Inventarios"/>
        <section className="flex flex-col gap-4">
          <div className="flex justify-between">
            <select>
              <option value="" disabled>
                Seleccione un material
              </option>
            </select>
          </div>
          <div
            className="flex flex-col w-full border-2"
            style={{ maxHeight: "200px", overflow: "auto" }}
          >
            <table className="table-auto">
            <EncabezadoTabla 
                text1="Identificador"
                text2="Fecha"
                text3="Entrada"
                text4="Salida"
                text5="Responsable"/>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </section> 
        </div> 
      </main>
    );
  };
  
  export default Inventario;
  