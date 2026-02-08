import type { ReactNode } from 'react';
import styles from './CompCard.module.css';

interface CompCardProps {
  /** Title of the comparison (e.g., "GPT-4 Button") */
  title: string;
  /** The prompt used to generate this component */
  prompt: string;
  /** The generated source code */
  sourceCode: string;
  /** Number of tokens used for generation */
  tokens: number;
  /** LLM provider name (e.g., "GPT-4", "Claude", "Gemini") */
  llmProvider: string;
  /** The rendered result component */
  children: ReactNode;
}

/**
 * CompCard displays a comparison of an LLM-generated component
 * Shows the prompt, rendered result, collapsible source code, and token count
 */
export function CompCard({
  title,
  prompt,
  sourceCode,
  tokens,
  llmProvider,
  children,
}: CompCardProps) {
  return (
    <div className={styles.card}>
      {/* Title Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.provider}>{llmProvider}</span>
      </div>

      {/* Prompt Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Prompt</h3>
        <p className={styles.prompt}>{prompt}</p>
      </div>

      {/* Rendered Result Area */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Rendered Result</h3>
        <div className={styles.result}>{children}</div>
      </div>

      {/* Collapsible Source Code Section */}
      <details className={styles.details}>
        <summary className={styles.summary}>View Source Code</summary>
        <pre className={styles.pre}>
          <code className={styles.code}>{sourceCode}</code>
        </pre>
      </details>

      {/* Token Count Footer */}
      <div className={styles.footer}>
        <span className={styles.tokenCount}>Tokens: {tokens.toLocaleString()}</span>
      </div>
    </div>
  );
}
