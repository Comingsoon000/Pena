import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { TextCard, CounterWithControls, CardWithIcon, SubscribeCard } from '../molecules';
import { ColorButton } from '../atoms/button/types';

const gridTemplateAreasDesktop = `
  "villa . .       workWithUs"
  "villa . counter subscribe"
`;

const gridTemplateAreasLaptop = `
  "villa .       workWithUs"
  "villa counter subscribe"
`;

const gridTemplateAreasTablet = `
  "villa     workWithUs"
  "villa     counter   "
  "subscribe subscribe "
`;

const gridTemplateAreasMobile = `
  "villa"
  "villa"
  "counter"
  "workWithUs"
  "subscribe"
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

const StyledEngineeringIcon = styled(EngineeringIcon)(({ theme }) => ({
  width: '80px',
  height: '80px',
  color: theme.palette.black,
}));

export const Conclusion = (): JSX.Element => {
  const { t } = useTranslation('conclusion');

  return (
    <StyledSection>
      <TextCard
        gridArea="villa"
        title={t("villa.title")}
        titleVariant="h4"
        titleComponent="h3"
        content={t("villa.content.part1")}
        content2={t("villa.content.part2") as string}
        contentColor="gray3"
        withButton
        buttonText={t("villa.action") as string}
        buttonTextColor="black"
        buttonColor={ColorButton.SECONDARY}
      />
      <CounterWithControls amount={9} />
      <CardWithIcon
        gridArea="workWithUs"
        text={t("workWithUs.description")}
        textColor="black"
        backgroundColor="yellow"
        icon={<StyledEngineeringIcon/>}
      />
      <SubscribeCard
        gridArea="subscribe"
        title={t("subscribe.title")}
        inputLabel={t("subscribe.label")}
        buttonText={t("subscribe.action")}
      />
    </StyledSection>
  );
};