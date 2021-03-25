import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Topbar from './components/Topbar'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import ru from './data/messages/ru'
import uk from './data/messages/uk'
import Partners from './components/Partners'
const messages = { ru, uk }

const Layout = ({ children, location, partners= false }) => {
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
        const homeLink = `/${langKey}/`
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

        return (
          <IntlProvider
            locale={langKey}
            messages={messages[langKey]}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Topbar langs={langsMenu} langKey={langKey}/>
              <div style={{display: 'flex'}}>
                <div>
                  {children}
                </div>
                {partners && <Partners />}
              </div>
            </ThemeProvider>
          </IntlProvider>
        )
      }}
    />
  );
};

export default Layout
