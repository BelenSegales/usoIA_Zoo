export type Habitat = "Selva" | "Sabana" | "Actuatico";
export type Estado = "Peligro" | "Vulnerable" | "Seguro";
export interface Animal {
  id: string;
  nombre: string;
  especie: string;
  habitat: Habitat;
  estado: Estado;
  dieta: string;
  esperanzaVida: string;
  imagen: string;
  descripcion?: string;
}
