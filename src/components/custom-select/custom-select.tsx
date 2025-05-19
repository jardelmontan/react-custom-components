import { useCallback, useEffect } from 'react';
import './custom-select.scss';

interface Props {
  id: string;
  isOpen: boolean;
  search: React.ReactNode;
  children: React.ReactNode;
  onClickOutside?: () => void;
}

const CustomSelect: React.FC<Props> = ({ id, isOpen, search, children, onClickOutside }: Props) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (onClickOutside && isOpen && !document.getElementById(id)?.contains(event.target as Node)) {
        onClickOutside();
      }
    },
    [id, isOpen, onClickOutside]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <div id={id} className="custom-select-container">
      {search}
      {isOpen && <div className="custom-select-content">{children}</div>}
    </div>
  );
};

export default CustomSelect;
