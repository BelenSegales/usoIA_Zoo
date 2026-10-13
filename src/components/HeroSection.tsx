export function HeroSection({ isDark }: { isDark: boolean }) {
  return (
    <section
      id="inicio"
      className={`relative flex min-h-[360px] items-center justify-center overflow-hidden px-6 py-20 text-center transition-colors sm:min-h-[470px] ${isDark ? "bg-[#19392f]" : "bg-[#b8d88e]"}`}
    >
      <img
        src="https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/720387281_980135761446761_3342926152639315340_n.jpg?stp=dst-jpg_tt6&cstp=mx3080x1360&ctp=s3080x1360&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=EgnJqYAy8NwQ7kNvwEGtMy6&_nc_oc=AdqufmIvKO6d0KgUmBbeAGF6J0bd2RJOpIdnk-32KLZQjXmSZuvCSKNld9E4f4Lf1Ik&_nc_zt=23&_nc_ht=scontent.flpb1-1.fna&_nc_gid=Veqz5ELu_fa8Xjaci54kaA&_nc_ss=7b289&oh=00_AQMPgVhllOB8Ho5NCl0fEviBehX8YOupYrZ_PwK5Xqm78w&oe=6AD47F0E"
        alt="Gorila en la selva"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#193d2a]/40 via-[#4f812f]/20 to-[#d9edbd]/80" />
      <div className="relative z-10 max-w-2xl text-white drop-shadow-md">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white/90">
          Conservación · Educación · Naturaleza
        </p>
        <h1 className="mb-3 text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-6xl">
          Visita hoy
        </h1>
        <p className="mx-auto mb-7 max-w-lg text-base font-medium text-white sm:text-xl">
          Conoce, aprende y ayuda a proteger la vida silvestre.
        </p>
        <a
          href="#catalogo"
          className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#123d31] transition-transform hover:scale-105"
        >
          Explora nuestros animales
        </a>
      </div>
    </section>
  );
}
