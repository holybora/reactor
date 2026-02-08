import React from 'react';
import { CompCard } from '@/components/CompCard';
import { buttonComparisons, buttonComparisonGroup } from '@/data/sampleComparisons';
import styles from './HomePage.module.css';

/**
 * HomePage displays the main comparison view
 * Shows multiple LLM-generated button implementations side by side
 */
export function HomePage() {
  const handleButtonClick = (provider: string) => {
    alert(`${provider} button clicked!`);
  };

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Reactor</h1>
        <p className={styles.subtitle}>
          Compare LLM-generated React components side-by-side
        </p>
        <div className={styles.description}>
          <p>
            <strong>{buttonComparisonGroup.componentName} Component Comparison</strong>
          </p>
          <p>{buttonComparisonGroup.description}</p>
        </div>
      </header>

      {/* Comparison Cards Grid */}
      <div className={styles.grid}>
        {buttonComparisons.map((comparison) => {
          // Create a live button component based on the LLM's code approach
          let ButtonComponent;

          if (comparison.llmProvider === 'GPT-4') {
            // GPT-4 style: inline styles with event handlers
            ButtonComponent = (
              <button
                onClick={() => handleButtonClick(comparison.llmProvider)}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#ffffff',
                  backgroundColor: '#2563eb',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1d4ed8';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }}
              >
                Click Me
              </button>
            );
          } else if (comparison.llmProvider === 'Claude') {
            // Claude style: separate style object with event handlers
            const buttonStyle = {
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#0ea5e9',
              border: '2px solid transparent',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, border-color 0.3s',
              outline: 'none',
            };

            const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = '#0284c7';
              e.currentTarget.style.borderColor = '#0369a1';
            };

            const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = '#0ea5e9';
              e.currentTarget.style.borderColor = 'transparent';
            };

            ButtonComponent = (
              <button
                style={buttonStyle}
                onClick={() => handleButtonClick(comparison.llmProvider)}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                aria-label="Primary action button"
              >
                Click Me
              </button>
            );
          } else {
            // Gemini style: state-based hover with React hooks simulation
            const GeminiButton = () => {
              const [isHovered, setIsHovered] = React.useState(false);

              const baseStyle = {
                padding: '11px 22px',
                fontSize: '15px',
                fontWeight: '500',
                color: '#fff',
                backgroundColor: isHovered ? '#7c3aed' : '#8b5cf6',
                border: 'none',
                borderRadius: '7px',
                cursor: 'pointer',
                transition: 'background-color 0.25s ease-in-out',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              };

              return (
                <button
                  style={baseStyle}
                  onClick={() => handleButtonClick(comparison.llmProvider)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  role="button"
                  tabIndex={0}
                >
                  Click Me
                </button>
              );
            };

            ButtonComponent = <GeminiButton />;
          }

          return (
            <CompCard
              key={comparison.id}
              title={comparison.title}
              prompt={comparison.prompt}
              sourceCode={comparison.sourceCode}
              tokens={comparison.tokens}
              llmProvider={comparison.llmProvider}
            >
              {ButtonComponent}
            </CompCard>
          );
        })}
      </div>
    </div>
  );
}
