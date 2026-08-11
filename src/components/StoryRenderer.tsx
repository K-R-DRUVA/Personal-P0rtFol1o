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
        width: "100%",
        maxWidth: "820px",
        margin: "0 auto",
        padding: "70px 24px 120px",
        fontFamily: "inherit",
      }}
    >
      {/* Story title */}
      <header
        style={{
          marginBottom: "70px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            margin: 0,
          }}
        >
          {title}
        </h1>
      </header>

      {/* Story */}
      <article>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  marginTop: "5rem",
                  marginBottom: "1.25rem",
                }}
              >
                {children}
              </h1>
            ),

            h2: ({ children }) => (
              <h2
                style={{
                  fontSize: "1.7rem",
                  lineHeight: 1.2,
                  fontWeight: 650,
                  marginTop: "4rem",
                  marginBottom: "1rem",
                }}
              >
                {children}
              </h2>
            ),

            h3: ({ children }) => (
              <h3
                style={{
                  fontSize: "1.35rem",
                  lineHeight: 1.3,
                  fontWeight: 600,
                  marginTop: "3rem",
                  marginBottom: "0.75rem",
                }}
              >
                {children}
              </h3>
            ),

            p: ({ children }) => (
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  marginTop: 0,
                  marginBottom: "0.85rem",
                  color: "inherit",
                }}
              >
                {children}
              </p>
            ),

            strong: ({ children }) => (
              <strong
                style={{
                  fontWeight: 650,
                }}
              >
                {children}
              </strong>
            ),

            em: ({ children }) => (
              <em>{children}</em>
            ),

            blockquote: ({ children }) => (
              <blockquote
                style={{
                  margin: "3rem 0",
                  padding: "1.5rem 1.75rem",
                  borderLeft: "4px solid currentColor",
                  fontSize: "1.35rem",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                  opacity: 0.8,
                }}
              >
                {children}
              </blockquote>
            ),

            img: ({ src, alt }) => (
              <figure
                style={{
                  margin: "3rem 0",
                }}
              >
                <img
                  src={src}
                  alt={alt || ""}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />

                {alt && (
                  <figcaption
                    style={{
                      marginTop: "0.75rem",
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      opacity: 0.6,
                    }}
                  >
                    {alt}
                  </figcaption>
                )}
              </figure>
            ),

            hr: () => (
              <hr
                style={{
                  border: 0,
                  borderTop: "1px solid currentColor",
                  opacity: 0.15,
                  margin: "4rem 0",
                }}
              />
            ),

            ul: ({ children }) => (
              <ul
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1.5rem",
                  paddingLeft: "1.5rem",
                  lineHeight: 1.7,
                }}
              >
                {children}
              </ul>
            ),

            ol: ({ children }) => (
              <ol
                style={{
                  marginTop: "0.5rem",
                  marginBottom: "1.5rem",
                  paddingLeft: "1.5rem",
                  lineHeight: 1.7,
                }}
              >
                {children}
              </ol>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}