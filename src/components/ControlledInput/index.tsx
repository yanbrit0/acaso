import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

type Props = TextInputProps & {
  name: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  control: Control<any>;
  isPassword?: boolean;
};

export const ControlledInput: React.FC<Props> = ({
  name,
  control,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <Input
          innerRef={ref}
          value={value}
          onChangeText={onChange}
          error={error?.message}
          blurOnSubmit={false}
          {...rest}
        />
      )}
    />
  );
};
