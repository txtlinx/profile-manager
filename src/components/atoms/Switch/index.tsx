import { ChangeEvent } from 'react';
import { Label, Input, SwitchStyle } from './styles';

type Props = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: number;
  text?: string;
  name: string;
  checked: boolean;
};

const Switch = ({ onChange, value, text, name, checked }: Props) => {
  return (
    <Label>
      <Input
        type="checkbox"
        onChange={onChange}
        value={value}
        name={name}
        checked={checked}
        data-testid={`checkbox-${name}`}
      />
      <SwitchStyle />
      <span>{text}</span>
    </Label>
  );
};

export default Switch;
