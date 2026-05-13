import { Question } from '../../types/question';

export const enhancedAccountingQuestions: Question[] = [
  // EASY QUESTIONS (30 questions)
  {
    id: 'acc_easy_001',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Basic Concepts',
    question: 'What is Double Entry System?',
    options: [
      'Every transaction affects two accounts',
      'Every transaction affects single account',
      'Every transaction affects three accounts',
      'None of the above'
    ],
    correct: 0,
    explanation: 'Double Entry System means every transaction affects at least two accounts - one debit and one credit.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_002',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Financial Statements',
    question: 'What is a Balance Sheet?',
    options: [
      'Statement of income and expenses',
      'Statement of assets and liabilities',
      'Statement of cash flows',
      'Statement of changes in equity'
    ],
    correct: 1,
    explanation: 'A Balance Sheet shows the financial position of a business at a specific point in time, listing assets, liabilities, and equity.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_003',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Assets',
    question: 'Which of these is an Asset?',
    options: ['Sales', 'Purchases', 'Machinery', 'Rent'],
    correct: 2,
    explanation: 'Machinery is a fixed asset owned by the business. Sales and Rent are income/expense items, while Purchases is an expense.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_004',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Accounting Equation',
    question: 'What is the accounting equation?',
    options: [
      'Assets = Liabilities + Owner\'s Equity',
      'Assets = Liabilities - Owner\'s Equity',
      'Assets + Liabilities = Owner\'s Equity',
      'Assets - Liabilities = Owner\'s Equity'
    ],
    correct: 0,
    explanation: 'The fundamental accounting equation is Assets = Liabilities + Owner\'s Equity. This equation must always balance.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_005',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Books of Entry',
    question: 'What is a Journal Entry?',
    options: [
      'Record of daily activities',
      'Record of cash transactions',
      'Record of credit transactions',
      'Record of all financial transactions'
    ],
    correct: 3,
    explanation: 'A Journal Entry is the first record of all financial transactions in chronological order.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_006',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Capital',
    question: 'What is Capital?',
    options: [
      'Money invested in business',
      'Money withdrawn from business',
      'Money spent in business',
      'Money earned from business'
    ],
    correct: 0,
    explanation: 'Capital is the money or assets invested by the owner in the business.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_007',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Revenue',
    question: 'What is Revenue?',
    options: [
      'Money spent in business',
      'Income earned from business',
      'Profit from business',
      'Loss from business'
    ],
    correct: 1,
    explanation: 'Revenue is the income earned by a business from its normal business activities.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_008',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Liabilities',
    question: 'What is a Liability?',
    options: [
      'Something owned by business',
      'Something owed by business',
      'Something earned by business',
      'Something spent by business'
    ],
    correct: 1,
    explanation: 'A liability is an obligation or debt that the business owes to others.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_009',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Documents',
    question: 'What is an Invoice?',
    options: [
      'Receipt for cash payment',
      'Document showing sale of goods',
      'Statement of account',
      'Bank statement'
    ],
    correct: 1,
    explanation: 'An invoice is a commercial document issued by a seller to a buyer showing the sale of goods or services.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_010',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Current Assets',
    question: 'Which of these is a Current Asset?',
    options: ['Land', 'Building', 'Inventory', 'Goodwill'],
    correct: 2,
    explanation: 'Inventory is a current asset as it can be converted to cash within one year.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_011',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Debit and Credit',
    question: 'What is a Debit?',
    options: [
      'Increase in asset',
      'Decrease in asset',
      'Increase in liability',
      'Decrease in expense'
    ],
    correct: 0,
    explanation: 'A debit entry increases assets and expenses, and decreases liabilities and equity.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_012',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Debit and Credit',
    question: 'What is a Credit?',
    options: [
      'Increase in asset',
      'Decrease in asset',
      'Increase in liability',
      'Increase in expense'
    ],
    correct: 2,
    explanation: 'A credit entry increases liabilities, equity, and revenue, and decreases assets and expenses.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_013',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Books',
    question: 'What is a Cash Book?',
    options: [
      'Record of all transactions',
      'Record of cash and bank transactions',
      'Record of credit transactions',
      'Record of purchases'
    ],
    correct: 1,
    explanation: 'A Cash Book records all cash and bank transactions of a business.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_014',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Fixed Assets',
    question: 'What is a Fixed Asset?',
    options: [
      'Asset held for resale',
      'Asset held for long-term use',
      'Asset that can be easily converted to cash',
      'Asset that changes value frequently'
    ],
    correct: 1,
    explanation: 'Fixed assets are long-term tangible assets used in business operations, like buildings and machinery.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_015',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Documents',
    question: 'What is a Voucher?',
    options: [
      'Proof of transaction',
      'Record of sales',
      'Record of purchases',
      'Bank statement'
    ],
    correct: 0,
    explanation: 'A voucher is a document that serves as proof that a transaction has occurred.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_016',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Accounting Standards',
    question: 'What does GAAP stand for?',
    options: [
      'General Accounting and Auditing Principles',
      'Generally Accepted Accounting Principles',
      'General Account Analysis Procedures',
      'Generally Approved Accounting Practices'
    ],
    correct: 1,
    explanation: 'GAAP stands for Generally Accepted Accounting Principles, a set of accounting standards.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_017',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Petty Cash',
    question: 'What is a Petty Cash Book?',
    options: [
      'Record of all cash transactions',
      'Record of small cash payments',
      'Record of all bank transactions',
      'Record of all credit transactions'
    ],
    correct: 1,
    explanation: 'A Petty Cash Book records small, routine cash expenses like office supplies and refreshments.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_018',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Intangible Assets',
    question: 'What is Goodwill?',
    options: [
      'Current Asset',
      'Current Liability',
      'Intangible Asset',
      'Tangible Asset'
    ],
    correct: 2,
    explanation: 'Goodwill is an intangible asset representing the reputation and customer relationships of a business.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_019',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Accounts',
    question: 'Which account has a normal debit balance?',
    options: ['Revenue', 'Liability', 'Asset', 'Owner\'s Equity'],
    correct: 2,
    explanation: 'Asset accounts normally have debit balances, while liabilities, equity, and revenue have credit balances.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_020',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Ledger',
    question: 'What is a Ledger?',
    options: [
      'Book of prime entry',
      'Book of final entry',
      'Book of original entry',
      'Principal book of accounts'
    ],
    correct: 3,
    explanation: 'A Ledger is the principal book where all accounts are maintained and transactions are posted.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_021',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Trial Balance',
    question: 'What is a Trial Balance?',
    options: [
      'List of all accounts with balances',
      'Final accounts statement',
      'Bank statement',
      'Cash book'
    ],
    correct: 0,
    explanation: 'A Trial Balance is a list of all ledger accounts with their debit or credit balances.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_022',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Drawings',
    question: 'What are Drawings in accounting?',
    options: [
      'Money invested by owner',
      'Money withdrawn by owner for personal use',
      'Money earned by business',
      'Money spent on assets'
    ],
    correct: 1,
    explanation: 'Drawings represent money or goods withdrawn by the owner from the business for personal use.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_023',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Expenses',
    question: 'What is an Expense?',
    options: [
      'Money received by business',
      'Money spent to generate revenue',
      'Money invested in business',
      'Money owed to business'
    ],
    correct: 1,
    explanation: 'An expense is the cost incurred by a business in the process of earning revenue.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_024',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Accounts Receivable',
    question: 'What are Accounts Receivable?',
    options: [
      'Money owed by business to suppliers',
      'Money owed to business by customers',
      'Cash in hand',
      'Bank balance'
    ],
    correct: 1,
    explanation: 'Accounts Receivable represents money owed to the business by customers for goods or services sold on credit.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_025',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Accounts Payable',
    question: 'What are Accounts Payable?',
    options: [
      'Money owed to business by customers',
      'Money owed by business to suppliers',
      'Cash payments made',
      'Revenue earned'
    ],
    correct: 1,
    explanation: 'Accounts Payable represents money the business owes to suppliers for goods or services purchased on credit.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_026',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Profit and Loss',
    question: 'What is Net Income?',
    options: [
      'Total Revenue',
      'Total Expenses',
      'Revenue minus Expenses',
      'Assets minus Liabilities'
    ],
    correct: 2,
    explanation: 'Net Income (or Net Profit) is calculated as Total Revenue minus Total Expenses.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_027',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Inventory',
    question: 'What is Inventory?',
    options: [
      'Fixed assets of business',
      'Goods held for sale',
      'Money in bank',
      'Equipment used in business'
    ],
    correct: 1,
    explanation: 'Inventory consists of goods held by a business for the purpose of resale.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_028',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Equity',
    question: 'What is Owner\'s Equity?',
    options: [
      'Money borrowed from bank',
      'Owner\'s investment plus profits minus drawings',
      'Total assets of business',
      'Total liabilities of business'
    ],
    correct: 1,
    explanation: 'Owner\'s Equity represents the owner\'s claim on business assets, calculated as Capital + Profits - Drawings.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_029',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Transactions',
    question: 'What is a Transaction in accounting?',
    options: [
      'Any business activity',
      'Financial event that affects the accounting equation',
      'Daily business operations',
      'Communication with customers'
    ],
    correct: 1,
    explanation: 'A transaction is a financial event that changes the accounting equation (Assets = Liabilities + Equity).',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_easy_030',
    subject: 'accounting',
    difficulty: 'easy',
    topic: 'Financial Year',
    question: 'What is a Fiscal Year?',
    options: [
      'Always January to December',
      'Any 12-month period used for accounting',
      'Only April to March',
      'Six-month accounting period'
    ],
    correct: 1,
    explanation: 'A Fiscal Year is any 12-month period that a company uses for accounting purposes and financial reporting.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  }
];

  // MEDIUM QUESTIONS (40 questions)
  {
    id: 'acc_medium_001',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Working Capital',
    question: 'What is Working Capital?',
    options: [
      'Fixed Assets - Current Liabilities',
      'Current Assets - Current Liabilities',
      'Total Assets - Total Liabilities',
      'Current Assets + Current Liabilities'
    ],
    correct: 1,
    explanation: 'Working Capital = Current Assets - Current Liabilities. It measures short-term financial health.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_002',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Depreciation',
    question: 'What is Depreciation?',
    options: [
      'Increase in asset value',
      'Decrease in asset value over time',
      'Increase in liability',
      'Decrease in liability'
    ],
    correct: 1,
    explanation: 'Depreciation is the systematic allocation of the cost of a tangible asset over its useful life.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_003',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Documents',
    question: 'What is a Credit Note?',
    options: [
      'Document for goods returned by customer',
      'Document for cash received',
      'Document for goods purchased',
      'Document for goods sold'
    ],
    correct: 0,
    explanation: 'A Credit Note is issued when goods are returned by a customer or to correct an overcharge.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_004',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Documents',
    question: 'What is a Debit Note?',
    options: [
      'Document for goods returned to supplier',
      'Document for cash paid',
      'Document for goods purchased',
      'Document for goods sold'
    ],
    correct: 0,
    explanation: 'A Debit Note is issued when goods are returned to a supplier or to correct an undercharge.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_005',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Profit',
    question: 'What is Net Profit?',
    options: [
      'Gross Profit - Expenses',
      'Sales - Purchases',
      'Income - Expenditure',
      'Assets - Liabilities'
    ],
    correct: 0,
    explanation: 'Net Profit = Gross Profit - Operating Expenses. It represents the final profit after all deductions.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_006',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Profit',
    question: 'What is Gross Profit?',
    options: [
      'Sales - Cost of Goods Sold',
      'Sales - Purchases',
      'Sales - Expenses',
      'Sales - Returns'
    ],
    correct: 0,
    explanation: 'Gross Profit = Net Sales - Cost of Goods Sold. It shows profit before operating expenses.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_007',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Bank Reconciliation',
    question: 'What is a Bank Reconciliation Statement?',
    options: [
      'Statement of bank balance',
      'Statement reconciling cash book and bank statement balances',
      'Statement of cash transactions',
      'Statement of bank transactions'
    ],
    correct: 1,
    explanation: 'Bank Reconciliation Statement matches the cash book balance with the bank statement balance.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_008',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Purchase Order',
    question: 'What is the purpose of a Purchase Order?',
    options: [
      'To record sales',
      'To request goods from supplier',
      'To record cash payments',
      'To record bank transactions'
    ],
    correct: 1,
    explanation: 'A Purchase Order is a commercial document issued by a buyer to a supplier to request goods or services.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_009',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Accounting Basis',
    question: 'What is Accrual Basis of Accounting?',
    options: [
      'Recording transactions when cash is received',
      'Recording transactions when they occur',
      'Recording transactions at year end',
      'Recording transactions in advance'
    ],
    correct: 1,
    explanation: 'Accrual Basis records revenues when earned and expenses when incurred, regardless of cash flow.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_010',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Accounting Principles',
    question: 'What is the Matching Principle?',
    options: [
      'Matching assets with liabilities',
      'Matching revenues with expenses in the same period',
      'Matching debits with credits',
      'Matching cash with bank'
    ],
    correct: 1,
    explanation: 'The Matching Principle requires expenses to be matched with revenues in the period they help generate.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_011',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Cost of Goods Sold',
    question: 'What is Cost of Goods Sold (COGS)?',
    options: [
      'Opening Stock + Purchases - Closing Stock',
      'Opening Stock - Purchases + Closing Stock',
      'Opening Stock + Sales - Closing Stock',
      'Purchases + Sales - Returns'
    ],
    correct: 0,
    explanation: 'COGS = Opening Inventory + Purchases - Closing Inventory. It represents the direct cost of producing goods sold.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_012',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Promissory Note',
    question: 'What is a Promissory Note?',
    options: [
      'Written promise to pay money',
      'Promise to deliver goods',
      'Promise to provide service',
      'Promise to accept goods'
    ],
    correct: 0,
    explanation: 'A Promissory Note is a written promise by one party to pay a specific sum to another party on demand or at a specified date.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_013',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Break-even',
    question: 'What is Break-even Point?',
    options: [
      'Point of maximum profit',
      'Point of maximum loss',
      'Point where total costs equal total revenue',
      'Point of minimum cost'
    ],
    correct: 2,
    explanation: 'Break-even Point is where Total Revenue = Total Costs, resulting in neither profit nor loss.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_014',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Entries',
    question: 'What is a Contra Entry?',
    options: [
      'Entry on same side of account',
      'Entry affecting both cash and bank columns',
      'Entry in different books',
      'Entry cancelling previous entry'
    ],
    correct: 1,
    explanation: 'A Contra Entry involves both cash and bank columns of the cash book, like depositing cash into bank.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_015',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Trading Account',
    question: 'What is a Trading Account?',
    options: [
      'Shows gross profit from trading activities',
      'Shows bank transactions',
      'Shows cash transactions',
      'Shows capital transactions'
    ],
    correct: 0,
    explanation: 'Trading Account shows the gross profit or loss from buying and selling goods.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_016',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Inventory Valuation',
    question: 'What is FIFO?',
    options: [
      'First In First Out',
      'First In Final Out',
      'Final In First Out',
      'Final In Final Out'
    ],
    correct: 0,
    explanation: 'FIFO (First In First Out) assumes that items purchased first are sold first.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_017',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Inventory Valuation',
    question: 'What is LIFO?',
    options: [
      'Last In First Out',
      'Last In Final Out',
      'Late In First Out',
      'Late In Final Out'
    ],
    correct: 0,
    explanation: 'LIFO (Last In First Out) assumes that items purchased last are sold first.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_018',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Amortization',
    question: 'What is Amortization?',
    options: [
      'Depreciation of tangible assets',
      'Depreciation of intangible assets',
      'Increase in asset value',
      'Decrease in liability'
    ],
    correct: 1,
    explanation: 'Amortization is the systematic write-off of intangible assets like patents and copyrights over their useful life.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_019',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'ROI',
    question: 'What is Return on Investment (ROI)?',
    options: [
      'Profit ÷ Investment × 100',
      'Investment ÷ Profit × 100',
      'Profit - Investment',
      'Investment - Profit'
    ],
    correct: 0,
    explanation: 'ROI = (Net Profit ÷ Investment) × 100. It measures the profitability of an investment.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_020',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Suspense Account',
    question: 'What is a Suspense Account?',
    options: [
      'Temporary account for unidentified items',
      'Permanent account for fixed assets',
      'Account for cash transactions',
      'Account for credit transactions'
    ],
    correct: 0,
    explanation: 'A Suspense Account temporarily holds entries when the proper account is uncertain or when trial balance doesn\'t match.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_021',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Bad Debts',
    question: 'What are Bad Debts?',
    options: [
      'Debts that are difficult to collect',
      'Debts that cannot be recovered',
      'Debts with high interest',
      'Long-term debts'
    ],
    correct: 1,
    explanation: 'Bad Debts are amounts owed by customers that are deemed uncollectible and written off as an expense.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_022',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Provisions',
    question: 'What is a Provision in accounting?',
    options: [
      'Money set aside for known liabilities',
      'Money set aside for uncertain liabilities',
      'Money invested in assets',
      'Money withdrawn by owner'
    ],
    correct: 1,
    explanation: 'A Provision is an amount set aside for a probable future liability whose exact amount or timing is uncertain.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_023',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Reserves',
    question: 'What is a Reserve?',
    options: [
      'Liability of the business',
      'Portion of profit retained in business',
      'Money borrowed from bank',
      'Current asset'
    ],
    correct: 1,
    explanation: 'A Reserve is a portion of profit set aside for specific purposes or to strengthen financial position.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_024',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Accounting Concepts',
    question: 'What is the Going Concern Concept?',
    options: [
      'Business will continue operations indefinitely',
      'Business will close soon',
      'Business is profitable',
      'Business has no debts'
    ],
    correct: 0,
    explanation: 'Going Concern assumes the business will continue operating for the foreseeable future.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_025',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Accounting Concepts',
    question: 'What is the Consistency Principle?',
    options: [
      'Using same accounting methods year after year',
      'Keeping accurate records',
      'Matching revenues with expenses',
      'Recording transactions promptly'
    ],
    correct: 0,
    explanation: 'Consistency Principle requires using the same accounting methods and procedures from period to period.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_026',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Ratios',
    question: 'What is the Current Ratio?',
    options: [
      'Current Assets ÷ Current Liabilities',
      'Current Liabilities ÷ Current Assets',
      'Total Assets ÷ Total Liabilities',
      'Net Profit ÷ Sales'
    ],
    correct: 0,
    explanation: 'Current Ratio = Current Assets ÷ Current Liabilities. It measures short-term liquidity.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_027',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Ratios',
    question: 'What is the Quick Ratio (Acid Test)?',
    options: [
      '(Current Assets - Inventory) ÷ Current Liabilities',
      'Current Assets ÷ Current Liabilities',
      'Cash ÷ Current Liabilities',
      'Current Assets ÷ Total Liabilities'
    ],
    correct: 0,
    explanation: 'Quick Ratio = (Current Assets - Inventory) ÷ Current Liabilities. It measures immediate liquidity.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_028',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Depreciation Methods',
    question: 'What is Straight Line Depreciation?',
    options: [
      'Equal depreciation each year',
      'Decreasing depreciation each year',
      'Increasing depreciation each year',
      'Random depreciation amounts'
    ],
    correct: 0,
    explanation: 'Straight Line Method charges equal depreciation expense each year over the asset\'s useful life.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_029',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Depreciation Methods',
    question: 'What is Reducing Balance Method?',
    options: [
      'Equal depreciation each year',
      'Depreciation on reducing book value',
      'No depreciation in first year',
      'Depreciation only in last year'
    ],
    correct: 1,
    explanation: 'Reducing Balance Method applies a fixed percentage to the reducing book value each year.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_030',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Cash Flow',
    question: 'What is Cash Flow Statement?',
    options: [
      'Statement of profit and loss',
      'Statement of cash inflows and outflows',
      'Statement of assets and liabilities',
      'Statement of owner\'s equity'
    ],
    correct: 1,
    explanation: 'Cash Flow Statement shows the movement of cash in and out of the business during a period.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_031',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Accounting Concepts',
    question: 'What is the Materiality Concept?',
    options: [
      'All transactions must be recorded',
      'Only significant items need detailed treatment',
      'All assets are material',
      'Only cash transactions matter'
    ],
    correct: 1,
    explanation: 'Materiality Concept states that only items significant enough to affect decisions need special attention.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_032',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Accounting Concepts',
    question: 'What is the Prudence Concept?',
    options: [
      'Anticipate profits, ignore losses',
      'Anticipate losses, don\'t anticipate profits',
      'Record everything at market value',
      'Always be optimistic'
    ],
    correct: 1,
    explanation: 'Prudence (Conservatism) requires anticipating losses but not profits, ensuring assets/income aren\'t overstated.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_033',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Prepaid Expenses',
    question: 'What are Prepaid Expenses?',
    options: [
      'Expenses paid in advance',
      'Expenses not yet paid',
      'Expenses for previous year',
      'Expenses that are overdue'
    ],
    correct: 0,
    explanation: 'Prepaid Expenses are payments made in advance for goods or services to be received in future periods.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_034',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Accrued Expenses',
    question: 'What are Accrued Expenses?',
    options: [
      'Expenses paid in advance',
      'Expenses incurred but not yet paid',
      'Expenses from previous year',
      'Expenses that are cancelled'
    ],
    correct: 1,
    explanation: 'Accrued Expenses are expenses that have been incurred but not yet paid or recorded.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_035',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Ratios',
    question: 'What is Debt-to-Equity Ratio?',
    options: [
      'Total Debt ÷ Total Equity',
      'Total Equity ÷ Total Debt',
      'Current Debt ÷ Current Equity',
      'Long-term Debt ÷ Current Equity'
    ],
    correct: 0,
    explanation: 'Debt-to-Equity Ratio = Total Debt ÷ Total Equity. It measures financial leverage.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_036',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Profit Margin',
    question: 'What is Gross Profit Margin?',
    options: [
      '(Gross Profit ÷ Sales) × 100',
      '(Net Profit ÷ Sales) × 100',
      '(Sales ÷ Gross Profit) × 100',
      '(Gross Profit ÷ Cost) × 100'
    ],
    correct: 0,
    explanation: 'Gross Profit Margin = (Gross Profit ÷ Net Sales) × 100. It shows profitability before operating expenses.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_037',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Profit Margin',
    question: 'What is Net Profit Margin?',
    options: [
      '(Gross Profit ÷ Sales) × 100',
      '(Net Profit ÷ Sales) × 100',
      '(Sales ÷ Net Profit) × 100',
      '(Net Profit ÷ Assets) × 100'
    ],
    correct: 1,
    explanation: 'Net Profit Margin = (Net Profit ÷ Net Sales) × 100. It shows overall profitability after all expenses.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_038',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Turnover Ratios',
    question: 'What is Inventory Turnover Ratio?',
    options: [
      'Cost of Goods Sold ÷ Average Inventory',
      'Sales ÷ Average Inventory',
      'Average Inventory ÷ Sales',
      'Purchases ÷ Average Inventory'
    ],
    correct: 0,
    explanation: 'Inventory Turnover = Cost of Goods Sold ÷ Average Inventory. It measures how quickly inventory is sold.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_039',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Accounting Basis',
    question: 'What is Cash Basis Accounting?',
    options: [
      'Recording when transactions occur',
      'Recording when cash is received or paid',
      'Recording at end of year',
      'Recording based on invoices'
    ],
    correct: 1,
    explanation: 'Cash Basis records revenues when cash is received and expenses when cash is paid.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_medium_040',
    subject: 'accounting',
    difficulty: 'medium',
    topic: 'Adjusting Entries',
    question: 'What are Adjusting Entries?',
    options: [
      'Entries to correct errors',
      'Entries made at period end to update accounts',
      'Entries for cash transactions',
      'Entries to close accounts'
    ],
    correct: 1,
    explanation: 'Adjusting Entries are made at the end of an accounting period to properly match revenues and expenses.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  }
,
  // HARD QUESTIONS (30 questions)
  {
    id: 'acc_hard_001',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Consolidated Statements',
    question: 'What is a Consolidated Financial Statement?',
    options: [
      'Combined statements of parent and subsidiary companies',
      'Statement of a single company',
      'Statement of cash flows only',
      'Statement of changes in equity'
    ],
    correct: 0,
    explanation: 'Consolidated Financial Statements combine the financial statements of a parent company and its subsidiaries.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_002',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Deferred Tax',
    question: 'What is Deferred Tax Liability?',
    options: [
      'Tax paid in advance',
      'Tax payable in future due to temporary differences',
      'Tax that is waived',
      'Tax on foreign income'
    ],
    correct: 1,
    explanation: 'Deferred Tax Liability arises when taxable income is less than accounting income due to temporary differences.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_003',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Impairment',
    question: 'What is Asset Impairment?',
    options: [
      'Normal depreciation of assets',
      'Sudden decrease in asset value below book value',
      'Increase in asset value',
      'Sale of assets'
    ],
    correct: 1,
    explanation: 'Asset Impairment occurs when an asset\'s market value falls below its book value, requiring a write-down.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_004',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Lease Accounting',
    question: 'Under IFRS 16, how are operating leases treated?',
    options: [
      'Off-balance sheet',
      'As rental expense only',
      'Recognized as right-of-use asset and lease liability',
      'Not recorded'
    ],
    correct: 2,
    explanation: 'IFRS 16 requires lessees to recognize most leases on the balance sheet as right-of-use assets and lease liabilities.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_005',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Revenue Recognition',
    question: 'According to IFRS 15, when should revenue be recognized?',
    options: [
      'When cash is received',
      'When invoice is issued',
      'When performance obligation is satisfied',
      'At end of contract'
    ],
    correct: 2,
    explanation: 'IFRS 15 requires revenue recognition when (or as) the entity satisfies a performance obligation.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_006',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Financial Instruments',
    question: 'What is a Derivative in accounting?',
    options: [
      'A type of fixed asset',
      'Financial instrument whose value depends on underlying asset',
      'A type of revenue',
      'A depreciation method'
    ],
    correct: 1,
    explanation: 'A Derivative is a financial instrument whose value is derived from an underlying asset, index, or rate.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_007',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Equity Method',
    question: 'When is the Equity Method of accounting used?',
    options: [
      'For all investments',
      'For significant influence (20-50% ownership)',
      'For controlling interest (>50%)',
      'For trading securities'
    ],
    correct: 1,
    explanation: 'Equity Method is used when an investor has significant influence, typically 20-50% ownership in an investee.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_008',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Business Combinations',
    question: 'What is Goodwill in a business acquisition?',
    options: [
      'Fair value of net assets acquired',
      'Excess of purchase price over fair value of net assets',
      'Total purchase price',
      'Book value of assets'
    ],
    correct: 1,
    explanation: 'Goodwill = Purchase Price - Fair Value of Net Identifiable Assets. It represents intangible value like brand and customer relationships.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_009',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Foreign Currency',
    question: 'How are foreign currency transactions initially recorded?',
    options: [
      'At year-end exchange rate',
      'At average exchange rate',
      'At spot rate on transaction date',
      'At forward rate'
    ],
    correct: 2,
    explanation: 'Foreign currency transactions are initially recorded at the spot exchange rate on the transaction date.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_010',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Earnings Per Share',
    question: 'What is Diluted EPS?',
    options: [
      'Net Income ÷ Outstanding Shares',
      'EPS assuming conversion of all dilutive securities',
      'EPS before extraordinary items',
      'EPS after dividends'
    ],
    correct: 1,
    explanation: 'Diluted EPS assumes conversion of all potentially dilutive securities like options and convertible bonds.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_011',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Segment Reporting',
    question: 'What is Segment Reporting?',
    options: [
      'Reporting by geographic region only',
      'Reporting financial information by business segments',
      'Reporting only consolidated data',
      'Reporting by customer type'
    ],
    correct: 1,
    explanation: 'Segment Reporting provides financial information about different business segments or geographic areas.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_012',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Hedge Accounting',
    question: 'What is Hedge Accounting?',
    options: [
      'Accounting for garden maintenance',
      'Matching gains/losses on hedging instruments with hedged items',
      'Accounting for speculative investments',
      'Recording all derivatives at cost'
    ],
    correct: 1,
    explanation: 'Hedge Accounting matches the timing of gains/losses on hedging instruments with the hedged items to reduce volatility.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_013',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Fair Value',
    question: 'What is Fair Value Measurement?',
    options: [
      'Historical cost of asset',
      'Price to sell asset in orderly transaction',
      'Book value of asset',
      'Replacement cost'
    ],
    correct: 1,
    explanation: 'Fair Value is the price that would be received to sell an asset in an orderly transaction between market participants.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_014',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Related Party Transactions',
    question: 'What are Related Party Transactions?',
    options: [
      'Transactions with customers',
      'Transactions between entities with special relationships',
      'All business transactions',
      'Transactions with suppliers'
    ],
    correct: 1,
    explanation: 'Related Party Transactions occur between entities with special relationships like parent-subsidiary or key management.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_015',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Contingent Liabilities',
    question: 'When should a Contingent Liability be recognized?',
    options: [
      'Always',
      'Never',
      'When probable and measurable',
      'Only when paid'
    ],
    correct: 2,
    explanation: 'Contingent Liabilities are recognized when the obligation is probable and the amount can be reliably estimated.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_016',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Stock Options',
    question: 'How are employee stock options typically valued?',
    options: [
      'At exercise price',
      'At market price on grant date',
      'Using option pricing models like Black-Scholes',
      'At zero value'
    ],
    correct: 2,
    explanation: 'Employee stock options are typically valued using option pricing models like Black-Scholes or binomial models.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_017',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Pension Accounting',
    question: 'What is a Defined Benefit Pension Plan?',
    options: [
      'Fixed contribution by employer',
      'Employer promises specific retirement benefit',
      'Employee manages investments',
      'No employer obligation'
    ],
    correct: 1,
    explanation: 'Defined Benefit Plan obligates the employer to provide a specified pension benefit, bearing investment risk.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_018',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Discontinued Operations',
    question: 'How are Discontinued Operations reported?',
    options: [
      'Mixed with continuing operations',
      'Separately in income statement',
      'Only in notes',
      'Not reported'
    ],
    correct: 1,
    explanation: 'Discontinued Operations are reported separately in the income statement, net of tax.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_019',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Comprehensive Income',
    question: 'What is Other Comprehensive Income (OCI)?',
    options: [
      'Same as net income',
      'Revenues and gains not in net income',
      'Operating income only',
      'Cash flows'
    ],
    correct: 1,
    explanation: 'OCI includes revenues, expenses, gains, and losses excluded from net income, like unrealized gains on securities.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_020',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Transfer Pricing',
    question: 'What is Transfer Pricing?',
    options: [
      'Pricing for external customers',
      'Pricing for transactions between related entities',
      'Market pricing only',
      'Cost-based pricing only'
    ],
    correct: 1,
    explanation: 'Transfer Pricing sets prices for transactions between divisions or subsidiaries of the same organization.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_021',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Activity-Based Costing',
    question: 'What is Activity-Based Costing (ABC)?',
    options: [
      'Traditional overhead allocation',
      'Allocating costs based on activities that drive costs',
      'Allocating all costs equally',
      'Direct costing only'
    ],
    correct: 1,
    explanation: 'ABC allocates overhead costs based on activities and cost drivers rather than simple volume measures.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_022',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Joint Ventures',
    question: 'How are Joint Ventures typically accounted for?',
    options: [
      'Full consolidation',
      'Equity method',
      'Cost method',
      'Not recorded'
    ],
    correct: 1,
    explanation: 'Joint Ventures are typically accounted for using the equity method, recognizing share of profits/losses.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_023',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Revaluation',
    question: 'What is Asset Revaluation?',
    options: [
      'Depreciation of assets',
      'Adjusting asset value to fair value',
      'Selling assets',
      'Disposing of assets'
    ],
    correct: 1,
    explanation: 'Asset Revaluation adjusts the carrying amount of an asset to its fair value, with changes in revaluation surplus.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_024',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Interim Reporting',
    question: 'What is Interim Financial Reporting?',
    options: [
      'Annual reporting only',
      'Financial reporting for periods less than a year',
      'Reporting every 5 years',
      'Reporting only when required'
    ],
    correct: 1,
    explanation: 'Interim Reporting provides financial information for periods shorter than a full fiscal year, like quarterly reports.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_025',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Biological Assets',
    question: 'How are Biological Assets measured under IAS 41?',
    options: [
      'At historical cost',
      'At fair value less costs to sell',
      'At book value',
      'At replacement cost'
    ],
    correct: 1,
    explanation: 'IAS 41 requires biological assets (living plants/animals) to be measured at fair value less costs to sell.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_026',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Government Grants',
    question: 'How should Government Grants be recognized?',
    options: [
      'Immediately as income',
      'Systematically over periods matching related costs',
      'Never recognized',
      'Only when spent'
    ],
    correct: 1,
    explanation: 'Government Grants are recognized systematically over the periods matching the related costs they compensate.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_027',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Borrowing Costs',
    question: 'When should Borrowing Costs be capitalized?',
    options: [
      'Always',
      'Never',
      'When directly attributable to qualifying asset acquisition',
      'Only for buildings'
    ],
    correct: 2,
    explanation: 'Borrowing Costs directly attributable to acquisition, construction, or production of qualifying assets must be capitalized.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_028',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Investment Property',
    question: 'What is Investment Property?',
    options: [
      'Property used in business operations',
      'Property held to earn rentals or capital appreciation',
      'Inventory property',
      'Owner-occupied property'
    ],
    correct: 1,
    explanation: 'Investment Property is property held to earn rentals or for capital appreciation, not for use in operations.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_029',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Non-controlling Interest',
    question: 'What is Non-controlling Interest?',
    options: [
      'Parent company\'s interest',
      'Minority shareholders\' equity in subsidiary',
      'Debt holders\' interest',
      'Management\'s interest'
    ],
    correct: 1,
    explanation: 'Non-controlling Interest (Minority Interest) represents equity in a subsidiary not attributable to the parent company.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'acc_hard_030',
    subject: 'accounting',
    difficulty: 'hard',
    topic: 'Hyperinflation',
    question: 'How are financial statements adjusted in hyperinflationary economies?',
    options: [
      'No adjustment needed',
      'Restated using general price index',
      'Only nominal adjustments',
      'Converted to foreign currency'
    ],
    correct: 1,
    explanation: 'In hyperinflationary economies, financial statements are restated using a general price index to reflect current purchasing power.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  }
];
