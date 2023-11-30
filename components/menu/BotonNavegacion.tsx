import Link from "next/link"
import { useRouter } from "next/router";

interface BotonNavegacionProps {
    text: string;
    link: string;
}

const BotonNavegacion = ({ text, link }: BotonNavegacionProps) => {
    const router = useRouter();
    return (
        <div>
            <button className={`w-[230px] text-white flex flex-col items-center bg-blue-200 hover:bg-blue-400 rounded-lg ${router.asPath === link}`}>
            <Link
                aria-haspopup='false'
                href={link}>
                <h2 className="px-8 py-2 text-lg">{text}</h2>
            </Link>
        </button>
        </div>
        
    );
}

export { BotonNavegacion }