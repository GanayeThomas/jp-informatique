
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from 'next/link';  

export default function Services() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="flex items-center justify-center gap-20">
          <div className="text-center">  
            <p className="font-bold text-3xl mb-5">Réparation</p>
            <Link href="/reparation" legacyBehavior>
                <Image
                  src="/images/repar2.png"
                  alt="Description de la réparation"
                  width={200}
                  height={200}
                  className="rounded-lg"  
                />
            </Link>
            <Link href="services/reparation" legacyBehavior>
              <a className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer">
                En savoir plus
              </a>
            </Link>
          </div>
          <div className="text-center"> 
            <p className="font-bold text-3xl mb-5">Installation</p>
            <Link href="/installation" legacyBehavior>
                <Image
                  src="/images/install2.png"
                  alt="Description de l'installation"
                  width={200}
                  height={200}
                  className="rounded-lg"  
                />
            </Link>
            <Link href="services/installation" legacyBehavior>
              <a className="mt-3 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer">
                En savoir plus
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}