import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  content?: string | null;
}

export default function Markdown({ content }: MarkdownProps) {
  if (!content) return null;

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
