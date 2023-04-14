import { ReactNode, useRef, useState } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import css from './Tooltip.module.css';

type Props = {
  arrowOrientation: 'top' | 'left' | 'right' | 'bottom';
  title?: string;
  content?: ReactNode;
  icon?: ReactNode;
  id?: string;
  children?: ReactNode;
};

const arrowOrientations = {
  top: css.tooltipArrowUp,
  left: css.tooltipArrowLeft,
  right: css.tooltipArrowRight,
  bottom: css.tooltipArrowBottom,
};

const Tooltip = ({
  id,
  content,
  icon,
  arrowOrientation,
  title,
  children,
}: Props) => {
  const defineaArrowOrientationClassname = () => {
    return arrowOrientations[arrowOrientation];
  };

  const [open, setOpen] = useState<boolean>(false);
  const refTooltip = useRef<HTMLDivElement | null>(null);

  const handelClose = () => setOpen(false);
  useOnClickOutside(refTooltip, handelClose);

  return (
    <div
      className={`${css.container}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open ? (
        <div
          id={id}
          data-testid={id}
          className={`${css.tooltip} ${defineaArrowOrientationClassname()}`}
          ref={refTooltip}
        >
          {icon && <div className={css.iconContainer}>{icon}</div>}
          <div>
            {title && <div className={css.title}>{title}</div>}
            {content && <div className={css.content}>{content}</div>}
            <div></div>
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Tooltip;
