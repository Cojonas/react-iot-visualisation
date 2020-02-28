import React from 'react';
import { Card, Descriptions, Skeleton } from 'antd';
import { Row, Col } from 'antd';
import LightBulb from "./LightBulbs"

import 'antd/dist/antd.css';

  


function Dashboard(props) {
    const data = props.data ? props.data : {}

    const isConnected = props.isConnected

    const PARAMS_BINARY = ["Heating", "Standby", "PumpgStatn"]
    const PARAMS_RUNTIME = ["ActualSpd", "DrvCurrent", "Pressure_1", "DrvPower", "TempElec", "TempMotor"]

    return <div style={{ margin: 20 }}>

        <Descriptions title="User Info">
            <Descriptions.Item  label="Server Connection"><LightBulb on={isConnected} /></Descriptions.Item>
            <Descriptions.Item label="ElecName">{data.ElecName}</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
        </Descriptions>

        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card title="Controls" style={{ width: "100%", margin: 10}}>

                    {
                        Object.keys(data).length > 0 ? PARAMS_BINARY.map((item) => <p key={item}>{item}: <LightBulb on={data["item"] === "0" ? true : false}></LightBulb> </p>) : <Skeleton active paragraph={{ rows: 4 }}>
                        </Skeleton>
                    }
                </Card>

            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card title="Runtime" style={{ width: "100%", margin: 10 }}>
                    {
                        Object.keys(data).length > 0 ? PARAMS_RUNTIME.map((item) => <p key={item}>{item}: {data[item]}</p>) : <Skeleton active paragraph={{ rows: 4 }}>

                        </Skeleton>
                    }
                </Card>

            </Col>


        </Row>


       

    </div>

}

export default Dashboard; 
