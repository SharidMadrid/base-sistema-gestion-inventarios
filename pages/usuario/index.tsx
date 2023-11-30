import { EncabezadoTabla } from "@/components/general/EncabezadoTabla";
import { Titulo } from "@/components/general/titulo";
import { Menu } from "@/components/menu";

const Usuario = () => {
    return (
      <main className="flex flex-row  font-medium w-auto h-screen">
        <Menu />
        <div className="flex flex-col py-12 gap-12 mx-28 w-full">
            <Titulo text="Gesti&oacute;n de Usuarios"/>
            <section
            className="flex flex-col w-full border-2"
            style={{ overflow: "auto" }}
          >
          
          <div
            className="flex flex-col w-full border-2"
            style={{ maxHeight: "200px", overflow: "auto" }}
          >
            <table className="table-auto">
            <EncabezadoTabla 
                text1="Identificador"
                text2="Nombre"
                text3="Correo"
                text4="Rol"
                text5="Acciones"/>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>name</td>
                  <td>correo</td>
                  <td>rol</td>
                  <td>accion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> 
        </div> 
      </main>
    );
  };
  
  export default Usuario ;