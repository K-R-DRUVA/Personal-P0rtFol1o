import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function StoryRenderer({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "auto",
        padding: "60px 20px",
      }}
    >
      <h1>{title}</h1>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </main>
  );
}