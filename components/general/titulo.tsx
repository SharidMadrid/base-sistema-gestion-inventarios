interface TituloProps {
    text: string;
    
}

const Titulo = ({ text}: TituloProps) => {

    return (
        <h1
            className="flex justify-center h-32"
            style={{ fontWeight: 400, fontSize: 48 }}
            >
            {text}
        </h1>
        
    );
}

export { Titulo }