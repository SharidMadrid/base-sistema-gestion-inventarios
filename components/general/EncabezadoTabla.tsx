interface EncabezadoTablaProps {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
}

const EncabezadoTabla = ({ text1,text2,text3,text4,text5}: EncabezadoTablaProps) => {

    return (
        <thead className="bg-blue-400 sticky text-white top-0">
            <tr>
                <td className="px-4 py-2">{text1}</td>
                <td className="px-4 py-2">{text2}</td>
                <td className="px-4 py-2">{text3}</td>
                <td className="px-4 py-2">{text4}</td>
                <td className="px-4 py-2">{text5}</td>
            </tr>
        </thead>
        
    );
}

export { EncabezadoTabla }