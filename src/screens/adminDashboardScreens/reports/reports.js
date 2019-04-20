import React, { Component } from "react";
import Iframe from "react-iframe";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;

class Reports extends Component {
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
  render() {
    return (
      <div>
        <Card
          style={{ width: 500 }}
          cover={
            false ? (
              <Iframe
                url={`https://www.youtube.com/embed/${this.getYoutube(
                  "https://www.youtube.com/watch?v=pvuN_WvF1to"
                )}`}
                width="500px"
                height="500px"
                id="myId"
                display="initial"
                position="relative"
              />
            ) : (
              <FacebookProvider appId="418837532009114" className="iframe">
                <EmbeddedPost
                  href="https://www.facebook.com/BestofGameofThrones/photos/a.652975884758197/2124405004281937/?type=3&eid=ARDip30nYiI3Nzp_jUqPggK94tOb1TIQNBIitYuBjSJXVjfJOhDsNvqdeAwrniUJ1R599KI1OpDxHgMR&__xts__%5B0%5D=68.ARBNvhEHUfWjmJKFYOzvLgyJ7NEMSIRhPTB77Y68htVYjR7keChuL6TkzWTNwzUkBD5NlSO1gyKwTXmGAbaCi13pa2euyrzLqIO_W8KiUWFBTldT7D-Gk4UjtZfJwNxrGvUo27F-dX52me2v0oU6Z0cHl3cEqWUbQX1HwoxFUt7eMfrM7rfm9xfyb3UoQ_bTRu8nRU6PwFHo74a8uzRfvibhIYaO6SVEwirWOfdse-7iwoId3aEU41o2Wf69KUz5MJ-28_hn02BY27H0wM5k6Ckvk97EBE9anxG0V9oV8_4AFBLcTqz99LS8yRuqu07a-WcWBNsNW38OM50uQ-B3Om-4lg&__tn__=EEHH-R"
                  width="500"
                />
              </FacebookProvider>
            )
          }
          actions={[
            <Icon
              type="plus-circle"
              style={{ fontWeight: 500, fontSize: 25, color: "#81a3d3" }}
            />,
            <Icon
              type="delete"
              style={{ fontWeight: 500, fontSize: 25, color: "#f00" }}
            />
          ]}
        />
      </div>
    );
  }
}

export default Reports;
