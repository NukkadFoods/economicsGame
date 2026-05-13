# AI Question Generation Setup

## Overview
The app now supports AI-powered question generation using Groq's free API. Questions are stored in IndexedDB and merged with static questions at runtime.

## Setup Instructions

### 1. Get Groq API Key (FREE)
1. Visit https://console.groq.com/
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the key

### 2. Configure Environment
1. Create a `.env` file in the project root:
```bash
cp .env.example .env
```

2. Add your Groq API key:
```
REACT_APP_GROQ_API_KEY=gsk_your_actual_key_here
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the App
```bash
npm start
```

## How It Works

### Architecture
```
┌─────────────────┐
│  Static Bank    │  100 questions per subject (hardcoded)
│  (400 total)    │
└────────┬────────┘
         │
         ├─────────► Merged at Runtime
         │
┌────────▼────────┐
│   IndexedDB     │  AI-generated questions (dynamic)
│  (unlimited)    │
└─────────────────┘
```

### Question Flow
1. **Static Questions**: Loaded from `src/data/enhanced/`
2. **AI Questions**: Generated via Groq API → Validated → Stored in IndexedDB
3. **Runtime**: Both sources merged when selecting questions

### Features
- ✅ Generate questions by subject and difficulty
- ✅ Questions stored locally in browser (IndexedDB)
- ✅ Smart validation before storage
- ✅ View statistics (static vs AI questions)
- ✅ Clear AI questions anytime
- ✅ No backend required

## Using AI Generator

### Access the Generator
Add the AI Generator component to your app:

```jsx
import AIQuestionGenerator from './components/AIQuestionGenerator';

// In your router or main component
<Route path="/ai-generator" element={<AIQuestionGenerator />} />
```

### Generate Questions
1. Select subject (Accounting, Math, Physics, GK)
2. Select difficulty (Easy, Medium, Hard)
3. Choose number of questions (1-20)
4. Click "Generate Questions"
5. Questions are automatically validated and stored

### View Statistics
The generator shows:
- Static questions count
- AI-generated questions count
- Total questions per subject

## API Details

### Groq API
- **Endpoint**: `https://api.groq.com/openai/v1/chat/completions`
- **Model**: `llama-3.1-70b-versatile`
- **Cost**: FREE (with rate limits)
- **Rate Limit**: ~30 requests/minute

### Question Format
```json
{
  "id": "math_medium_ai_1234567890_abc123",
  "subject": "math",
  "difficulty": "medium",
  "topic": "Algebra",
  "question": "What is the value of x in 2x + 5 = 15?",
  "options": ["3", "5", "7", "10"],
  "correct": 1,
  "explanation": "Solving: 2x = 10, therefore x = 5",
  "source": "ai-generated",
  "metadata": {
    "createdAt": "2024-01-01T00:00:00.000Z",
    "timesShown": 0,
    "lastShown": null
  }
}
```

## Storage

### IndexedDB Schema
```
Database: EconomicsGameDB
Store: questions
Indexes:
  - by-subject
  - by-difficulty
  - by-subject-difficulty
  - by-source
```

### Data Persistence
- Questions persist across browser sessions
- Stored locally (no server needed)
- Can be cleared anytime
- Export/import functionality available

## Validation

Each AI-generated question is validated for:
- ✅ Question length (10-500 characters)
- ✅ Exactly 4 options
- ✅ No duplicate options
- ✅ Valid correct answer index (0-3)
- ✅ Explanation present (min 10 characters)
- ✅ Proper formatting

Invalid questions are rejected and not stored.

## Troubleshooting

### "AI generation not available"
- Check if `.env` file exists
- Verify `REACT_APP_GROQ_API_KEY` is set
- Restart the development server after adding .env

### "Failed to generate question"
- Check API key is valid
- Check internet connection
- Verify Groq API is not rate-limited
- Check browser console for detailed errors

### Questions not appearing in game
- Ensure questions are successfully generated (check stats)
- Verify subject and difficulty match
- Check browser IndexedDB (DevTools → Application → IndexedDB)

## Development

### Add New Subjects
1. Update `Subject` type in `src/types/question.ts`
2. Add to `enhancedQuestionBank` in `src/data/enhanced/index.ts`
3. Update AI generator UI

### Customize AI Prompts
Edit `buildPrompt()` in `src/services/aiQuestionGenerator.ts`

### Change AI Model
Update model name in `generateQuestion()`:
```typescript
model: 'llama-3.1-70b-versatile' // or other Groq models
```

## Security Notes

⚠️ **Important**: 
- API key is exposed in client-side code
- Only use Groq's free tier for this setup
- For production, move API calls to backend
- Never commit `.env` file to git

## Future Enhancements

Possible improvements:
- [ ] Backend API for secure key storage
- [ ] Question quality scoring
- [ ] User feedback on AI questions
- [ ] Batch generation with progress bar
- [ ] Question editing interface
- [ ] Export/import question sets
- [ ] Multi-language support

## Support

For issues:
1. Check browser console for errors
2. Verify API key is correct
3. Test with small batch (1-2 questions)
4. Check Groq API status: https://status.groq.com/
