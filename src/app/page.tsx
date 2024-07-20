import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
      </main>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold">Bienvenue sur jp-informatique.fr</h1>
        <p className="mt-4 text-lg">
          Nous offrons des services d&apos;installation et de dépannage informatique.
        </p>
      </div>
    </div>
  );
}
