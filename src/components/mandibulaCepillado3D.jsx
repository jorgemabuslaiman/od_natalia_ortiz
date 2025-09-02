import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

// Pasos y posiciones del cepillo
const pasos = [
  {
    texto: "Coloca el cepillo en un ángulo de 45° hacia la encía.",
    posicion: [1, 0.55, 1.2],
    rotacion: [0.6, 0, 0.2],
  },
  {
    texto: "Cepilla suavemente la parte externa de los dientes superiores e inferiores.",
    posicion: [-1, 0.55, 1.2],
    rotacion: [0.6, 0, -0.2],
  },
  {
    texto: "Cepilla la parte interna de los dientes con movimientos cortos.",
    posicion: [1, 0.55, -1.2],
    rotacion: [-0.6, 0, 0.7],
  },
  {
    texto: "Cepilla la superficie de masticación con movimientos hacia adelante y atrás.",
    posicion: [0, 0.55, 1.7],
    rotacion: [0, 0, 0],
  },
  {
    texto: "No olvides cepillar la lengua suavemente.",
    posicion: [0, -0.7, 0],          // Cepillo sobre la lengua
    rotacion: [1.3, 0, 0],           // Rotado para limpiar la lengua
  },
];

// Dientes individuales
function Dientes({ y }) {
  const cantidad = 8;
  const ancho = 2.0;
  const separacion = ancho / cantidad;
  const dientes = [];
  for (let i = 0; i < cantidad; i++) {
    dientes.push(
      <mesh
        key={i}
        position={[
          -ancho / 2 + separacion / 2 + i * separacion,
          y,
          0,
        ]}
      >
        <boxGeometry args={[0.22, 0.25, 0.5]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
    );
  }
  return <group>{dientes}</group>;
}

// Mandíbula hecha con rectángulos y colores, lengua siempre visible
function Mandibula({ step }) {
  // Animación para abrir la boca en el paso 5
  const abrir = step === 4;
  // Usamos react-spring para animar posiciones y escala
  const upperGumY = 0.7;
  const lowerGumY = abrir ? -1.1 : -0.7;
  const upperTeethY = 0.5;
  const lowerTeethY = abrir ? -0.9 : -0.5;
  const tongueY = abrir ? -0.35 : -0.1;
  const tongueScale = abrir ? [1.35, 0.28, 0.8] : [1.3, 0.4, 0.8];

  return (
    <group>
      {/* Encía superior */}
      <mesh position={[0, upperGumY, 0]}>
        <boxGeometry args={[2.3, 0.25, 1.3]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      {/* Dientes superiores */}
      <Dientes y={upperTeethY} />
      {/* Encía inferior */}
      <mesh position={[0, lowerGumY, 0]}>
        <boxGeometry args={[2.3, 0.25, 1.3]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      {/* Dientes inferiores */}
      <Dientes y={lowerTeethY} />
      {/* Lengua SIEMPRE visible, centrada */}
      <mesh position={[0, tongueY, 0]} scale={tongueScale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff69b4" />
      </mesh>
    </group>
  );
}

// Cerdas del cepillo: 7 "cilindros" debajo de la cabeza del cepillo
function Cerdas({ color = "#e3e3e3" }) {
  const n = 7;
  const cerdas = [];
  for (let i = 0; i < n; i++) {
    // Distribución de las cerdas en la cabeza, en línea
    const x = -0.18 + (i * 0.06);
    // CERDAS DEBAJO del cabezal (y negativo)
    cerdas.push(
      <mesh key={i} position={[x, -0.055, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.08, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  }
  return <group>{cerdas}</group>;
}

// Cepillo animado, con rotación adicional de 180° para que las cerdas apunten bien
function Cepillo({ paso, animar }) {
  const spring = useSpring({
    position: pasos[paso].posicion,
    // Rotación Y (Math.PI) para que las cerdas apunten hacia los dientes
    rotation: [
      pasos[paso].rotacion[0],
      (pasos[paso].rotacion[1] ?? 0) + Math.PI,
      pasos[paso].rotacion[2],
    ],
    config: { mass: 1, tension: 180, friction: 18 },
  });

  // Animación de cepillado
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    if (animar) {
      const inter = setInterval(() => setTick((t) => t + 1), 100);
      return () => clearInterval(inter);
    }
  }, [animar]);

  // Oscilación de movimiento, especial para la lengua
  let offset = 0;
  if (animar) {
    if (paso === 4) {
      // Movimiento sobre la lengua (horizontal)
      offset = 0.25 * Math.sin(tick / 4);
    } else {
      // Movimiento sobre dientes
      offset = 0.15 * Math.sin(tick / 5);
    }
  }

  // Para la lengua, el movimiento es en X; para dientes, en X también
  const basePos = spring.position.get();
  const pos = [
    basePos[0] + offset,
    basePos[1],
    basePos[2],
  ];

  return (
    <animated.group position={pos} rotation={spring.rotation}>
      {/* Mango */}
      <mesh position={[0, 0, -0.22]}>
        <boxGeometry args={[0.12, 0.08, 0.46]} />
        <meshStandardMaterial color="#2196f3" />
      </mesh>
      {/* Cabezal */}
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[0.34, 0.08, 0.16]} />
        <meshStandardMaterial color="#1976d2" />
      </mesh>
      {/* Cerdas */}
      <Cerdas />
    </animated.group>
  );
}

// Componente principal
export default function MandibulaCasera3D() {
  const [step, setStep] = useState(0);
  const [animar, setAnimar] = useState(true);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        margin: "auto",
        background: "#f8f8f8",
        borderRadius: 16,
        boxShadow: "0 4px 32px #0002",
        padding: "8px 0 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Animación 3D */}
      <div style={{ width: "100%", height: 320 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <Mandibula step={step} />
          <Cepillo paso={step} animar={animar} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      {/* Texto explicativo debajo */}
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          marginTop: 7,
          marginBottom: 10,
          padding: "14px 18px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          fontSize: "1.05em",
          maxWidth: 330,
          textAlign: "center",
        }}
      >
        <strong>Paso {step + 1}:</strong> <br />
        {pasos[step].texto}
      </div>
      {/* Botones de navegación */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: 16,
        }}
      >
        <button
          style={{
            padding: "9px 16px",
            borderRadius: 7,
            background: "#2196f3",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            fontSize: "1em",
            cursor: step === 0 ? "not-allowed" : "pointer",
            opacity: step === 0 ? 0.4 : 1,
          }}
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
        >
          Anterior
        </button>
        <button
          style={{
            padding: "9px 16px",
            borderRadius: 7,
            background: "#25d366",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            fontSize: "1em",
            cursor: step === pasos.length - 1 ? "not-allowed" : "pointer",
            opacity: step === pasos.length - 1 ? 0.4 : 1,
          }}
          onClick={() => setStep(Math.min(pasos.length - 1, step + 1))}
          disabled={step === pasos.length - 1}
        >
          Siguiente
        </button>
        <button
          style={{
            padding: "9px 12px",
            borderRadius: 7,
            background: "#ffd966",
            color: "#333",
            border: 0,
            fontWeight: "bold",
            fontSize: "1em",
            cursor: "pointer",
          }}
          onClick={() => setAnimar((a) => !a)}
        >
          {animar ? "Pausar" : "Animar"}
        </button>
      </div>
    </div>
  );
}