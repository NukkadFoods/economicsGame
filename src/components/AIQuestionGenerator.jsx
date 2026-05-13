import React, { useState, useEffect } from 'react';
import { enhancedQuestionService } from '../services/enhancedQuestionService';
import '../styles/ai-generator.css';

const AIQuestionGenerator = () => {
  const [subject, setSubject] = useState('accounting');
  const [difficulty, setDifficulty] = useState('medium');
  const [count, setCount] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState(null);
  const [isAIAvailable, setIsAIAvailable] = useState(false);

  useEffect(() => {
    // Check if AI is available
    setIsAIAvailable(enhancedQuestionService.isAIAvailable());
    
    // Load stats
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const statsData = await enhancedQuestionService.getStats();
      setStats(statsData);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleGenerate = async () => {
    if (!isAIAvailable) {
      alert('AI generation not available. Please configure GROQ API key in .env file:\nREACT_APP_GROQ_API_KEY=your_key_here');
      return;
    }

    setIsGenerating(true);
    setResult(null);

    try {
      const generationResult = await enhancedQuestionService.generateAndStoreQuestions(
        subject,
        difficulty,
        count
      );

      setResult(generationResult);
      await loadStats(); // Refresh stats
    } catch (error) {
      console.error('Error generating questions:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClearAI = async () => {
    if (!window.confirm('Are you sure you want to delete all AI-generated questions?')) {
      return;
    }

    try {
      await enhancedQuestionService.clearAIQuestions();
      await loadStats();
      setResult(null);
      alert('All AI-generated questions cleared!');
    } catch (error) {
      console.error('Error clearing questions:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="ai-generator-container">
      <div className="ai-generator-card">
        <h2>🤖 AI Question Generator</h2>
        
        {!isAIAvailable && (
          <div className="warning-banner">
            ⚠️ AI generation not configured. Add GROQ API key to .env file.
          </div>
        )}

        <div className="generator-form">
          <div className="form-group">
            <label>Subject:</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="accounting">Accounting</option>
              <option value="math">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="gk">General Knowledge</option>
            </select>
          </div>

          <div className="form-group">
            <label>Difficulty:</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Questions:</label>
            <input
              type="number"
              min="1"
              max="20"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            />
          </div>

          <div className="button-group">
            <button
              className="generate-btn"
              onClick={handleGenerate}
              disabled={isGenerating || !isAIAvailable}
            >
              {isGenerating ? '⏳ Generating...' : '✨ Generate Questions'}
            </button>

            <button
              className="clear-btn"
              onClick={handleClearAI}
              disabled={isGenerating}
            >
              🗑️ Clear AI Questions
            </button>
          </div>
        </div>

        {result && (
          <div className="result-box">
            <h3>Generation Result</h3>
            <p>✅ Successfully generated: <strong>{result.success}</strong> questions</p>
            {result.failed > 0 && (
              <p>❌ Failed: <strong>{result.failed}</strong> questions</p>
            )}
            
            {result.questions.length > 0 && (
              <div className="preview-questions">
                <h4>Preview:</h4>
                {result.questions.slice(0, 2).map((q, idx) => (
                  <div key={idx} className="preview-question">
                    <p><strong>Q:</strong> {q.question}</p>
                    <ul>
                      {q.options.map((opt, i) => (
                        <li key={i} className={i === q.correct ? 'correct' : ''}>
                          {opt} {i === q.correct && '✓'}
                        </li>
                      ))}
                    </ul>
                    <p className="explanation"><em>{q.explanation}</em></p>
                  </div>
                ))}
                {result.questions.length > 2 && (
                  <p>... and {result.questions.length - 2} more questions</p>
                )}
              </div>
            )}
          </div>
        )}

        {stats && (
          <div className="stats-box">
            <h3>Question Bank Statistics</h3>
            <table className="stats-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Static</th>
                  <th>AI Generated</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Accounting</td>
                  <td>{stats.static.accounting}</td>
                  <td>{stats.ai.accounting}</td>
                  <td><strong>{stats.total.accounting}</strong></td>
                </tr>
                <tr>
                  <td>Mathematics</td>
                  <td>{stats.static.math}</td>
                  <td>{stats.ai.math}</td>
                  <td><strong>{stats.total.math}</strong></td>
                </tr>
                <tr>
                  <td>Physics</td>
                  <td>{stats.static.physics}</td>
                  <td>{stats.ai.physics}</td>
                  <td><strong>{stats.total.physics}</strong></td>
                </tr>
                <tr>
                  <td>General Knowledge</td>
                  <td>{stats.static.gk}</td>
                  <td>{stats.ai.gk}</td>
                  <td><strong>{stats.total.gk}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIQuestionGenerator;
