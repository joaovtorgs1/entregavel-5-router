import { useParams, Link } from 'react-router-dom';
import { itens } from './Listagem';

function Detalhes() {
  const { id } = useParams();
  const item = itens.find((i) => i.id === Number(id));

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Detalhes</h1>
      <p className="text-sm text-gray-500 mb-4">ID capturado da URL: {id}</p>

      {item ? (
        <>
          <h2 className="text-xl font-bold text-gray-900">{item.nome}</h2>
          <p className="text-gray-600">{item.descricao}</p>
        </>
      ) : (
        <p className="text-red-600">Item não encontrado.</p>
      )}

      <Link
        to="/listagem"
        className="inline-block mt-4 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
      >
        Voltar para a listagem
      </Link>
    </div>
  );
}

export default Detalhes;