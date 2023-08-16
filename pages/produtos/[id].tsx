import AdminLayout from '@/app/layouts/admin';
import EditarProduto from '@/components/produtos/editar';

export default function Produtos() {
  return (
    <AdminLayout>
      <h1 className="text-xl my-4">Edição de produto</h1>

      <EditarProduto />
    </AdminLayout>
  );
}
