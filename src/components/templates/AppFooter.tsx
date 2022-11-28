import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { NavMenu } from '../molecules';
import { Typography } from '../atoms/typography';
import { Link } from '../atoms/Link';

const StyledDiv = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '20px 0',
  backgroundColor: theme.palette.gray2,
}));

const StyledFooter = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  [theme.breakpoints.up('mobile')]: {
    width: '293px',
  },
  [theme.breakpoints.up('tablet')]: {
    width: '586px',
  },
  [theme.breakpoints.up('laptop')]: {
    width: '879px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '1172px',
  },
}));

export const AppFooter = () => {
  const { t } = useTranslation('footer');

  return (
    <StyledDiv>
      <StyledFooter>
        <Typography variant="body2" component="p" color="gray3">
          {t("theme.foundation")}
          <Link>
            <Typography variant="body2" component="span" color="blue">
              {t("theme.author")}
            </Typography>
          </Link>
        </Typography>
        <NavMenu
          gap="20px"
          items={[
            <Link>
              <Typography variant="body2" component="p" color="gray3">
                {t("links.services")}
              </Typography>
            </Link>,
            <Link>
              <Typography variant="body2" component="p" color="blue">
                {t("links.works")}
              </Typography>
            </Link>,
            <Link>
              <Typography variant="body2" component="p" color="gray3">
                {t("links.news")}
              </Typography>
            </Link>,
            <Link>
              <Typography variant="body2" component="p" color="gray3">
                {t("links.collaboration")}
              </Typography>
            </Link>,
            <Link>
              <Typography variant="body2" component="p" color="gray3">
                {t("links.faq")}
              </Typography>
            </Link>,
            <Link>
              <Typography variant="body2" component="p" color="gray3">
                {t("links.contacts")}
              </Typography>
            </Link>,
            <Link>
              <Typography variant="body2" component="p" color="gray3">
                {t("links.shop")}
              </Typography>
            </Link>,
          ]}
        />
      </StyledFooter>
    </StyledDiv>
  );
};
