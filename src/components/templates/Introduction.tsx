import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { TextCard, CounterWithControls, VideoCard } from '../molecules';

const gridTemplateAreasDesktop = `
  "building building .     counter"
  ".        .        video .      "
`;

const gridTemplateAreasLaptop = `
  "building building counter"
  ".        video    .      "
`;

const gridTemplateAreasTablet = `
  "building building"
  "video    counter "
`;

const gridTemplateAreasMobile = `
  "building"
  "building"
  "counter"
  "video"
`;

const StyledSection = styled('section')(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  paddingTop: '200px',
  [theme.breakpoints.up('mobile')]: {
    gridTemplateColumns: '293px',
    gridTemplateRows: 'repeat(4, 293px)',
    gridTemplateAreas: gridTemplateAreasMobile,
    background: `
      linear-gradient(
        to right,
        ${theme.palette.gray2} 50%,
        ${theme.palette.black} 50%
      )
    `,
  },
  [theme.breakpoints.up('tablet')]: {
    gridTemplateColumns: 'repeat(2, 293px)',
    gridTemplateRows: 'repeat(2, 293px)',
    gridTemplateAreas: gridTemplateAreasTablet,
    background: `
      linear-gradient(
        to right,
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
        to right,
        ${theme.palette.gray2} calc(50% + 146.5px),
        ${theme.palette.black} calc(50% - 146.5px)
      )
    `,
  },
  [theme.breakpoints.up('desktop')]: {
    gridTemplateColumns: 'repeat(4, 293px)',
    gridTemplateRows: 'repeat(2, 293px)',
    gridTemplateAreas: gridTemplateAreasDesktop,
    background: `
      linear-gradient(
        to right,
        ${theme.palette.gray2} calc(50% + 293px),
        ${theme.palette.black} calc(50% - 293px)
      )
    `,
  },
}));

export const Introduction = (): JSX.Element => {
  const { t } = useTranslation('introduction');

  return (
    <StyledSection>
      <TextCard
        gridArea="building"
        backgroundColor="yellow"
        title={t("building.title.part1")}
        title2={t("building.title.part2") as string}
        content={t("building.content")}
        withButton
        buttonText={t("building.action") as string}
      />
      <CounterWithControls/>
      <VideoCard gridArea="video" text={t("video.description")} />
    </StyledSection>
  );
};
