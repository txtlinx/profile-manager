import { ReactNode, useRef, useState } from 'react';
import css from './Dropdown.module.css';
import ArrowCompanySelectionIcon from '../../../assets/img/flechaDown.svg';
import { OptionType } from './types';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

type Props = {
  id: string;
  legend: string;
  icon?: ReactNode;
  placeholder: string;
  disableMarquee?: boolean;
  elements: Array<OptionType>;
  onClickElement: (element: OptionType) => void;
  value: OptionType;
  variant?: 'dark' | 'ligth' | undefined;
};

const Dropdown = ({
  id,
  legend,
  icon,
  placeholder,
  elements,
  disableMarquee,
  onClickElement,
  value,
  variant,
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const refDropdown = useRef<HTMLFieldSetElement | null>(null);
  const onClickDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const { legend: selectedLegend } = value;
  useOnClickOutside(refDropdown, () => {
    setIsDropdownOpen(false);
  });
  return (
    <fieldset
      className={`${css.fieldset} ${variant ? css[variant] : ''}`}
      id={id}
      ref={refDropdown}
    >
      <legend className={css.legend}>
        {legend}
        {icon && icon}
      </legend>
      <div className={css.container} data-testid={id} onClick={onClickDropdown}>
        {selectedLegend ? (
          <label>{selectedLegend}</label>
        ) : (
          <label className={isDropdownOpen ? '' : css.labelOpen}>
            {isDropdownOpen ? 'Selecciona' : placeholder}
          </label>
        )}

        <div className={css.arrowContainer}>
          <img
            className={isDropdownOpen ? css.arrowIcon : ''}
            src={ArrowCompanySelectionIcon}
            alt=""
          />
        </div>
        {isDropdownOpen && (
          <div className={css.elements}>
            {elements.map((element, key) => (
              <li
                id={`${id}-option-${key}`}
                data-testid={`${id}-option-${key}`}
                key={`${id}-option-${key}`}
                className={css.element}
                onClick={() => onClickElement(element)}
              >
                <div className={disableMarquee ? '' : css.elementMarquee}>
                  {element.legend}
                </div>
              </li>
            ))}
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default Dropdown;
