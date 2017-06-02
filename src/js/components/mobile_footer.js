import React from 'react';
import { Row,Col,Menu,Icon } from 'antd';
import 'antd/dist/antd.css';

export default class MobileFooter extends React.Component{

    render(){
        return(
            <footer class="footer">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        Copyright © 2011-2017 www.weimob.com. All Rights Reserved 上海微盟科技股份有限公司版权所有
                    </Col>
                    <Col span={2}>
                    </Col>
                </Row>
            </footer>
        )
    }
}

