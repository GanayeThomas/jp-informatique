import Navbar from "@/components/Navbar";

export default function APropos() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
        <p className="mt-4 text-lg">
          Je suis spécialisé dans l&apos;installation et le dépannage
          informatique. Ma mission est de fournir des services informatiques de
          qualité supérieure à mes clients.
        </p>
        <p className="mt-8 text-lg">
          Depuis la création de jp-informatique, je souhaite aidé de nombreux
          particuliers et entreprises à résoudre leurs problèmes informatiques
          et à améliorer leur infrastructure technologique.
        </p>
        <p className="mt-8 text-lg">
          En tant qu&apos;expert, je suis dédié à offrir des solutions rapides,
          efficaces et personnalisées pour répondre à vos besoins spécifiques.
        </p>
        <p className="mt-8 text-lg">
          Que vous ayez besoin d&apos;une nouvelle installation, de maintenance,
          de dépannage ou de conseils, je suis là pour vous aider.
        </p>
        <p className="mt-8 text-lg">
          Je crois en une approche centrée sur le client et je m&apos;efforce de
          dépasser vos attentes à chaque interaction.
        </p>
        <p className="mt-8 text-lg">
          Merci de faire confiance à jp-informatique pour vos besoins
          informatiques. Je suis impatient de travailler avec vous!
        </p>
        <p className="mt-12 text-lg">
          Je suis impatients de travailler avec vous!
        </p>
      </div>
    </div>
  );
}
