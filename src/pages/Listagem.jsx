import { Link } from 'react-router-dom';

export const itens = [
  { id: 1, nome: 'Notebook', descricao: 'Notebook para estudos e trabalho.' },
  { id: 2, nome: 'Mouse', descricao: 'Mouse sem fio com ótima precisão.' },
  { id: 3, nome: 'Teclado', descricao: 'Teclado mecânico confortável.' },
  { id: 4, nome: 'Monitor', descricao: 'Monitor Full HD de 24 polegadas.' },
];

function Listagem() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Listagem</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {itens.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-900">{item.nome}</h2>
            <p className="text-gray-600">{item.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Listagem;