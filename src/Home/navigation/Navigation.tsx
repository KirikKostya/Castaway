// import React, { useState } from 'react';
// import Links from '../../ui/links-nav/Links';
// import { MenuOutlined } from '@ant-design/icons';

// const Navigation:React.FC = () => {

//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <>
//       <div className='max-w-7xl w-full h-16 px-16 flex items-center justify-between pt-4 pb-3 fixed top-0 bg-[#31383E] z-50'>
//           <h3 className='font-bold text-2xl text-white'>Castaway</h3>
//           <Links className='hidden text-white sm:flex items-center' />
//           <MenuOutlined onClick={()=>setIsOpen(pre=>!pre)} className='block text-white cursor-pointer sm:hidden'/>
//       </div>
//       {
//         isOpen
//           &&
//         <Links className={`transition ${isOpen ? 'max-h-[400px]' : 'max-h-[0px]'} sm:hidden flex flex-col mt-16 text-white text-[12pt] tracking-[.52px]`}/>
//       }
//     </>
//   )
// }

// export default Navigation;
import React, { useState } from 'react';
import Links from '../../ui/links-nav/Links';
import { MenuOutlined } from '@ant-design/icons';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className='max-w-[1300px] w-full h-16 lg:px-16 md:px-14 px-8  flex items-center justify-between py-[4px] fixed top-0 bg-[#31383E] z-50'>
        <h3 className='font-bold text-2xl text-white'>Castaway</h3>
        <Links className='hidden text-white sm:flex items-center' />
        <MenuOutlined
          onClick={() => setIsOpen((prev) => !prev)}
          className='block text-white cursor-pointer sm:hidden'
        />
      </div>
      <Links
        setIsOpen={setIsOpen}
        className={`max-w-[1250px] w-full max-h-[${isOpen ? '400' : '0'}px] transition-all ease-in-out duration-500 sm:hidden flex flex-col items-center mt-16 text-white text-[12pt] tracking-[.52px] overflow-hidden bg-[#31383E] border-b-black fixed top-0 z-50`}
      />
    </>
  );
};

export default Navigation;
