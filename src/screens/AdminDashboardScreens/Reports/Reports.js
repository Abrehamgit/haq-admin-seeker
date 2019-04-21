import React, { Component } from "react";
import Iframe from "react-iframe";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { Card, Icon } from "antd";
import { Tabs } from "antd";
import { List } from "antd";
import { Modal } from "antd";
import Image from "../../../assets/undraw_under_construction_46pa.svg";
import styles from "./index.module.css";
import Spinner from "../../../components/Spinner/Spinner";
import { Drawer, Form, Button, Col, Row, Select } from "antd";
import axios from "axios";
const confirm = Modal.confirm;
const TabPane = Tabs.TabPane;
const { Option } = Select;
const data = [
  {
    title: "Title 1"
  }
];
class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      tabPosition: "left",
      reports: [],
      report: {}
    };
  }
  componentWillMount() {
    axios({
      method: "get",
      url: `https://fake-news-backend.herokuapp.com/report`
    })
      .then(response => {
        console.log(response.data.rows);
        this.setState({
          reports: response.data.rows
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  showDrawer = item => {
    this.setState({
      visible: !this.state.visible
    });
    if (item) {
      console.log(item);
      this.setState({
        report: item
      });
    }
  };

  showDeleteConfirm = id => {
    confirm({
      title: "Are you sure delete this task?",
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log(id);
      },
      onCancel() {
        console.log(id + "Cancel");
      }
    });
  };
  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };
  getYoutube = url => {
    let ID = "";
    if (url) {
      url = url
        .replace(/(>|<)/gi, "")
        .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_-]/i);
        ID = ID[0];
      } else {
        ID = url;
      }
      return ID;
    }
  };

  state = {
    loading: false
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <div>
        <div className={styles["container"]}>
          <div className={styles["inner"]}>
            <Tabs
              tabPosition={this.state.tabPosition}
              style={{ paddingRight: 15 }}
            >
              <TabPane
                tab={
                  <span>
                    <Icon type="youtube" />
                    Youtube
                  </span>
                }
                key="1"
              >
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 2,
                    xl: 2,
                    xxl: 2
                  }}
                  dataSource={this.state.reports}
                  renderItem={item => {
                    if (item && item.platform === "youtube") {
                      console.log(item.platform);
                      return (
                        <List.Item>
                          <Card
                            style={{
                              width: "100%",
                              marginBottom: "50px",
                              marginRight: "30px"
                            }}
                            cover={
                              <Iframe
                                url={`https://www.youtube.com/embed/${this.getYoutube(
                                  item.link
                                )}`}
                                width="100%"
                                height="350px"
                                id="myId"
                                display="initial"
                                position="relative"
                              />
                            }
                            actions={[
                              <Icon
                                type="plus-circle"
                                style={{
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#81a3d3"
                                }}
                                onClick={() => {
                                  this.showDrawer(item);
                                }}
                              />,
                              <Icon
                                type="delete"
                                style={{
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#f00"
                                }}
                                onClick={() => {
                                  this.showDeleteConfirm(item.title);
                                }}
                              />
                            ]}
                          />
                        </List.Item>
                      );
                    } else {
                      return <h1 />;
                    }
                  }}
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="facebook" />
                    Facebook
                  </span>
                }
                key="2"
              >
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 1,
                    xl: 2,
                    xxl: 2
                  }}
                  dataSource={this.state.reports}
                  renderItem={item => {
                    if (item.platform === "facebook") {
                      console.log(item.link);
                      return (
                        <List.Item
                          style={{
                            marginBottom: "50px",
                            marginRight: "30px"
                          }}
                        >
                          <Card
                            style={{
                              width: "500px"
                            }}
                            cover={
                              <FacebookProvider
                                appId="418837532009114"
                                className="iframe"
                              >
                                <EmbeddedPost
                                  href={item.link}
                                  width="500px"
                                  height="350px"
                                  id="myId"
                                  display="initial"
                                  position="relative"
                                />
                              </FacebookProvider>
                            }
                            actions={[
                              <Icon
                                type="plus-circle"
                                style={{
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#81a3d3"
                                }}
                                onClick={() => {
                                  this.showDrawer(item);
                                }}
                              />,
                              <Icon
                                type="delete"
                                style={{
                                  fontWeight: 500,
                                  fontSize: 25,
                                  color: "#f00"
                                }}
                                onClick={() => {
                                  this.showDeleteConfirm(item);
                                }}
                              />
                            ]}
                          />
                        </List.Item>
                      );
                    } else {
                      return <h1 />;
                    }
                  }}
                />
                ,
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="twitter" />
                    Twitter
                  </span>
                }
                key="3"
              >
                <Card
                  style={{ width: 500 }}
                  cover={<img alt="example" src={Image} />}
                  actions={["Under Construction"]}
                />
              </TabPane>
            </Tabs>
          </div>
        </div>
        <Drawer
          title="Assign a possible fake news a location"
          width={520}
          onClose={this.showDrawer}
          visible={this.state.visible}
        >
          {this.state.report !== {} &&
          this.state.report.platform === "facebook" ? (
            <FacebookProvider appId="418837532009114" className="iframe">
              <EmbeddedPost
                href={this.state.report.link}
                width="300px"
                height="300px"
                id="myId"
                display="initial"
                position="relative"
              />
            </FacebookProvider>
          ) : (
            <Iframe
              url={`https://www.youtube.com/embed/${this.getYoutube(
                this.state.report.link
              )}`}
              width="100%"
              height="350px"
              id="myId"
              display="initial"
              position="relative"
            />
          )}
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="News Location">
                  <Select placeholder="Please choose the Location">
                    <Option value="Addis_Ababa">Addis Ababa</Option>
                    <Option value="Adama">Adama</Option>
                    <Option value="Addis_Ababa1">Addis Ababa</Option>
                    <Option value="Adama1">Adama</Option>
                    <Option value="Addis_Ababa2">Addis Ababa</Option>
                    <Option value="Adama2">Adama</Option>
                    <Option value="Addis_Ababa3">Addis Ababa</Option>
                    <Option value="Adama3">Adama</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "right"
            }}
          >
            <Button onClick={this.showDrawer} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.showDrawer} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Reports;
