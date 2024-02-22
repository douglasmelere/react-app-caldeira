"use client"

import { BoilerCanvas } from "@/components/Boiler";
import { QuadroCaldeira } from "@/components/BoilerInfoBoard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard da Caldeira</h1>
        <p className="text-gray-700 mt-2">Visualize em tempo real os dados da sua caldeira</p>
      </div>

      <div className="flex flex-col justify-center items-center space-y-8">
        <BoilerCanvas />
        <QuadroCaldeira />
      </div>
    </div>
  );
}