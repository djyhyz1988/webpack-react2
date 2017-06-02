import React from 'react';
import { Row,Col,Tabs,Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
const TabPane = Tabs.TabPane;

export default class PCContainer extends React.Component{
    render(){
        const setting ={
            autoplay:true,
            dots:true
        }
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...setting}>
                                    <div><img src="./src/images/carousel_1.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_2.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_3.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_4.jpg" alt=""/></div>
                                </Carousel>
                            </div>
                        </div>
                        <div class="rightContainer">
                            <Tabs>
                                <TabPane tab="新闻" key="1">
                                    <PCNewsBlock count={22} type="top" width="100%"  bordered="false"></PCNewsBlock>
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}

