# Question Bank Enhancement Proposal

## Current State Analysis

### Existing Question Inventory
- **Accounting**: 41 questions
- **Math**: 40 questions  
- **Physics**: 40 questions
- **General Knowledge**: 40 questions
- **Total**: 161 questions

### Current Implementation
- Questions are hardcoded in separate JS files
- Game randomly selects 10 questions per session
- No question tracking (same questions can repeat across sessions)
- No difficulty levels
- No AI generation capability

---

## Proposed Solutions

### Option 1: Expanded Static Question Bank (Quick Win)
**Timeline**: 1-2 days  
**Complexity**: Low  
**Cost**: Free

#### Implementation
1. Expand each subject to 100-200 questions
2. Add difficulty levels (Easy, Medium, Hard)
3. Implement session tracking to avoid repetition
4. Add question metadata (topic, difficulty, last shown date)

#### Pros
- ✅ No external dependencies
- ✅ Fast, reliable performance
- ✅ Works offline
- ✅ No API costs
- ✅ Predictable quality

#### Cons
- ❌ Manual question creation required
- ❌ Limited scalability
- ❌ Requires periodic updates

#### Data Structure
```javascript
{
  id: "acc_001",
  subject: "accounting",
  difficulty: "medium",
  topic: "Double Entry System",
  question: "What is Double Entry System?",
  options: ["...", "...", "...", "..."],
  correct: 0,
  explanation: "Every transaction affects two accounts...",
  lastShown: null,
  timesShown: 0
}
```

---

### Option 2: AI-Powered Question Generation (Advanced)
**Timeline**: 3-5 days  
**Complexity**: Medium-High  
**Cost**: ~$5-20/month (depending on usage)

#### Implementation Approaches

##### A. OpenAI GPT-4 Integration
- Use GPT-4 to generate questions based on templates
- Validate difficulty and format
- Cache generated questions in local database

##### B. Local LLM (Ollama)
- Run Llama 3 or similar locally
- No API costs
- Slower generation but free

##### C. Hybrid Approach (Recommended)
- Start with expanded static bank (200+ questions)
- Generate new questions on-demand when pool is exhausted
- Cache AI-generated questions for reuse
- Human review for quality assurance

#### Pros
- ✅ Infinite question variety
- ✅ Can match difficulty dynamically
- ✅ Can generate topic-specific questions
- ✅ Reduces manual work

#### Cons
- ❌ Requires API key management
- ❌ Potential costs
- ❌ Quality control needed
- ❌ Requires internet (unless local LLM)
- ❌ Latency considerations

---

## Recommended Implementation Plan

### Phase 1: Enhanced Static Bank (Week 1)
**Priority: HIGH - Immediate Impact**

1. **Expand Question Database**
   - Add 60 more questions per subject (total 100 each)
   - Source from educational websites, textbooks
   - Add difficulty levels and topics

2. **Implement Smart Selection**
   - Track question history in localStorage
   - Avoid showing same questions within 50 questions
   - Balance difficulty distribution

3. **Add Question Metadata**
   - Difficulty levels
   - Topic tags
   - Explanations for answers

**Deliverables:**
- 400 total questions (100 per subject)
- Smart question rotation
- Better learning experience

---

### Phase 2: AI Question Generator (Week 2-3)
**Priority: MEDIUM - Future Scalability**

1. **Setup AI Integration**
   - Choose provider (OpenAI recommended)
   - Create question generation prompts
   - Implement validation logic

2. **Build Question Cache System**
   - Store AI-generated questions in IndexedDB
   - Implement quality scoring
   - Add admin review interface

3. **Fallback Strategy**
   - Always use static questions first
   - Generate AI questions only when needed
   - Cache successful generations

**Deliverables:**
- AI question generation API
- Local caching system
- Quality control dashboard

---

## Technical Implementation Details

### 1. Enhanced Question Structure

