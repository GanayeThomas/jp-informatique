import Navbar from "@/components/Navbar";

export default function Installation() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-5 px-4">
        {/* Introduction */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Installation Informatique</h1>
          <p className="text-lg mb-8">Nous offrons des services d'installation informatique complets pour tous types de systèmes et appareils. Que ce soit pour votre maison ou votre entreprise, notre équipe d'experts est prête à vous assister.</p>
        </section>

        {/* Types d'Installations */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Types d'Installations Proposées</h2>
          <ul className="list-disc list-inside">
            <li>Installation de systèmes d'exploitation</li>
            <li>Installation de logiciels</li>
            <li>Configuration de réseaux domestiques et professionnels</li>
            <li>Installation de serveurs</li>
            <li>Configuration de périphériques (imprimantes, scanners, etc.)</li>
            <li>Installation de solutions de sécurité</li>
            <li>Et bien plus encore...</li>
          </ul>
        </section>

        {/* Processus d'Installation */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Processus d'Installation</h2>
          <p className="mb-4">Notre processus d'installation est simple et efficace :</p>
          <ol className="list-decimal list-inside">
            <li>Évaluation des besoins</li>
            <li>Proposition de solutions adaptées</li>
            <li>Installation par nos experts</li>
            <li>Test et validation</li>
            <li>Formation et support</li>
          </ol>
        </section>

        {/* Tarifs et Forfaits */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Tarifs et Forfaits</h2>
          <p className="mb-4">Nous proposons des tarifs compétitifs et des forfaits adaptés à vos besoins :</p>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Service</th>
                <th className="py-2">Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Installation de système d'exploitation</td>
                <td className="border px-4 py-2">À partir de 70€</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Configuration de réseau domestique</td>
                <td className="border px-4 py-2">À partir de 100€</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Installation de serveur</td>
                <td className="border px-4 py-2">Sur devis</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Pourquoi Nous Choisir */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Pourquoi Choisir Notre Entreprise</h2>
          <ul className="list-disc list-inside">
            <li>Techniciens certifiés et expérimentés</li>
            <li>Service rapide et efficace</li>
            <li>Prix transparents et compétitifs</li>
            <li>Garantie sur les installations</li>
            <li>Service clientèle de qualité</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
          <details className="mb-4">
            <summary className="cursor-pointer">Quels types d'installations proposez-vous ?</summary>
            <p className="mt-2">Nous proposons une large gamme de services, y compris l'installation de systèmes d'exploitation, la configuration de réseaux, l'installation de serveurs, et bien plus encore.</p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer">Combien de temps dure une installation ?</summary>
            <p className="mt-2">La durée de l'installation dépend du type de service, mais nous nous efforçons de fournir des services rapides et efficaces.</p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer">Proposez-vous une garantie sur les installations ?</summary>
            <p className="mt-2">Oui, toutes nos installations sont garanties pour vous assurer tranquillité d'esprit.</p>
          </details>
        </section>
      </div>
    </div>
  );
}

