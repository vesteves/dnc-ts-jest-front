import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Produto } from '../produto';

const Produto = ({ id, nome, preco }: Produto) => {
  const removerProduto = (id: number) => {
    alert(`Removendo produto ${id}`);
  };

  const editarProduto = (id: number) => {
    alert(`Editando produto ${id}`);
  };

  return (
    <tr>
      <td className="border border-gray-400 px-4">{nome}</td>
      <td className="border border-gray-400 px-4">R$ {preco / 100}</td>
      <td className="border border-gray-400 px-4 text-center">
        <button
          className="border bg-green-400 px-4 py-2 shadow-lg rounded"
          onClick={() => editarProduto(id)}
        >
          Editar
        </button>
      </td>
      <td className="border border-gray-400 px-4 text-center">
        <button
          className="border bg-red-400 text-white px-4 py-2 shadow-lg rounded"
          onClick={() => removerProduto(id)}
        >
          Remover
        </button>
      </td>
    </tr>
  );
};

const ListarProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const getProdutos = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('http://localhost:8080/produto');
      setProdutos(data);
    } catch (error: any) {
      setProdutos([]);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border text-left px-4 border-gray-400">Nome</th>
          <th className="border text-left px-4 border-gray-400">Valor</th>
          <th className="border px-4 border-gray-400" colSpan={2}>
            Açoes
          </th>
        </tr>
      </thead>

      <tbody>
        {produtos.map((produto) => (
          <Produto key={produto.nome} {...produto} />
        ))}
      </tbody>
    </table>
  );
};

export default ListarProdutos;
