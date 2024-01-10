import { useState } from 'react';

export default function Sidenav() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <nav
        id="sidenav-7"
        className="top-0 z-[5] w-60 flex-shrink-0 translate-x-0 overflow-hidden bg-white "
      >
        <div className="flex flex-col h-full text-center">
          <p className="text-lg text-primary">I am a sidenav</p>
          <p className="text-lg text-primary">Eu quero por info&apos;s de prod&apos;s aqui</p>
          <label>
            <input 
              className="mr-2" 
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Check me!
          </label>
        </div>
      </nav>
    </>
  );
}
