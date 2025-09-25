# demoblaze-tests


# DemoBlaze Test Automation

![Node.js CI](https://github.com/abhaysingh1103/demoblaze-tests/actions/workflows/node.js.yml/badge.svg)
![Playwright Tests](https://github.com/abhaysingh1103/demoblaze-tests/actions/workflows/playwright.yml/badge.svg)
![License](https://img.shields.io/github/license/abhaysingh1103/demoblaze-tests)

Automated functional tests for [DemoBlaze](https://www.demoblaze.com/index.html) using **Playwright**.

---

## 🔹 Project Overview

This project contains automated test scripts for:

- Login (successful & unsuccessful scenarios)  
- Adding products to cart and placing orders  
- Validating alerts and modals  
- Pagination & product listing checks  

It is designed to catch functional bugs in the DemoBlaze application.

---

## 🛠️ Tech Stack

- Node.js  
- Playwright  
- TypeScript (optional)  
- Git & GitHub  

---

## ⚡ Setup Instructions

1. **Clone the repo**
```bash
git clone git@github.com:abhaysingh1103/demoblaze-tests.git
cd demoblaze-tests



Getting Started
  git clone https://github.com/abhaysingh1103/demoblaze-tests.git
  cd demoblaze-tests


Install dependencies
  npm install
  npx playwright install

Running Tests
  Run all tests:
    npx playwright test
    
  Run a specific test file:
    npx playwright test tests/e2e/end-to-end.test.ts
    npx playwright test tests/e2e/products.test.ts
    npx playwright test tests/e2e/firsts.test.ts


  After running tests, open the HTML report:
    npx playwright show-report

Project Structure
   .
├── playwright.config.ts      # Playwright configuration
├── tests-demo/
│     ├── end-to-end.test.ts   # Full user journey test
│     ├── products.test.ts     # Product-related flows
│     └── firsts.test.ts       # Form filling / title selection
└── test-results/              # Auto-generated results and reports




