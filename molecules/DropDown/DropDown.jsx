import { Icon } from '../../atoms/Icon/Icon';
import './DropDown.css';

export const DropDown = ({ options = [], value = '', onChange }) => {
  return (
    <div className="dropdown">
      <Icon type="angleDownSolid" size="sm" hasBackground />
      <select className="dropdown-select" value={value} onChange={onChange}>
        {options.map(({ text, value }, index) => (
          <option key={index} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};
