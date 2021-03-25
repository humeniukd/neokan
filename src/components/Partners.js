import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { FormattedMessage } from 'react-intl'

export function Partners() {
  return (
    <center>
      <h2><FormattedMessage id="partners" /></h2>
      <a title="Bernard Controls" href="http://www.bernardcontrols.com/ru/" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="Bernard Controls" src="../images/partners/bernard-controls.jpg" />
      </a>
      <br/>
      <a title="Flowserve Corporation" href="http://www.flowserve.com/" target="_blank" rel="noreferrer">
        <StaticImage src="http://www.flowserve.com//files/assets/fls2/images/logo.png" width="160" alt="Flowserve" />
      </a>
      <br/>
      <a title="BIFFI" href="http://www.biffi.it" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="BIFFI" src="../images/partners/bifiLogo.gif" />
      </a>
      <br/>
      <a title="AUMA MATIC" href="http://www.auma.com" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="AUMA MATIC" src="../images/partners/auma.gif" />
      </a>
      <br/>
      <a title="REGADA" href="http://www.regada.sk" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="REGADA" src="../images/partners/regada.png" />
      </a>
      <br/>
      <a title="Bettis" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="Bettis" src="../images/partners/Bettis.gif" />
      </a>
      <br/>
      <a title="Emerson" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="Emerson" src="../images/partners/emersonlogo.gif" />
      </a>
      <br/>
      <a title="Exlar" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="Exlar" src="../images/partners/exl_logo.jpg" />
      </a>
      <br/>
      <a title="Armatury" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="Armatury" src="../images/partners/logo_armatury.gif" />
      </a>
      <br/>
      <a title="Vacono" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="Vacono" src="../images/partners/vac_log.gif" />
      </a>
      <br/>
      <a title="MSA" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="MSA" src="../images/partners/logomsa.gif" />
      </a>
      <br/>
      <a title="DKG" target="_blank" rel="noreferrer">
        <StaticImage width="160" alt="DKG" src="../images/partners/logodkg.gif" />
      </a>
      <br/>
      <a title="Leser" target="_blank" rel="noreferrer">
        <StaticImage width="160" height="20" alt="Leser" src="../images/partners/leserLogo.gif" />
      </a>
      <br/>
      <a title="Rotork Homepage" href="http://www.rotork.com/en" target="_blank" rel="noreferrer">
        <StaticImage width="160" height="50" alt="Rotork Logo" src="../images/partners/rotork.svg"/>
      </a>
    </center>
  )
}

export default Partners;
