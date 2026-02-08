/**
 * Represents a single LLM comparison result for a component
 */
export interface LLMComparison {
  /** Unique identifier for this comparison */
  id: string;
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
}

/**
 * Represents a group of comparisons for a single component type
 */
export interface ComparisonGroup {
  /** Unique identifier for this comparison group */
  id: string;
  /** Name of the component being compared (e.g., "Button", "Modal") */
  componentName: string;
  /** Description of the component and comparison purpose */
  description: string;
  /** Array of LLM comparison results */
  comparisons: LLMComparison[];
}
