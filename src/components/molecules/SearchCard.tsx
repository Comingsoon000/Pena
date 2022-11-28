import React from 'react';
import { Container } from '../atoms/container'
import { Input } from '../atoms/input';

interface Props {
  gridArea?: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const SearchCard = React.memo((props: Props) => {
  const {
    gridArea,
    label,
    onClick,
  } = props;

  return (
    <Container
      gridArea={gridArea}
      justifyContent="center"
      backgroundColor="black"
    >
      <Input
        witchSearchIcon
        fullWidth
        label={label}
        onClick={onClick}
      />
    </Container>
  );
});
