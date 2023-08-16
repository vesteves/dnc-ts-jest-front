import AdminLayout from '@/app/layouts/admin';
import ListarProdutos from '@/components/produtos/listar';

export default function Produtos() {
  return (
    <AdminLayout>
      <h1 className="text-xl my-4">Listagem de produtos</h1>

      <ListarProdutos />
    </AdminLayout>
  );
}
