import { ChangeEvent, ReactNode } from 'react';

export type InputSearchProps = {
  id?: string | undefined;
  name?: string;
  value?: string | undefined;
  placeholder?: string;
  icon?: ReactNode;
  maxLength?: number | undefined;
  variant?: 'dark' | 'ligth' | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
};
