import React from 'react';
import ImgLogoAra from '../assets/images/ImgLogoAra.png';

function Header() {
  return (
    <header className='bg-[#0D5190]'>
        <nav className='w-full flex items-center justify-between py-2 px-10'>
            <img
                src={ImgLogoAra}
                alt="Imagem do logo da ARA CENTRO DE EDUCAÇÃO"
                className='w-44'
            />
            <ul className='flex gap-5 text-white'>
                <li>Início</li>
                <li>Cursos</li>
                <li>Institucional</li>
                <li>Contato</li>
                <li>Painéis</li>
                <li>Promoções</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;