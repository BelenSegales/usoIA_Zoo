import { useMemo, useState } from "react";
import type { Animal } from "../types/animal";
import { CardAnimal } from "./CardAnimal";

interface AnimalCatalogProps {
  animals: Animal[];
  isDark: boolean;
}

const filters = ["Todos", "Selva", "Sabana", "Acuático", "Montaña"];

export function AnimalCatalog({ animals, isDark }: AnimalCatalogProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const visibleAnimals = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return animals.filter((animal) => {
      const matchesFilter =
        activeFilter === "Todos" ||
        animal.habitat.toLowerCase() === activeFilter.toLowerCase() ||
        (activeFilter === "Acuático" && animal.habitat === "Actuatico");
      const matchesQuery =
        !normalizedQuery ||
        `${animal.nombre} ${animal.especie} ${animal.habitat}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, animals, query]);

  return (
    <section
      id="catalogo"
      className={`px-5 py-12 transition-colors sm:px-10 ${isDark ? "bg-[#10231e]" : "bg-[#f8fbf9]"}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${isDark ? "bg-[#244a3d] text-[#a8dec8]" : "bg-[#e0f1e9] text-[#08745e]"}`}
          >
            Biodiversidad protegida
          </span>
          <h2
            className={`mt-4 font-serif text-4xl sm:text-5xl ${isDark ? "text-[#d9f1e7]" : "text-[#075c4c]"}`}
          >
            Conoce la vida silvestre
          </h2>
          <p
            className={`mx-auto mt-3 max-w text-sm leading-relaxed ${isDark ? "text-[#b6d0c6]" : "text-[#6b827a]"}`}
          >
            El Bioparque Municipal Vesty Pakos te invita a vivir una experiencia
            llena de aprendizaje, descubrir curiosidades de nuestra fauna
            silvestre y conocer por qué es tan importante proteger la
            biodiversidad.
          </p>
        </div>

        <div
          className={`mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.12em] ${isDark ? "text-[#9fc1b3]" : "text-[#628078]"}`}
        >
          <span>
            Catálogo activo · <strong>{visibleAnimals.length} especies</strong>
          </span>
        </div>
        {visibleAnimals.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleAnimals.map((animal) => (
              <CardAnimal key={animal.id} animal={animal} isDark={isDark} />
            ))}
          </div>
        ) : (
          <p
            className={`rounded-2xl border border-dashed py-12 text-center text-sm ${isDark ? "border-[#416b5b] text-[#b6d0c6]" : "border-[#bfd8cd] text-[#668077]"}`}
          >
            No encontramos especies con esa búsqueda.
          </p>
        )}
      </div>
    </section>
  );
}
