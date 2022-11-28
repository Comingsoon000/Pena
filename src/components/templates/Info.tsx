import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { SearchCard, CardWithIcon } from '../molecules';
import { PdfIcon, ContactsIcon } from '../atoms/icons';

const gridTemplateAreasDesktop = `
  "price contacts search search"
`;

const gridTemplateAreasLaptop = `
  "price  .      contacts"
  "search search search  "
`;

const gridTemplateAreasTablet = `
  "price  contacts"
  "search search  "
`;

const gridTemplateAreasMobile = `
  "price"
  "contacts"
  "search"
`;

const StyledSection = styled('section')(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  [theme.breakpoints.up('mobile')]: {
    gridTemplateColumns: '293px',
    gridTemplateRows: 'repeat(3, 293px)',
    gridTemplateAreas: gridTemplateAreasMobile,
    background: `
      linear-gradient(
        to bottom,
        ${theme.palette.gray2} calc(50% + 146.5px),
        ${theme.palette.black} calc(50% - 146.5px)
      )
    `,
  },
  [theme.breakpoints.up('tablet')]: {
    gridTemplateColumns: 'repeat(2, 293px)',
    gridTemplateRows: 'repeat(2, 293px)',
    gridTemplateAreas: gridTemplateAreasTablet,
    background: `
      linear-gradient(
        to bottom,
        ${theme.palette.gray2} 50%,
        ${theme.palette.black} 50%
      )
    `,
  },
  [theme.breakpoints.up('laptop')]: {
    gridTemplateColumns: 'repeat(3, 293px)',
    gridTemplateRows: 'repeat(2, 293px)',
    gridTemplateAreas: gridTemplateAreasLaptop,
    background: `
      linear-gradient(
        to bottom,
        ${theme.palette.gray2} 50%,
        ${theme.palette.black} 50%
      )
    `,
  },
  [theme.breakpoints.up('desktop')]: {
    gridTemplateColumns: 'repeat(4, 293px)',
    gridTemplateRows: '293px',
    gridTemplateAreas: gridTemplateAreasDesktop,
    background: `
      linear-gradient(
        to right,
        ${theme.palette.gray2} 50%,
        ${theme.palette.black} 50%
      )
    `,
  },
}));

export const Info = (): JSX.Element => {
  const { t } = useTranslation('info');

  return (
    <StyledSection>
      <CardWithIcon
        gridArea="price"
        text={t("price.description")}
        textColor="black"
        backgroundColor="yellow"
        icon={<PdfIcon/>}
      />
      <CardWithIcon
        gridArea="contacts"
        text={t("contacts.description")}
        textColor="white"
        backgroundColor="blue"
        icon={<ContactsIcon/>}
      />
      <SearchCard gridArea="search" label={t("search.label")}/>
    </StyledSection>
  );
};