```typescript
interface Question {
  id: string;
  subject: 'accounting' | 'math' | 'physics' | 'gk';
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
  source: 'static' | 'ai-generated';
  metadata: {
    createdAt: string;
    timesShown: number;
    lastShown: string | null;
    successRate?: number;
  };
}
```

### 2. Smart Question Selection Algorithm

```typescript
function selectQuestions(
  subject: string,
  count: number,
  difficulty?: string
): Question[] {
  // 1. Get all questions for subject
  // 2. Filter by difficulty if specified
  // 3. Exclude recently shown questions
  // 4. Prioritize never-shown questions
  // 5. Shuffle and select
  // 6. Update metadata
}
```

### 3. AI Question Generator (Optional)

```typescript
async function generateQuestion(
  subject: string,
  difficulty: string,
  template: Question
): Promise<Question> {
  const prompt = `
    Generate a ${difficulty} ${subject} question similar to this template:
    Question: ${template.question}
    Options: ${template.options.join(', ')}
    
    Requirements:
    - Same difficulty level
    - Same format (4 options)
    - Educational and accurate
    - Clear and unambiguous
  `;
  
  // Call AI API
  // Validate response
  // Return formatted question
}
```

---

## Cost-Benefit Analysis

### Option 1: Static Bank Expansion
- **Development Time**: 8-16 hours
- **Ongoing Cost**: $0
- **Maintenance**: Low (add questions periodically)
- **User Experience**: Good (fresh questions for ~40 sessions)

### Option 2: AI Generation
- **Development Time**: 24-40 hours
- **Ongoing Cost**: $5-20/month
- **Maintenance**: Medium (monitor quality)
- **User Experience**: Excellent (unlimited variety)

### Hybrid Approach (Recommended)
- **Development Time**: 12-24 hours (Phase 1 only)
- **Ongoing Cost**: $0 initially, optional AI later
- **Maintenance**: Low-Medium
- **User Experience**: Very Good → Excellent

---

## Data Sources for Question Expansion

### Free Resources
1. **Khan Academy** - Math, Physics concepts
2. **OpenStax** - Free textbooks
3. **Quizlet** - Public study sets
4. **Wikipedia** - General Knowledge
5. **Accounting Coach** - Accounting principles

### Paid Resources (Optional)
1. **Question banks from educational publishers**
2. **Crowdsourcing from teachers**
3. **Professional question writers**

---

## Next Steps

### Immediate Actions (Choose One)

#### Path A: Quick Win (Recommended for MVP)
1. I'll expand the question bank to 100 questions per subject
2. Implement smart question rotation
3. Add difficulty levels
4. **Timeline**: Can complete today

#### Path B: AI-First Approach
1. Set up OpenAI API integration
2. Create question generation system
3. Implement caching and validation
4. **Timeline**: 3-5 days

#### Path C: Hybrid Approach
1. Start with Path A (immediate value)
2. Add AI generation in Phase 2
3. **Timeline**: Phase 1 today, Phase 2 next week

---

## Questions for You

1. **Budget**: Do you have budget for AI API costs (~$10-20/month)?
2. **Timeline**: Do you need this immediately or can we do phased approach?
3. **Quality vs Quantity**: Prefer 100 high-quality curated questions or 1000+ AI-generated questions?
4. **Offline Support**: Must the app work offline?
5. **Content Creation**: Can you help source/review questions or fully automated?

---

## My Recommendation

**Start with Phase 1 (Enhanced Static Bank)**

**Why?**
- ✅ Immediate impact (can finish today)
- ✅ Zero ongoing costs
- ✅ Works offline
- ✅ Proven quality
- ✅ Easy to maintain
- ✅ Can add AI later if needed

**What I'll Build:**
1. Expand to 100 questions per subject (400 total)
2. Add difficulty levels (Easy/Medium/Hard)
3. Smart rotation to avoid repetition
4. Question metadata and tracking
5. Better user experience with varied questions

This gives you 10x more questions immediately, with the option to add AI generation later if you need even more variety.

**Ready to proceed?** Let me know which path you prefer!
