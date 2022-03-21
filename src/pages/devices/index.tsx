import React from 'react';
import Layout from 'Layouts';
import { Row, Col } from '@paljs/ui';
import { Button } from '@paljs/ui/Button';
import { Card, CardBody } from '@paljs/ui/Card';
import { EvaIcon } from '@paljs/ui/Icon';
import Image from 'next/image';

import LightBulb from '../../assets/img/light-bulb.png';

const style = { 
  marginBottom: '1.5rem',};

const Devices = () => {
  
  const rooms: Array<any> = ['Aguiar', 'Cozinha', 'WC Fem', 'WC Masc', 'Autodomo',]
  
  const devices: Array<any>=['Lâmpadas Aguiar', 'Luz Banheiro', 'Tomadas', 'Portão', 'Luz Autodomossss']

  return (
    <Layout title="Devices">
        <Row>
          {/* PARTE ESCOLHA DE AMBIENTE */}
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Ambientes</header>
            <CardBody>
              <Row>
                {rooms.map ((state: string)=>(
                  // 
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                  <Button fullWidth style={{width:150, height:150}}>
                  <Col>
                  <Image
                  src={LightBulb}
                  alt="My Image"
                  width={30}
                  height={30}
                  />
                  </Col>

                  <Col style={{backgroundColor:'#1221', width:110, height:50}}>
                    <p style={{fontWeight:'bold',height:5}}>{state}</p>
                    <p style={{fontWeight:'bold', fontSize: 12}}>Subtitle</p>
                    </Col>

                  </Button>
                </Col>
                  // 
              ))}
              </Row>
            </CardBody>
          </Card>
        </Col>

    
          {/* PARTE ESCOLHA DE AMBIENTE */}
          <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Geral</header>
            <CardBody>
              <Row>
                {devices.map ((state: string)=>(
                  <Col style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth appearance="outline" status={'Info'} style={{ width: 150, height: 150}}>
                      <EvaIcon name="home" />
                      
                      <p>{state}</p>
                    </Button>
                  </Col>
              ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        </Row>
    </Layout>
  )
};
export default Devices;
