import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link"; // Importez Link pour gérer la navigation

export default function Services() {
  return (
    <div className="h-screen flex flex-col">
        <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="flex items-center justify-center gap-20">
          <div>
            <p className="font-bold text-3xl text-center mb-5">Réparation</p>
            <Link href="/services/reparation" legacyBehavior>
              <Image
                src="/images/repar2.png"
                alt="Description de la réparation"
                width={200}
                height={200}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
          <div>
            <p className="font-bold text-3xl text-center mb-5">Installation</p>
            <Link href="/services/installation" legacyBehavior>
              <Image
                src="/images/install2.png"
                alt="Description de l'installation"
                width={200}
                height={200}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
