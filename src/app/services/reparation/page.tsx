import Navbar from "@/components/Navbar";

export default function Reparation() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-5 px-4">
        {/* Introduction */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Réparation Informatique</h1>
          <p className="text-lg mb-8">Nous offrons des services de réparation informatique rapides et fiables pour tous types d'appareils. Que ce soit pour des problèmes matériels ou logiciels, notre équipe d'experts est là pour vous aider.</p>
        </section>

        {/* Types de Réparations */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Types de Réparations Proposées</h2>
          <ul className="list-disc list-inside">
            <li>Réparation d'ordinateurs portables et de bureau</li>
            <li>Remplacement d'écran</li>
            <li>Réparation de carte mère</li>
            <li>Suppression de virus et logiciels malveillants</li>
            <li>Récupération de données</li>
            <li>Installation de logiciels</li>
            <li>Et bien plus encore...</li>
          </ul>
        </section>

        {/* Processus de Réparation */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Processus de Réparation</h2>
          <p className="mb-4">Notre processus de réparation est simple et transparent :</p>
          <ol className="list-decimal list-inside">
            <li>Diagnostic gratuit</li>
            <li>Devis détaillé</li>
            <li>Réparation effectuée par nos experts</li>
            <li>Test et contrôle qualité</li>
            <li>Retour de votre appareil réparé</li>
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
                <td className="border px-4 py-2">Réparation d'écran</td>
                <td className="border px-4 py-2">À partir de 50€</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Suppression de virus</td>
                <td className="border px-4 py-2">À partir de 30€</td>
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
            <li>Garantie sur les réparations</li>
            <li>Service clientèle de qualité</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
          <details className="mb-4">
            <summary className="cursor-pointer">Quels types de réparations proposez-vous ?</summary>
            <p className="mt-2">Nous proposons une large gamme de services, y compris la réparation d'ordinateurs portables et de bureau, le remplacement d'écran, la récupération de données, et bien plus encore.</p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer">Combien de temps dure une réparation ?</summary>
            <p className="mt-2">La durée de la réparation dépend du type de problème, mais nous nous efforçons de fournir des services rapides, généralement en 24 à 48 heures.</p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer">Proposez-vous une garantie sur les réparations ?</summary>
            <p className="mt-2">Oui, toutes nos réparations sont garanties pendant une période déterminée pour vous assurer tranquillité d'esprit.</p>
          </details>
        </section>
      </div>
    </div>
  );
}

