import axios from 'axios';
import { CaldeiraDados } from '@/types/caldeiraDados';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from './Loading';

export const QuadroCaldeira: React.FC = () => {
  const [dados, setDados] = useState<CaldeiraDados | null>(null);

  useEffect(() => {
    const buscarDadosCaldeira = async () => {
      try {
        const url = 'https://elegant-dog-buckle.cyclic.app/dados-caldeira';
        const response = await axios.get<CaldeiraDados>(url);
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao obter dados da caldeira:', error);
        // Trate o erro conforme necessário
      }
    };

    const intervalId = setInterval(buscarDadosCaldeira, 5000); // Consulta a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [5000]); // Execute apenas uma vez ao montar o componente

  return (
    <div className="max-w-sm mx-auto text-center p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-lg text-black font-semibold">Informações da Caldeira</h2>
      {dados ? (
        <div className='text-black'>
          <p className="mt-2">
            <strong>Temperatura:</strong>
            <span className={`ml-2 ${dados.temperatura > 100 ? 'text-red-500' : 'text-blue-500'}`}>
              {dados.temperatura}°C
            </span>
          </p>
          <p className="mt-2">
            <strong>Pressão:</strong>
            <span className={`ml-2 ${dados.pressao > 10 ? 'text-red-500' : 'text-green-500'}`}>
              {dados.pressao} bar
            </span>
          </p>
          <p className="mt-2">
            <strong>Status:</strong>
            <span className={`ml-2 text-green-500`}>
              Ligado
            </span>
          </p>
          <p className="mt-2">
            <strong>Nível de Água:</strong>
            <span className={`ml-2 ${dados.nivel_agua < 20 ? 'text-red-500' : 'text-blue-500'}`}>
              {dados.nivel_agua}
            </span>
          </p>
          <p className="mt-2"><strong>Timestamp:</strong> <span className="ml-2 text-gray-600">{dados.timestamp}</span></p>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};
