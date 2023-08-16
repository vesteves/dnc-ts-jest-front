import Image from 'next/image';

const sair = () => {
  alert('Saindo');
};

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-16 py-2 mb-4 bg-red-400 text-gray-600">
      <div>
        <Image
          src="https://ed.escoladnc.com.br/wp-content/uploads/2022/09/logotipo_dnc_principal_branco-1.png"
          width={120}
          height={50}
          alt="logo"
        />
      </div>
      <div className="text-white">
        <button onClick={sair}>Sair</button>
      </div>
    </div>
  );
};

export default Navbar;
