import React, { Component } from "react";
import Iframe from "react-iframe";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { Card, Icon, message } from "antd";
import { Tabs } from "antd";
import { List } from "antd";
import { Modal } from "antd";
import Image from "../../../assets/undraw_under_construction_46pa.svg";
import styles from "./index.module.css";
import Spinner from "../../../components/Spinner/Spinner";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker
} from "antd";
import axios from "axios";
const confirm = Modal.confirm;

const TabPane = Tabs.TabPane;

const { Option } = Select;
const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  },
  {
    title: "Title 5"
  },
  {
    title: "Title 6"
  }
];
let str = "Visit W3Schools!";
let n = str.search("W3Schools");
class Reports extends Component {
  state = {
    visible: false,
    tabPosition: "left"
  };

  showDrawer = () => {
    this.setState({
      visible: !this.state.visible
    });
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
  };

  state = {
    loading: false,
    location: "Addis Ababa",
    reportId: "",
    postUrl: ""
  };

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  handleLocChange = value => {
    this.setState({ location: value });
  };
  submitLocation = () => {
    message.loading("Sending report to fact checkers...", 0);
    axios({
      method: "post",
      url: "https://fake-news-backend.herokuapp.com/report/send",
      data: {
        reportId: "39985e55-291e-4a86-ac8c-109e67b93d6f",
        location: this.state.location
      }
    })
      .then(reponse => {
        console.log(reponse);
        if (reponse.data) {
          message.destroy();
          message.success("Report sucessfully redirected to fact checkers.");
          this.setState({ visible: false });
        }
      })
      .catch(error => {
        console.log(error);
        message.destroy();
        message.error("Something went wrong.");
      });
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
                  dataSource={data}
                  renderItem={item => (
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
                              "https://www.youtube.com/watch?v=pvuN_WvF1to"
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
                              this.showDrawer();
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
                  )}
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
                  dataSource={data}
                  renderItem={item => (
                    <List.Item
                      style={{ marginBottom: "50px", marginRight: "30px" }}
                    >
                      <Card
                        style={{
                          width: "100%"
                        }}
                        cover={
                          <FacebookProvider
                            appId="418837532009114"
                            className="iframe"
                          >
                            <EmbeddedPost
                              href="https://www.facebook.com/BestofGameofThrones/photos/a.652975884758197/2124405004281937/?type=3&eid=ARDip30nYiI3Nzp_jUqPggK94tOb1TIQNBIitYuBjSJXVjfJOhDsNvqdeAwrniUJ1R599KI1OpDxHgMR&__xts__%5B0%5D=68.ARBNvhEHUfWjmJKFYOzvLgyJ7NEMSIRhPTB77Y68htVYjR7keChuL6TkzWTNwzUkBD5NlSO1gyKwTXmGAbaCi13pa2euyrzLqIO_W8KiUWFBTldT7D-Gk4UjtZfJwNxrGvUo27F-dX52me2v0oU6Z0cHl3cEqWUbQX1HwoxFUt7eMfrM7rfm9xfyb3UoQ_bTRu8nRU6PwFHo74a8uzRfvibhIYaO6SVEwirWOfdse-7iwoId3aEU41o2Wf69KUz5MJ-28_hn02BY27H0wM5k6Ckvk97EBE9anxG0V9oV8_4AFBLcTqz99LS8yRuqu07a-WcWBNsNW38OM50uQ-B3Om-4lg&__tn__=EEHH-R"
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
                              this.showDrawer();
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
                  )}
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
          {false ? (
            <FacebookProvider appId="418837532009114" className="iframe">
              <EmbeddedPost
                href="https://www.facebook.com/BestofGameofThrones/photos/a.652975884758197/2124405004281937/?type=3&eid=ARDip30nYiI3Nzp_jUqPggK94tOb1TIQNBIitYuBjSJXVjfJOhDsNvqdeAwrniUJ1R599KI1OpDxHgMR&__xts__%5B0%5D=68.ARBNvhEHUfWjmJKFYOzvLgyJ7NEMSIRhPTB77Y68htVYjR7keChuL6TkzWTNwzUkBD5NlSO1gyKwTXmGAbaCi13pa2euyrzLqIO_W8KiUWFBTldT7D-Gk4UjtZfJwNxrGvUo27F-dX52me2v0oU6Z0cHl3cEqWUbQX1HwoxFUt7eMfrM7rfm9xfyb3UoQ_bTRu8nRU6PwFHo74a8uzRfvibhIYaO6SVEwirWOfdse-7iwoId3aEU41o2Wf69KUz5MJ-28_hn02BY27H0wM5k6Ckvk97EBE9anxG0V9oV8_4AFBLcTqz99LS8yRuqu07a-WcWBNsNW38OM50uQ-B3Om-4lg&__tn__=EEHH-R"
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
                "https://www.youtube.com/watch?v=pvuN_WvF1to"
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
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select a location"
                    optionFilterProp="children"
                    onChange={this.handleLocChange}
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="General">General</Option>
                    <Option value="Addis Ababa">Addis Ababa</Option>
                    <Option value="Adama">Adama</Option>
                    <Option value="Hawassa">Hawassa </Option>
                    <Option value="Bahirdar">Bahirdar</Option>
                    <Option value="Harar">Harar </Option>
                    <Option value="Mekelle">Mekelle</Option>
                    <Option value="Jimma">Jimma</Option>
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
            <Button onClick={this.submitLocation} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Reports;
