import Navbar from '@/components/navbar';
import { ReactNode } from 'react';

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-200 h-full text-gray-600 pb-20">
      <Navbar />
      <main className="px-16">{children}</main>
    </div>
  );
};

export default AdminLayout;
