import { Question } from '../../types/question';

export const enhancedMathQuestions: Question[] = [
  // EASY QUESTIONS (30 questions)
  {
    id: 'math_easy_001',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Basic Arithmetic',
    question: 'What is 7 × 8?',
    options: ['54', '56', '58', '62'],
    correct: 1,
    explanation: '7 × 8 = 56. This is a basic multiplication fact.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_002',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Exponents',
    question: 'What is 2⁴?',
    options: ['8', '12', '16', '24'],
    correct: 2,
    explanation: '2⁴ = 2 × 2 × 2 × 2 = 16',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_003',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Exponents',
    question: 'What is 2³?',
    options: ['6', '8', '12', '16'],
    correct: 1,
    explanation: '2³ = 2 × 2 × 2 = 8',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_004',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Roots',
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '13'],
    correct: 2,
    explanation: '√144 = 12 because 12 × 12 = 144',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_005',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Roots',
    question: 'What is the cube root of 27?',
    options: ['3', '6', '9', '12'],
    correct: 0,
    explanation: '∛27 = 3 because 3 × 3 × 3 = 27',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_006',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Geometry',
    question: 'What is the sum of angles in a triangle?',
    options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
    correct: 1,
    explanation: 'The sum of all interior angles in any triangle is always 180 degrees.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_007',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Geometry',
    question: 'What is the sum of angles in a quadrilateral?',
    options: ['180°', '270°', '360°', '450°'],
    correct: 2,
    explanation: 'The sum of all interior angles in any quadrilateral is 360 degrees.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_008',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Fractions',
    question: 'What is the reciprocal of 2?',
    options: ['0.5', '-2', '2', '4'],
    correct: 0,
    explanation: 'The reciprocal of 2 is 1/2 = 0.5',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_009',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Percentages',
    question: 'What is 15% of 200?',
    options: ['20', '30', '40', '50'],
    correct: 1,
    explanation: '15% of 200 = 0.15 × 200 = 30',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_010',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Absolute Value',
    question: 'What is the value of |−5|?',
    options: ['-5', '0', '5', 'undefined'],
    correct: 2,
    explanation: 'The absolute value of -5 is 5. Absolute value is always non-negative.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_011',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Exponents',
    question: 'What is the value of 5⁰?',
    options: ['0', '1', '5', 'undefined'],
    correct: 1,
    explanation: 'Any non-zero number raised to the power of 0 equals 1.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_012',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Geometry - Perimeter',
    question: 'What is the perimeter of a square with side length s?',
    options: ['s', '2s', '4s', 's²'],
    correct: 2,
    explanation: 'Perimeter of a square = 4 × side length = 4s',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_013',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Geometry - Area',
    question: 'What is the area of a rectangle with length l and width w?',
    options: ['l + w', '2(l + w)', 'l × w', 'l/w'],
    correct: 2,
    explanation: 'Area of a rectangle = length × width = l × w',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_014',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Geometry - Area',
    question: 'What is the area of a triangle with base b and height h?',
    options: ['bh', '½bh', '2bh', 'b²h'],
    correct: 1,
    explanation: 'Area of a triangle = ½ × base × height = ½bh',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_015',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Number Theory',
    question: 'What is the GCD of 12 and 18?',
    options: ['2', '3', '6', '9'],
    correct: 2,
    explanation: 'The Greatest Common Divisor of 12 and 18 is 6.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_016',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Probability',
    question: 'What is the probability of getting heads when flipping a fair coin?',
    options: ['0', '1/4', '1/2', '1'],
    correct: 2,
    explanation: 'A fair coin has 2 equally likely outcomes, so P(heads) = 1/2',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_017',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Sequences',
    question: 'What is the sum of first n natural numbers?',
    options: ['n(n+1)/2', 'n²', '2n', 'n(n-1)'],
    correct: 0,
    explanation: 'Sum of first n natural numbers = n(n+1)/2. For example, 1+2+3+4+5 = 5(6)/2 = 15',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_018',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Factorials',
    question: 'What is 5 factorial (5!)?',
    options: ['120', '100', '60', '24'],
    correct: 0,
    explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_019',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Algebra',
    question: 'What is the square of (a + b)?',
    options: ['a² + b²', 'a² + 2ab + b²', 'a² - b²', '(a + b)²'],
    correct: 1,
    explanation: '(a + b)² = a² + 2ab + b²',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_020',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Geometry - Volume',
    question: 'What is the volume of a cube with side length a?',
    options: ['a²', '4a', 'a³', '6a²'],
    correct: 2,
    explanation: 'Volume of a cube = side³ = a³',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_021',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Percentages',
    question: 'What is 50% of 80?',
    options: ['30', '40', '50', '60'],
    correct: 1,
    explanation: '50% of 80 = 0.5 × 80 = 40',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_022',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Basic Arithmetic',
    question: 'What is 12 × 12?',
    options: ['124', '134', '144', '154'],
    correct: 2,
    explanation: '12 × 12 = 144',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_023',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Fractions',
    question: 'What is 1/2 + 1/4?',
    options: ['1/6', '2/6', '3/4', '1/8'],
    correct: 2,
    explanation: '1/2 + 1/4 = 2/4 + 1/4 = 3/4',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_024',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Decimals',
    question: 'What is 0.5 + 0.25?',
    options: ['0.55', '0.65', '0.75', '0.85'],
    correct: 2,
    explanation: '0.5 + 0.25 = 0.75',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_025',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Number Properties',
    question: 'Which of these is a prime number?',
    options: ['4', '6', '7', '9'],
    correct: 2,
    explanation: '7 is prime because it has only two divisors: 1 and 7.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_026',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Number Properties',
    question: 'Which of these is an even number?',
    options: ['13', '15', '17', '18'],
    correct: 3,
    explanation: '18 is even because it is divisible by 2.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_027',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Rounding',
    question: 'What is 3.7 rounded to the nearest whole number?',
    options: ['3', '4', '3.5', '5'],
    correct: 1,
    explanation: '3.7 rounds up to 4 because 0.7 ≥ 0.5',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_028',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Order of Operations',
    question: 'What is 2 + 3 × 4?',
    options: ['14', '20', '24', '32'],
    correct: 0,
    explanation: 'Following PEMDAS: 3 × 4 = 12, then 2 + 12 = 14',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_029',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Negative Numbers',
    question: 'What is -5 + 8?',
    options: ['-13', '-3', '3', '13'],
    correct: 2,
    explanation: '-5 + 8 = 3 (moving 8 units right from -5 on number line)',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_easy_030',
    subject: 'math',
    difficulty: 'easy',
    topic: 'Division',
    question: 'What is 100 ÷ 4?',
    options: ['20', '25', '30', '40'],
    correct: 1,
    explanation: '100 ÷ 4 = 25',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },

  // MEDIUM QUESTIONS (40 questions)
  {
    id: 'math_medium_001',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Constants',
    question: 'What is the value of π (pi) to two decimal places?',
    options: ['3.14', '3.16', '3.12', '3.18'],
    correct: 0,
    explanation: 'π ≈ 3.14159..., which rounds to 3.14 to two decimal places.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_002',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Constants',
    question: 'What is the value of e (Euler\'s number) to 2 decimal places?',
    options: ['2.17', '2.72', '3.14', '1.62'],
    correct: 1,
    explanation: 'e ≈ 2.71828..., which rounds to 2.72 to two decimal places.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_003',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Geometry - Pythagorean Theorem',
    question: 'In a right-angled triangle, what is the square of the hypotenuse equal to?',
    options: [
      'Sum of other sides',
      'Product of other sides',
      'Sum of squares of other sides',
      'Difference of squares of other sides'
    ],
    correct: 2,
    explanation: 'Pythagorean Theorem: a² + b² = c², where c is the hypotenuse.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_004',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Distance Formula',
    question: 'What is the distance between points (0,0) and (3,4)?',
    options: ['5', '7', '25', '35'],
    correct: 0,
    explanation: 'Using distance formula: √[(3-0)² + (4-0)²] = √(9+16) = √25 = 5',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_005',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Trigonometry',
    question: 'What is the value of sin(90°)?',
    options: ['0', '1', '-1', 'undefined'],
    correct: 1,
    explanation: 'sin(90°) = 1. At 90°, the sine function reaches its maximum value.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_006',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Trigonometry',
    question: 'What is the value of cos(0°)?',
    options: ['0', '1', '-1', 'undefined'],
    correct: 1,
    explanation: 'cos(0°) = 1. At 0°, the cosine function equals 1.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_007',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Trigonometry',
    question: 'What is the value of sin(30°)?',
    options: ['1', '0.5', '√3/2', '√2/2'],
    correct: 1,
    explanation: 'sin(30°) = 0.5 or 1/2. This is a standard trigonometric value.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_008',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Trigonometry',
    question: 'What is the value of cos(60°)?',
    options: ['0.5', '√3/2', '1', '0'],
    correct: 0,
    explanation: 'cos(60°) = 0.5 or 1/2. This is a standard trigonometric value.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_009',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Trigonometry',
    question: 'What is the value of tan(45°)?',
    options: ['0', '1', '√2', 'undefined'],
    correct: 1,
    explanation: 'tan(45°) = 1 because sin(45°) = cos(45°).',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_010',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Calculus - Derivatives',
    question: 'What is the derivative of x²?',
    options: ['x', '2x', 'x/2', '2'],
    correct: 1,
    explanation: 'd/dx(x²) = 2x using the power rule.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_011',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Calculus - Derivatives',
    question: 'What is the derivative of sin(x)?',
    options: ['cos(x)', '-sin(x)', '-cos(x)', 'tan(x)'],
    correct: 0,
    explanation: 'd/dx(sin(x)) = cos(x)',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_012',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Calculus - Integrals',
    question: 'What is the integral of 2x?',
    options: ['x²', 'x² + C', '2x² + C', 'x² + 2'],
    correct: 1,
    explanation: '∫2x dx = x² + C, where C is the constant of integration.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_013',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Logarithms',
    question: 'What is the value of log₁₀(100)?',
    options: ['1', '2', '10', '100'],
    correct: 1,
    explanation: 'log₁₀(100) = 2 because 10² = 100',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_014',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Logarithms',
    question: 'What is log₂(8)?',
    options: ['2', '3', '4', '8'],
    correct: 1,
    explanation: 'log₂(8) = 3 because 2³ = 8',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_015',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Geometry - Circle',
    question: 'What is the formula for the area of a circle?',
    options: ['2πr', 'πr²', '2πr²', 'πr/2'],
    correct: 1,
    explanation: 'Area of a circle = πr², where r is the radius.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_016',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Geometry - Circle',
    question: 'What is the formula for the circumference of a circle?',
    options: ['πr', '2πr', 'πr²', '2πr²'],
    correct: 1,
    explanation: 'Circumference = 2πr, where r is the radius.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_017',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Slope',
    question: 'What is the slope of a line parallel to the x-axis?',
    options: ['0', '1', 'undefined', 'infinity'],
    correct: 0,
    explanation: 'A horizontal line (parallel to x-axis) has slope = 0.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_018',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Slope',
    question: 'What is the slope of a vertical line?',
    options: ['0', '1', '-1', 'undefined'],
    correct: 3,
    explanation: 'A vertical line has undefined slope because division by zero is undefined.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_019',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Geometry - Pentagon',
    question: 'What is the sum of interior angles of a pentagon?',
    options: ['360°', '450°', '540°', '720°'],
    correct: 2,
    explanation: 'Sum of interior angles = (n-2) × 180° = (5-2) × 180° = 540°',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_020',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Complex Numbers',
    question: 'What is the square root of -1?',
    options: ['1', '-1', 'i', 'undefined'],
    correct: 2,
    explanation: '√(-1) = i, the imaginary unit.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_021',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Interest',
    question: 'What is the formula for simple interest?',
    options: ['P × R × T', 'P(1 + R)ᵀ', 'P + R + T', 'P × R/T'],
    correct: 0,
    explanation: 'Simple Interest = Principal × Rate × Time',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_022',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Quadratic Formula',
    question: 'What is the quadratic formula for ax² + bx + c = 0?',
    options: [
      'x = -b ± √(b² - 4ac) / 2a',
      'x = b ± √(b² + 4ac) / 2a',
      'x = -b ± √(b² + 4ac) / 2a',
      'x = b ± √(b² - 4ac) / 2a'
    ],
    correct: 0,
    explanation: 'Quadratic formula: x = [-b ± √(b² - 4ac)] / 2a',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_023',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Arithmetic Progression',
    question: 'In an AP, if first term is a and common difference is d, what is the nth term?',
    options: ['a + nd', 'a + (n-1)d', 'a + (n+1)d', 'nd'],
    correct: 1,
    explanation: 'nth term of AP = a + (n-1)d',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_024',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Geometric Progression',
    question: 'In a GP, if first term is a and common ratio is r, what is the nth term?',
    options: ['arⁿ', 'arⁿ⁻¹', 'aⁿr', 'a + rⁿ'],
    correct: 1,
    explanation: 'nth term of GP = arⁿ⁻¹',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_025',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Permutations',
    question: 'How many ways can 5 people be arranged in a row?',
    options: ['25', '60', '120', '625'],
    correct: 2,
    explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120 ways',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_026',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Combinations',
    question: 'What is ⁵C₂ (5 choose 2)?',
    options: ['5', '10', '15', '20'],
    correct: 1,
    explanation: '⁵C₂ = 5!/(2!×3!) = (5×4)/(2×1) = 10',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_027',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Matrices',
    question: 'What is the determinant of a 2×2 matrix [[a,b],[c,d]]?',
    options: ['a+d-b-c', 'ad-bc', 'ac-bd', 'ab-cd'],
    correct: 1,
    explanation: 'Determinant = ad - bc',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_028',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Probability',
    question: 'What is the probability of rolling a 6 on a fair die?',
    options: ['1/2', '1/3', '1/6', '1/12'],
    correct: 2,
    explanation: 'A die has 6 equally likely outcomes, so P(6) = 1/6',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_029',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Statistics',
    question: 'What is the median of the set {3, 7, 2, 9, 5}?',
    options: ['3', '5', '7', '9'],
    correct: 1,
    explanation: 'Sorted: {2, 3, 5, 7, 9}. The middle value is 5.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_030',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Statistics',
    question: 'What is the mean of {2, 4, 6, 8, 10}?',
    options: ['5', '6', '7', '8'],
    correct: 1,
    explanation: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_031',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Exponents',
    question: 'What is 2⁻³?',
    options: ['-8', '-6', '1/8', '1/6'],
    correct: 2,
    explanation: '2⁻³ = 1/2³ = 1/8',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_032',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Algebra',
    question: 'What is (a - b)²?',
    options: ['a² - b²', 'a² - 2ab + b²', 'a² + 2ab - b²', 'a² - ab + b²'],
    correct: 1,
    explanation: '(a - b)² = a² - 2ab + b²',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_033',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Algebra',
    question: 'What is a² - b²?',
    options: ['(a-b)²', '(a+b)²', '(a+b)(a-b)', '(a-b)(a+b+1)'],
    correct: 2,
    explanation: 'a² - b² = (a+b)(a-b) - difference of squares',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_034',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Geometry - Sphere',
    question: 'What is the volume of a sphere with radius r?',
    options: ['4πr²', '4πr³/3', 'πr³', '2πr³/3'],
    correct: 1,
    explanation: 'Volume of sphere = (4/3)πr³',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_035',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Geometry - Cylinder',
    question: 'What is the volume of a cylinder with radius r and height h?',
    options: ['πr²h', '2πrh', 'πrh²', '2πr²h'],
    correct: 0,
    explanation: 'Volume of cylinder = πr²h',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_036',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Number Theory',
    question: 'What is the LCM of 12 and 18?',
    options: ['6', '36', '54', '216'],
    correct: 1,
    explanation: 'LCM(12, 18) = 36. It\'s the smallest number divisible by both.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_037',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Ratios',
    question: 'If a:b = 2:3 and b:c = 4:5, what is a:c?',
    options: ['2:5', '8:15', '6:20', '8:12'],
    correct: 1,
    explanation: 'a:b:c = 8:12:15, so a:c = 8:15',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_038',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Percentages',
    question: 'If a price increases by 20% and then decreases by 20%, what is the net change?',
    options: ['0%', '-4%', '+4%', '-2%'],
    correct: 1,
    explanation: 'After +20% then -20%: 100 → 120 → 96. Net change = -4%',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_039',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Inequalities',
    question: 'If x > 5, what can we say about 2x?',
    options: ['2x > 5', '2x > 10', '2x < 10', '2x = 10'],
    correct: 1,
    explanation: 'Multiplying both sides by 2: x > 5 → 2x > 10',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_medium_040',
    subject: 'math',
    difficulty: 'medium',
    topic: 'Functions',
    question: 'If f(x) = 2x + 3, what is f(5)?',
    options: ['10', '11', '13', '15'],
    correct: 2,
    explanation: 'f(5) = 2(5) + 3 = 10 + 3 = 13',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },

  // HARD QUESTIONS (30 questions)
  {
    id: 'math_hard_001',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Limits',
    question: 'What is the limit of sin(x)/x as x approaches 0?',
    options: ['0', '1', 'infinity', 'undefined'],
    correct: 1,
    explanation: 'lim(x→0) sin(x)/x = 1. This is a fundamental limit in calculus.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_002',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Calculus - Chain Rule',
    question: 'What is the derivative of sin(x²)?',
    options: ['cos(x²)', '2x·cos(x²)', '2x·sin(x²)', 'cos(2x)'],
    correct: 1,
    explanation: 'Using chain rule: d/dx[sin(x²)] = cos(x²)·2x = 2x·cos(x²)',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_003',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Calculus - Product Rule',
    question: 'What is the derivative of x·sin(x)?',
    options: ['sin(x)', 'x·cos(x)', 'sin(x) + x·cos(x)', 'cos(x) - x·sin(x)'],
    correct: 2,
    explanation: 'Using product rule: d/dx[x·sin(x)] = sin(x) + x·cos(x)',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_004',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Integration by Parts',
    question: 'What is ∫x·eˣ dx?',
    options: ['eˣ + C', 'x·eˣ + C', 'eˣ(x-1) + C', 'eˣ(x+1) + C'],
    correct: 2,
    explanation: 'Using integration by parts: ∫x·eˣ dx = eˣ(x-1) + C',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_005',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Complex Numbers',
    question: 'What is i⁴ (where i is the imaginary unit)?',
    options: ['-1', '1', 'i', '-i'],
    correct: 1,
    explanation: 'i² = -1, so i⁴ = (i²)² = (-1)² = 1',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_006',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Euler\'s Formula',
    question: 'What is e^(iπ) + 1 equal to?',
    options: ['-1', '0', '1', 'i'],
    correct: 1,
    explanation: 'Euler\'s identity: e^(iπ) + 1 = 0. This is considered one of the most beautiful equations.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_007',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Taylor Series',
    question: 'What is the Taylor series expansion of eˣ around x=0?',
    options: [
      '1 + x + x²/2! + x³/3! + ...',
      'x + x²/2 + x³/3 + ...',
      '1 + x + x² + x³ + ...',
      '1 - x + x² - x³ + ...'
    ],
    correct: 0,
    explanation: 'eˣ = 1 + x + x²/2! + x³/3! + ... (Maclaurin series)',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_008',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Differential Equations',
    question: 'What is the general solution to dy/dx = y?',
    options: ['y = x + C', 'y = eˣ + C', 'y = Ceˣ', 'y = C/x'],
    correct: 2,
    explanation: 'The solution to dy/dx = y is y = Ceˣ, where C is a constant.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_009',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Linear Algebra',
    question: 'What is the rank of a 3×3 identity matrix?',
    options: ['0', '1', '2', '3'],
    correct: 3,
    explanation: 'The identity matrix has full rank, which equals its dimension (3).',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_010',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Eigenvalues',
    question: 'What are the eigenvalues of the matrix [[2,0],[0,3]]?',
    options: ['1 and 1', '2 and 3', '0 and 5', '1 and 6'],
    correct: 1,
    explanation: 'For a diagonal matrix, the eigenvalues are the diagonal elements: 2 and 3.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_011',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Vector Calculus',
    question: 'What is the divergence of a vector field F = (x, y, z)?',
    options: ['0', '1', '2', '3'],
    correct: 3,
    explanation: 'div(F) = ∂x/∂x + ∂y/∂y + ∂z/∂z = 1 + 1 + 1 = 3',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_012',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Fourier Series',
    question: 'What does a Fourier series decompose a function into?',
    options: [
      'Polynomials',
      'Exponentials',
      'Sines and cosines',
      'Logarithms'
    ],
    correct: 2,
    explanation: 'Fourier series decomposes periodic functions into sums of sines and cosines.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_013',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Laplace Transform',
    question: 'What is the Laplace transform of f(t) = 1?',
    options: ['1', '1/s', 's', '1/s²'],
    correct: 1,
    explanation: 'L{1} = 1/s for s > 0',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_014',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Partial Derivatives',
    question: 'If f(x,y) = x²y, what is ∂f/∂x?',
    options: ['2xy', 'x²', 'xy', '2x'],
    correct: 0,
    explanation: 'Treating y as constant: ∂f/∂x = 2xy',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_015',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Double Integrals',
    question: 'What does ∫∫ 1 dA over a region give?',
    options: ['Perimeter', 'Area', 'Volume', 'Surface area'],
    correct: 1,
    explanation: '∫∫ 1 dA calculates the area of the region.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_016',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Convergence',
    question: 'Does the series Σ(1/n) converge?',
    options: ['Yes, to 1', 'Yes, to e', 'No, it diverges', 'Yes, to π'],
    correct: 2,
    explanation: 'The harmonic series Σ(1/n) diverges (grows without bound).',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_017',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Convergence',
    question: 'Does the series Σ(1/n²) converge?',
    options: ['Yes, to π²/6', 'Yes, to e', 'No, it diverges', 'Yes, to 1'],
    correct: 0,
    explanation: 'Σ(1/n²) converges to π²/6 (Basel problem).',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_018',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Group Theory',
    question: 'What is the identity element in multiplication of real numbers?',
    options: ['0', '1', '-1', 'e'],
    correct: 1,
    explanation: 'The multiplicative identity is 1 because a × 1 = a for all a.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_019',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Topology',
    question: 'Is the set of rational numbers dense in the real numbers?',
    options: ['Yes', 'No', 'Only in intervals', 'Undefined'],
    correct: 0,
    explanation: 'Rationals are dense in reals: between any two reals, there exists a rational.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_020',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Number Theory',
    question: 'What is Fermat\'s Little Theorem for prime p and integer a?',
    options: [
      'aᵖ ≡ a (mod p)',
      'aᵖ⁻¹ ≡ 1 (mod p)',
      'aᵖ ≡ 1 (mod p)',
      'a² ≡ 1 (mod p)'
    ],
    correct: 0,
    explanation: 'Fermat\'s Little Theorem: If p is prime, then aᵖ ≡ a (mod p).',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_021',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Graph Theory',
    question: 'What is the minimum number of colors needed to color any planar graph?',
    options: ['3', '4', '5', '6'],
    correct: 1,
    explanation: 'Four Color Theorem: Any planar graph can be colored with at most 4 colors.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_022',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Probability',
    question: 'In the Monty Hall problem, should you switch doors?',
    options: [
      'No, it doesn\'t matter',
      'Yes, it doubles your chances',
      'No, it halves your chances',
      'Yes, it triples your chances'
    ],
    correct: 1,
    explanation: 'Switching gives 2/3 probability of winning vs 1/3 for staying.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_023',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Statistics',
    question: 'What is the Central Limit Theorem about?',
    options: [
      'Sample means approach normal distribution',
      'All distributions are normal',
      'Variance equals mean',
      'Median equals mode'
    ],
    correct: 0,
    explanation: 'CLT: Distribution of sample means approaches normal as sample size increases.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_024',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Optimization',
    question: 'At a critical point where f\'(x) = 0, what does f\'\'(x) > 0 indicate?',
    options: ['Local maximum', 'Local minimum', 'Inflection point', 'Saddle point'],
    correct: 1,
    explanation: 'Second derivative test: f\'\'(x) > 0 indicates a local minimum.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_025',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Complex Analysis',
    question: 'What is the residue theorem used for?',
    options: [
      'Solving polynomials',
      'Evaluating complex integrals',
      'Finding eigenvalues',
      'Computing derivatives'
    ],
    correct: 1,
    explanation: 'Residue theorem evaluates contour integrals using residues at singularities.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_026',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Set Theory',
    question: 'What is the cardinality of the set of real numbers?',
    options: ['Countable', 'Uncountable', 'Finite', 'Zero'],
    correct: 1,
    explanation: 'Real numbers are uncountable (Cantor\'s diagonal argument).',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_027',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Calculus of Variations',
    question: 'What does the Euler-Lagrange equation help find?',
    options: [
      'Derivatives',
      'Integrals',
      'Functions that extremize functionals',
      'Eigenvalues'
    ],
    correct: 2,
    explanation: 'Euler-Lagrange equation finds functions that minimize or maximize functionals.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_028',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Measure Theory',
    question: 'What is the Lebesgue measure of a single point?',
    options: ['1', '0', 'Infinity', 'Undefined'],
    correct: 1,
    explanation: 'A single point has Lebesgue measure 0.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_029',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Functional Analysis',
    question: 'What is a Hilbert space?',
    options: [
      'A finite vector space',
      'A complete inner product space',
      'A metric space',
      'A topological space'
    ],
    correct: 1,
    explanation: 'A Hilbert space is a complete inner product space (generalizes Euclidean space).',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  },
  {
    id: 'math_hard_030',
    subject: 'math',
    difficulty: 'hard',
    topic: 'Abstract Algebra',
    question: 'What is a field in abstract algebra?',
    options: [
      'A set with addition only',
      'A commutative ring with multiplicative inverses',
      'A group with two operations',
      'A vector space'
    ],
    correct: 1,
    explanation: 'A field is a commutative ring where every non-zero element has a multiplicative inverse.',
    source: 'static',
    metadata: {
      createdAt: '2024-01-01',
      timesShown: 0,
      lastShown: null
    }
  }
];
