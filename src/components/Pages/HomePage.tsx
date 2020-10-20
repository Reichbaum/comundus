import React, {Suspense} from 'react'
import Slider from '../Slider/Slider'
import {Space, Typography, Row, Col, Divider} from 'antd'
import bahnLogo from '../../assets/img/bahn-erlebnisreise-logo.png'
import railEventLogo from '../../assets/img/railevent.png'

const GoogleMapOffice = React.lazy(() => import('../GoogleMap/GoogleMap'));

const {Title, Text, Link} = Typography

const HomePage = React.memo(() => {

  return <div>
      <Slider/>
    <div className='container'>
      <Title>Gemeinsam die Welt entdecken</Title>
      <Space direction="vertical" size='large'>
        <Text strong>Sehr geehrte Damen und Herren,</Text>
        <Text>
          Vielen Dank für Ihr Interesse an den Produkten der Comundus Reisen und Events.
          Wir wollen Sie zielgerichteter über unser Produktportfolio informieren und haben für unsere beiden Marken und
          Produktlinien die zwei unterschiedlichen Websites <Link href="https://www.bahn-erlebnisreise.de"
                                                                  target="_blank">
          Die Eisenbahn Erlebnisreise</Link> und <Link href="https://www.rail-event.de" target="_blank">rail
          event</Link> freigeschaltet.
        </Text>
        <Row style={{backgroundColor: 'white', padding: '15px'}}>
          <Col className="gutter-row" sm={24} md={8}>
            <img src={bahnLogo} width={280} alt='Die Eisenbahn Erlebnisreise logo'/>
          </Col>
          <Col className="gutter-row" sm={24} md={12}>
            <Text>Auf <Link href="https://www.bahn-erlebnisreise.de" target="_blank">
              Die Eisenbahn Erlebnisreise</Link> finden Sie unser Reiseveranstalter-Produkt mit vielen interessanten,
              erlebnisreichen und weltweiten Gruppenreisen per Bahn
              sowie Kreuzfahrten auf der Schiene, auf dem Fluss oder zur See.</Text>
          </Col>
          <Divider/>
          <Col className="gutter-row" sm={24} md={8}>
            <img src={railEventLogo} width={280} alt='rail event logo'/>
          </Col>
          <Col className="gutter-row" sm={24} md={12}>
            <Text><Link href="https://www.rail-event.de" target="_blank">rail event</Link> ist unser Produkt für Firmen,
              Verbände, Incentive- und Eventagenturen sowie Endkunden, die einen ganzen Zug, einzelne Waggons
              oder Bahninfrastrukturen für Events oder Incentive-Reisen nutzen möchten.</Text>
          </Col>
        </Row>
      </Space>
      <Divider/>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
    <GoogleMapOffice/>
    </Suspense>
  </div>
})

export default HomePage