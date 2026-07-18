"use client";

import { Typography, Card, Tag, Button, theme } from "antd";
import { ArrowLeftOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Title, Paragraph } = Typography;

type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
};

export default function ProjectDetailContent({
  locale,
  project,
  backLabel,
}: {
  locale: string;
  project: Project;
  backLabel: string;
}) {
  const { token } = theme.useToken();
  const router = useRouter();

  return (
    <div
      style={{
        flex: 1,
        padding: `${token.paddingXL}px ${token.paddingLG}px`,
        maxWidth: 880,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => router.push(`/${locale}/projects`)}
        style={{ padding: 0, marginBottom: token.marginLG }}
      >
        {backLabel}
      </Button>
      <Card>
        <div style={{ textAlign: "center", marginBottom: token.marginLG }}>
          <FolderOpenOutlined
            style={{ fontSize: 48, color: token.colorPrimary }}
          />
        </div>
        <Title level={2} style={{ textAlign: "center" }}>
          {project.title}
        </Title>
        <div style={{ textAlign: "center", marginBottom: token.marginLG }}>
          {project.tags.map((tag) => (
            <Tag key={tag} color={token.colorPrimary}>
              {tag}
            </Tag>
          ))}
        </div>
        <Paragraph
          style={{
            fontSize: token.fontSizeLG,
            lineHeight: 1.8,
            whiteSpace: "pre-line",
          }}
        >
          {project.longDescription}
        </Paragraph>
      </Card>
    </div>
  );
}
