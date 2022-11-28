import React from 'react';
import { Container } from '../atoms/container';
import { ArrowButton } from '../atoms/button';
import { Counter } from '../atoms/counter';

interface Props {
  current?: number,
  amount?: number,
}

export const CounterWithControls = React.memo((props: Props): JSX.Element => {
  const {
    current,
    amount,
  } = props;

  return (
    <Container gridArea='counter' justifyContent='space-around'>
      <ArrowButton/>
        <Counter current={current} amount={amount}/>
      <ArrowButton rotated />
    </Container>
  );
});
