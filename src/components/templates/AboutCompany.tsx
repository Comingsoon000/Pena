import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import OpacityIcon from '@mui/icons-material/Opacity';
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { CommentCard, TextCard, AchivmentsCard, NewsCard } from '../molecules';

const gridTemplateAreasDesktop = `
  "Jhonson Jhonson aboutCompany  aboutCompany     "
  "Schults Schults expertWitness construction     "
  "news    Adams   procurement   projectManagments"
`;

const gridTemplateAreasLaptop = `
  "Jhonson      Jhonson      news             "
  "Schults      Schults      Adams            "
  "aboutCompany aboutCompany expertWitness    "
  "construction procurement  projectManagments"
`;

const gridTemplateAreasTablet = `
  "Jhonson       Jhonson          "
  "Adams         news             "
  "Schults       Schults          "
  "aboutCompany  aboutCompany     "
  "expertWitness construction     "
  "procurement   projectManagments"
`;

const gridTemplateAreasMobile = `
  "Jhonson"
  "Jhonson"
  "news"
  "Adams"
  "Schults"
  "Schults"
  "aboutCompany"
  "aboutCompany"
  "expertWitness"
  "construction"
  "procurement"
  "projectManagments"
`;

const StyledSection = styled('section')(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
  backgroundColor: theme.palette.gray2,
  [theme.breakpoints.up('mobile')]: {
    gridTemplateColumns: '293px',
    gridTemplateRows: 'repeat(12, 293px)',
    gridTemplateAreas: gridTemplateAreasMobile,
  },
  [theme.breakpoints.up('tablet')]: {
    gridTemplateColumns: 'repeat(2, 293px)',
    gridTemplateRows: 'repeat(6, 293px)',
    gridTemplateAreas: gridTemplateAreasTablet,
  },
  [theme.breakpoints.up('laptop')]: {
    gridTemplateColumns: 'repeat(3, 293px)',
    gridTemplateRows: 'repeat(4, 293px)',
    gridTemplateAreas: gridTemplateAreasLaptop,
  },
  [theme.breakpoints.up('desktop')]: {
    gridTemplateColumns: 'repeat(4, 293px)',
    gridTemplateRows: 'repeat(3, 293px)',
    gridTemplateAreas: gridTemplateAreasDesktop,
  },
}));

export const AboutCompany = (): JSX.Element => {
  const { t } = useTranslation('aboutCompany');

  return (
    <StyledSection>
      <CommentCard
        gridArea="Jhonson"
        author={t("comments.Jhonson.author")}
        comment={t("comments.Jhonson.comment")}
      />
      <TextCard
        gridArea="aboutCompany"
        backgroundColor="gray2"
        title={t("aboutCompany.title.part1")}
        title2={t("aboutCompany.title.part2") as string}
        content={t("aboutCompany.content")}
        withButton
        buttonText={t("aboutCompany.action") as string}
      />
      <CommentCard
        gridArea="Schults"
        author={t("comments.Schults.author")}
        comment={t("comments.Schults.comment")}
        backgroundColor="gold"
        withToggleButtons
      />
      <AchivmentsCard
        gridArea="expertWitness"
        amount={t("achivments.expertWitness.amount")}
        text={t("achivments.expertWitness.description")}
      >
        
        <ElectricBoltIcon fontSize="large"/>
      </AchivmentsCard>
      <AchivmentsCard
        gridArea="construction"
        amount={t("achivments.construction.amount")}
        text={t("achivments.construction.description")}
        backgroundColor="gray2"
      >
        <OpacityIcon fontSize="large"/>
      </AchivmentsCard>
      <NewsCard
        gridArea="news"
        date={t("news.date")}
        theme={t("news.theme")}
        comments={t("news.comments")}
        backgroundColor="blue"
        withToggleButtons
      />
      <CommentCard
        gridArea="Adams"
        author={t("comments.Adams.author")}
        comment={t("comments.Adams.comment")}
      />
      <AchivmentsCard
        gridArea="procurement"
        amount={t("achivments.procurement.amount")}
        text={t("achivments.procurement.description")}
        backgroundColor="gray2"
      >
        <SettingsIcon fontSize="large"/>
      </AchivmentsCard>
      <AchivmentsCard
        gridArea="projectManagments"
        amount={t("achivments.projectManagments.amount")}
        text={t("achivments.projectManagments.description")}
      >
        <LightbulbIcon fontSize="large"/>
      </AchivmentsCard>
    </StyledSection>
  );
};
