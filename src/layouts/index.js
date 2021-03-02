import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Topbar from '../components/Topbar'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../theme'

const Index = ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }      
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname;
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
        return (
          <IntlProvider
            locale={langKey}
            messages={i18nMessages}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Topbar langs={langsMenu} />
              {children}
            </ThemeProvider>
          </IntlProvider>
        )
      }}
    />
  );
};

export default Index
