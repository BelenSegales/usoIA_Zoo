import type { Animal } from "../types/animal";

interface CardAnimalProps {
  animal: Animal;
  isDark: boolean;
}

export function CardAnimal({ animal, isDark }: CardAnimalProps) {
  return (
    <article
      className={`group w-full overflow-hidden rounded-[14px] border text-left shadow-[0_5px_18px_rgb(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_26px_rgb(15,23,42,0.12)] ${isDark ? "border-[#315548] bg-[#19362d]" : "border-[#e1ebe6] bg-white"}`}
    >
      {/* Contenedor Imagen y Badges Superiores */}
      <div className="relative aspect-[1.25/1] w-full overflow-hidden bg-slate-100">
        <img
          src={animal.imagen}
          alt={`Imagen de ${animal.nombre}`}
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Degradado sutil para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />
        {/* Badge Hábitat (Superior Izquierda) */}
        <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full border border-white/60 bg-white/95 px-2 py-1 text-[9px] font-semibold tracking-wide text-emerald-800 shadow-sm backdrop-blur-md">
          <span>
            {animal.habitat === "Actuatico" ? "Acuático" : animal.habitat}
          </span>
        </div>
        {/* Botón Favorito / Guardar rápido */}
        <button
          type="button"
          aria-label="Guardar en favoritos"
          className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-slate-500 shadow-sm backdrop-blur-md transition-colors hover:bg-white hover:text-rose-500"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-14v5l3 2"
            />
          </svg>
        </button>
      </div>
      {/* Contenido de la Tarjeta */}
      <div className="flex flex-col gap-2 p-3">
        {/* Bloque de Título y Especie */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2
                className={`text-[13px] font-bold leading-tight transition-colors group-hover:text-emerald-700 ${isDark ? "text-[#e5f2ed]" : "text-[#19372e]"}`}
              >
                {animal.nombre}
              </h2>
              <p className="mt-0.5 text-[9px] font-medium italic text-[#8ca099]">
                {animal.especie}
              </p>
            </div>
          </div>
        </div>
        {/* Indicador Estado de Conservación */}
        <div className="flex items-center justify-between rounded-md border border-amber-200/80 bg-amber-50/70 px-2 py-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
            </span>
            <div>
              <span className="text-[12px] font-medium text-amber-900">
                {animal.estado}
              </span>
            </div>
          </div>
        </div>
        {/* Atributos Clave / Ficha rápida */}
        <div className="">
          <div className="flex flex-col py-1">
            <span className="text-[9px] text-slate-400">Dieta</span>
            <span className="font-semibold text-slate-700">{animal.dieta}</span>
          </div>
          <div className="flex flex-col py-1">
            <span className="text-[9px] text-slate-400">Esperanza de vida</span>
            <span className="font-semibold text-slate-700">
              {animal.esperanzaVida}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
