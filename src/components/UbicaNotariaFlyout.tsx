import { useState } from "react";
import { Search, MapPin, RefreshCw, ChevronDown, Home } from "lucide-react";

export default function UbicaNotariaFlyout({
  onSearch,
  onClear,
  mapHref = "/mapa-notarias",
}: {
  onSearch?: (filters: {
    nombre: string;
    numero: string;
    alcaldia: string;
    colonia: string;
  }) => void;
  onClear?: () => void;
  mapHref?: string;
}) {
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [alcaldia, setAlcaldia] = useState("");
  const [colonia, setColonia] = useState("");
  const [busqueda, setBusqueda] = useState(""); // <- NUEVO

  const limpiar = () => {
    setNombre("");
    setNumero("");
    setAlcaldia("");
    setColonia("");
    setBusqueda(""); // <- limpiar también la barra
    onClear?.();
  };

  const buscar = () => {
    // Si no llenan "Nombre", usa lo que escriban en la barra de búsqueda
    const filters = {
      nombre: nombre || busqueda,
      numero,
      alcaldia,
      colonia,
    };
    onSearch?.(filters);
  };

  return (
    <div className="sm:col-span-2">
      {/* Tarjeta principal */}
      <div className="w-[min(92vw,780px)] rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Encabezado */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-4">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-base font-bold text-slate-900">
              Directorio de notarías
            </div>
            <div className="truncate text-sm text-slate-700">
              Busca por nombre, número o ubicación
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <FieldLabel>NOMBRE</FieldLabel>
            <InputBase
              placeholder="Ej. Juan Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <FieldLabel>NÚMERO DE NOTARÍA</FieldLabel>
            <InputBase
              placeholder="Ej. 145"
              inputMode="numeric"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <FieldLabel>ALCALDÍA</FieldLabel>
            <SelectBase
              value={alcaldia}
              onChange={setAlcaldia}
              options={ALCALDIAS}
              placeholder="Selecciona alcaldía"
            />
          </div>

          <div className="space-y-1.5">
            <FieldLabel>COLONIA</FieldLabel>
            <InputBase
              placeholder="Ej. Del Valle"
              value={colonia}
              onChange={(e) => setColonia(e.target.value)}
            />
          </div>

          {/* Barra inferior */}
          <div className="col-span-1 mt-2 flex flex-wrap items-center justify-between gap-3 sm:col-span-2">
            {/* AHORA ES UN INPUT REAL */}
            <div className="relative flex-1 min-w-0">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && buscar()}
                placeholder="Inserte su búsqueda"
                aria-label="Buscar"
                className="w-full rounded-xl border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>

            <div className="flex items-center gap-2">
              <a
                href={mapHref}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-600/10 px-3 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-600/15"
              >
                <Home className="h-4 w-4" />
                Ver mapa
              </a>
              <button
                type="button"
                onClick={limpiar}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                <RefreshCw className="h-4 w-4" />
                Limpiar
              </button>
              <button
                type="button"
                onClick={buscar}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:opacity-95"
              >
                <Search className="h-4 w-4" />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------- Sub-componentes ------------------- */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] uppercase tracking-wide font-semibold text-slate-700">
      {children}
    </span>
  );
}

function InputBase(
  props: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }
) {
  const { className, ...rest } = props;
  return (
    <input
      {...rest}
      className={[
        "w-full rounded-xl border",
        "border-slate-300 bg-white",
        "px-3 py-2 text-sm text-slate-900",
        "placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40",
        className || "",
      ].join(" ")}
    />
  );
}

function SelectBase({
  value,
  onChange,
  options,
  placeholder,
}: {
  value?: string;
  onChange?: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 py-2 pr-8 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
      >
        <option value="">{placeholder ?? "Selecciona..."}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
    </div>
  );
}

/* ------------------- Datos ------------------- */
const ALCALDIAS = [
  "Álvaro Obregón",
  "Azcapotzalco",
  "Benito Juárez",
  "Coyoacán",
  "Cuajimalpa",
  "Cuauhtémoc",
  "Gustavo A. Madero",
  "Iztacalco",
  "Iztapalapa",
  "La Magdalena Contreras",
  "Miguel Hidalgo",
  "Milpa Alta",
  "Tláhuac",
  "Tlalpan",
  "Venustiano Carranza",
  "Xochimilco",
];