import Navbar from "@/components/Navbar";

export default function Tarifs() {
  const data = [
    { service: "Installation Windows", panne: "Installation OS", prix: "80€" },
    {
      service: "Enlever produit malveillant",
      panne: "Virus et autre logiciel malveillant",
      prix: "70€",
    },
    {
      service: "Mise à jour du matériel",
      panne: "Mise à niveau composants PC",
      prix: "90€",
    },
    {
      service: "Support technique général",
      panne: "Tout autre problème informatique",
      prix: "60€",
    },
    { service: "Diagnostic", panne: "Problème inconnu", prix: "30€" },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-5 min-h-screen ">
        <div className="w-full max-w-4xl">
          <table className="table-auto w-full text-center border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="border border-gray-200 px-4 py-2">
                <th>Service</th>
                <th>Description</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-200 px-4 py-2">
                    {row.service}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {row.panne}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {row.prix}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
