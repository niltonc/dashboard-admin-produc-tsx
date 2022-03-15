import React from 'react';
import Layout from 'Layouts';
import { Status, Size, Shape } from '@paljs/ui/types';
import { Row, Col } from '@paljs/ui';
import { Button, ButtonLink } from '@paljs/ui/Button';
import { Card, CardBody } from '@paljs/ui/Card';


const style = { marginBottom: '1.5rem' };

const Devices = () => {
  const status: Status[] = ['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Basic', 'Control'];

  return (
    <Layout title="Devices">
        <Row>
          {/* PARTE ESCOLHA DE AMBIENTE */}
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Ambientes</header>
            <CardBody>
              <Row>
                {status.map((state) => (
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth appearance="outline" status={state}>
                      {state}
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
