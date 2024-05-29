import Navbar from "@/components/Navbar";

export default function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow mt-5">
        {/* Introduction */}
        <section className="flex justify-center items-center text-center py-10 bg-blue-100 w-full">
          <p className="text-lg mt-8">Votre spécialiste en réparation et installation informatique. Nous offrons des services rapides et fiables pour tous vos besoins informatiques.</p>
        </section>

        {/* Services Proposés */}
        <section className="py-10 w-full">
          <h2 className="text-4xl font-semibold text-center mb-6">Nos Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm w-full lg:flex mb-4 mx-2">
              <div className="border border-gray-400 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Réparation Informatique</div>
                  <p className="text-gray-700 text-base">Nous réparons tous types de matériel informatique, des ordinateurs portables aux ordinateurs de bureau, en passant par les périphériques.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm w-full lg:flex mb-4 mx-2">
              <div className="border border-gray-400 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Installation Informatique</div>
                  <p className="text-gray-700 text-base">Nous installons et configurons vos systèmes informatiques, logiciels, et réseaux pour une performance optimale.</p>
                </div>
              </div>
            </div>
            <div className="max-w-sm w-full lg:flex mb-4 mx-2">
              <div className="border border-gray-400 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Sécurité Informatique</div>
                  <p className="text-gray-700 text-base">Nous vous aidons à protéger vos données avec des solutions de sécurité adaptées à vos besoins.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Nous Choisir */}
        <section className="py-10 bg-gray-100 w-full">
          <h2 className="text-4xl font-semibold text-center mb-6">Pourquoi Nous Choisir</h2>
          <ul className="list-disc list-inside max-w-2xl mx-auto text-center">
            <li>Techniciens certifiés et expérimentés</li>
            <li>Service rapide et efficace</li>
            <li>Prix transparents et compétitifs</li>
            <li>Garantie sur les réparations et installations</li>
            <li>Support clientèle de qualité</li>
          </ul>
        </section>

        {/* Processus de Travail */}
        <section className="py-10 bg-gray-100 w-full">
          <h2 className="text-4xl font-semibold text-center mb-6">Notre Processus de Travail</h2>
          <ol className="list-decimal list-inside max-w-2xl mx-auto text-center">
            <li>Contactez-nous pour décrire votre problème ou besoin</li>
            <li>Diagnostic et devis gratuit</li>
            <li>Réparation ou installation par nos experts</li>
            <li>Test et validation de la solution</li>
            <li>Retour de votre appareil ou système en parfait état</li>
          </ol>
        </section>  

        {/* Localisation et Horaires */}
        <section className="py-10 bg-gray-100 w-full">
          <h2 className="text-4xl font-semibold text-center mb-6">Localisation et Horaires</h2>
          <p className="text-center mb-4">Nous sommes situés à Campremy.</p>
          <p className="text-center mb-4">Horaires d'ouverture :</p>
          <ul className="list-disc list-inside max-w-2xl mx-auto text-center">
            <li>Lundi a Vendredi : 9h00 - 18h00</li>
            <li>Samedi : 10h00 - 14h00</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </section>
      </div>
    </div>
  );
}