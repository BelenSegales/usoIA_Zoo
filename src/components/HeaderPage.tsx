interface HeaderPageProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function HeaderPage({ isDark, onToggleTheme }: HeaderPageProps) {
  return (
    <header
      className={`flex items-center justify-between gap-4 border-b px-6 py-4 transition-colors ${
        isDark ? "border-[#284a40] bg-[#142c25]" : "border-[#dcebe4] bg-white"
      }`}
    >
      <a
        href="#"
        className={`flex items-center gap-2 text-sm font-bold tracking-tight ${
          isDark ? "text-[#a8dec8]" : "text-[#075c4c]"
        }`}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dff1e9] text-[#08745e]">
          ♧
        </span>
        Bioparque Vesty Pakos
      </a>
      <nav
        className={`flex items-center gap-3 text-xs font-medium sm:gap-6 ${
          isDark ? "text-[#b8d5cb]" : "text-[#48625b]"
        }`}
      >
        <a href="#inicio" className="transition-colors hover:text-[#08745e]">
          Inicio
        </a>
        <a href="#catalogo" className="transition-colors hover:text-[#08745e]">
          Catálogo
        </a>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
          className={`flex h-8 w-8 items-center justify-center rounded-full border text-base transition-colors ${
            isDark
              ? "border-[#54776b] bg-[#203f34] text-[#ffe69a] hover:bg-[#2b5144]"
              : "border-[#dcebe4] bg-[#f5faf7] text-[#075c4c] hover:bg-[#e6f3ec]"
          }`}
        >
          {isDark ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}
