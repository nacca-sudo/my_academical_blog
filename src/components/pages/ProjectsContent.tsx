"use client";

import { Typography, Card, Tag, Row, Col, theme } from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectsContent({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: ProjectItem[];
}) {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        flex: 1,
        padding: `${token.paddingXL}px ${token.paddingLG}px`,
        maxWidth: 960,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Card styles={{ body: { padding: token.paddingLG } }}>
        <div style={{ textAlign: "center", marginBottom: token.marginLG }}>
          <FolderOpenOutlined
            style={{ fontSize: 48, color: token.colorPrimary }}
          />
        </div>
        <Title level={2} style={{ textAlign: "center" }}>
          {title}
        </Title>
        <Paragraph
          type="secondary"
          style={{ fontSize: token.fontSizeLG, textAlign: "center" }}
        >
          {description}
        </Paragraph>
      </Card>
      <Row gutter={[token.paddingLG, token.paddingLG]} style={{ marginTop: token.paddingLG }}>
        {items.map((item, i) => (
          <Col xs={24} md={12} key={i}>
            <Card
              title={item.title}
              styles={{ body: { padding: token.paddingMD } }}
              hoverable
            >
              <Paragraph>{item.description}</Paragraph>
              <div>
                {item.tags.map((tag) => (
                  <Tag key={tag} color={token.colorPrimary}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
