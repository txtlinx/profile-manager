import css from './FlagElement.module.css';
type Props = {
  flagIcon: string | undefined;
  legend: string;
  id?: string;
};

const FlagElement = ({ flagIcon, legend, id }: Props) => {
  return (
    <span className={css.FlagElement} data-testid={id}>
      <img src={flagIcon} alt="flag" />
      {legend}
    </span>
  );
};

export default FlagElement;
