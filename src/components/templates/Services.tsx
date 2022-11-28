import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { TextCard, CounterWithControls, VideoCard } from '../molecules';

const gridTemplateAreasDesktop = `
  "services .           contracting .           "
  "counter  engineering .           improvements"
`;

const gridTemplateAreasLaptop = `
  "services .           contracting "
  "counter  engineering improvements"
`;

const gridTemplateAreasTablet = `
  "services     contracting"
  "counter      engineering"
  "improvements .          "
`;

const gridTemplateAreasMobile = `
  "services"
  "contracting"
  "counter"
  "engineering"
  "improvements"
`;

const StyledSection = styled('section')(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  backgroundColor: theme.palette.gray2,
  [theme.breakpoints.up('mobile')]: {
    gridTemplateColumns: '293px',
    gridTemplateRows: 'repeat(5, 293px)',
    gridTemplateAreas: gridTemplateAreasMobile,
  },
  [theme.breakpoints.up('tablet')]: {
    gridTemplateColumns: 'repeat(2, 293px)',
    gridTemplateRows: 'repeat(3, 293px)',
    gridTemplateAreas: gridTemplateAreasTablet,
  },
  [theme.breakpoints.up('laptop')]: {
    gridTemplateColumns: 'repeat(3, 293px)',
    gridTemplateRows: 'repeat(2, 293px)',
    gridTemplateAreas: gridTemplateAreasLaptop,
  },
  [theme.breakpoints.up('desktop')]: {
    gridTemplateColumns: 'repeat(4, 293px)',
    gridTemplateRows: 'repeat(2, 293px)',
    gridTemplateAreas: gridTemplateAreasDesktop,
  },
}));

export const Services = (): JSX.Element => {
  const { t } = useTranslation('services');

  return (
    <StyledSection>
      <TextCard
        gridArea="services"
        title={t("services.title")}
        content={t("services.content")}
        contentColor="gray3"
      />
      <TextCard
        gridArea="contracting"
        title={t("contracting.title")}
        titleVariant="h5"
        titleComponent="h3"
        content={t("contracting.content")}
        contentColor="gray3"
      />
      <CounterWithControls current={3} amount={6} />
      <TextCard
        gridArea="engineering"
        title={t("engineering.title")}
        titleVariant="h5"
        titleComponent="h3"
        content={t("engineering.content")}
        contentColor="gray3"
      />
      <TextCard
        gridArea="improvements"
        title={t("improvements.title")}
        titleVariant="h5"
        titleComponent="h3"
        content={t("improvements.content")}
        contentColor="gray3"
      />
    </StyledSection>
  );
};
