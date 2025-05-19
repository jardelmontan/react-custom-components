import { useState } from 'react';
import CustomSelect from '../../components/custom-select/custom-select';

const CustomSelectPreview: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CustomSelect id="custom-select-id" isOpen={isOpen} search={<input onFocus={() => setIsOpen(true)} />} onClickOutside={() => setIsOpen(false)}>
      <div style={{ height: '100px' }}>my content</div>
    </CustomSelect>
  );
};

export default CustomSelectPreview;
