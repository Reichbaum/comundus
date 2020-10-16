import React from 'react'
import './Footer.less'
import {BackTop, Col, Divider, Row, Space} from 'antd'
import {Link} from 'react-router-dom'

const Footer = () => {
  let year = new Date().getFullYear()
  return <div className='footer'>
    <BackTop/>
    <div className='footer__wrapper container'>
      <Row gutter={15} className="footer__row">
        <Col className="footer__col" sm={24} md={8}>
          Comundus Reisen und Event GmbH<br/>
          Telefon: +49 (0) 211 – 929 666-0<br/>
          Telefax: +49 (0) 211 – 929 666-11<br/>
          E-Mail: info@comundus-reisen.de

        </Col>
        <Col className="footer__col" sm={24} md={8}>
          Postfach 10 33 14<br/>
          40024 Düsseldorf<br/>
          Scheurenstraße 26<br/>
          40215 Düsseldorf
        </Col>
        <Col className="footer__col" sm={24} md={8}>
          Sitz der Gesellschaft/ Society's registered seat:<br/>
          Düsseldorf Amtsgericht Düsseldorf HRB 58462<br/>
          Vertretungsberechtigter Geschäftsführer/Managing Director:<br/>
          Arnold Kühn
        </Col>
      </Row>

    </div>
    <div className='footer__powered'>
      <div className='footer__wrapper container'>
      <Space>
        <p>2009-{year} © Comundus Reisen und Events GmbH</p>
        <Divider type="vertical" style={{borderLeftColor: '#535353'}}/>
        <p>Made with <span>❤</span> by <a href="mailto:reichbaumjulia@gmail.com" target="_blank">Reichbaum</a></p>
      </Space>
      <Space>
       <Link to="/impressum">Impressum</Link>
        <Divider type="vertical" style={{borderLeftColor: '#535353'}}/>
        <Link to="/datenschutz">Datenschutz</Link>
      </Space>
      </div>
    </div>
  </div>

}

export default Footer
