import React from 'react';
import { styled } from '@mui/material/styles';

interface Props {
  items?: React.ReactNode[];
  gap?: string;
}

const StyledUl =
  styled('ul', { shouldForwardProp: (prop) => prop !== 'gap' })<Props>
  (({ theme, gap }) => ({
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0',
    gap,
    flexWrap: 'wrap',
    color: theme.palette.white,
  }));

export const NavMenu = React.memo((props: Props) => {
  const {
    items = [],
    gap = '0',
  } = props;

  return (
    <nav>
      <StyledUl gap={gap}>
        {items.map((item, index) => (
          <li key={`menuItem${index}`}>
            {item}
          </li>
        ))}
      </StyledUl>
    </nav>
  );
});
