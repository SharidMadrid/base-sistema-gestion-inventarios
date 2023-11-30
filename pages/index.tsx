import RouterPrivado from '@/components/RouterPrivado';
import { Titulo } from '@/components/general/titulo';

const GestionDeInventario: React.FC = () => {
  
  return (
    <main className="h-screen w-full flex items-center justify-center font-serif"
    style={{backgroundColor: "white"}}>
      <section className="flex flex-col items-center justify-center gap-40" >
        <Titulo text="Sistema de Gestión de Inventarios"/>
        <div>
          <button
            className="w-[250px] h-[70px] bg-blue-200 hover:bg-blue-400 text-white text-2xl py-2 px-4 m-2 rounded-xl  "
            >
                 Ingresar  
            </button>
        </div>
      </section>
    </main>
  );
};

export default GestionDeInventario;