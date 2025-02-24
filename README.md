# BOTCHA - AI-Powered CAPTCHA Solution

## Overview
BOTCHA is an AI-powered CAPTCHA solution designed to differentiate between human users and bots without requiring manual user input. The system utilizes behavioral biometrics, browser fingerprinting, and an AI/ML-based approach to passively verify users while maintaining accessibility and usability.

## Features
- **Passive Bot Detection**: Analyzes user interactions like cursor movement, keystrokes, session tracking, and browser fingerprinting.
- **Two-Stage Verification**: Lightweight model for initial screening and heavyweight model for in-depth analysis.
- **GIF-Based CAPTCHA Challenge**: Unique visual challenge designed for AI-resistant verification.
- **Honeypot Mechanism**: Detects and restricts simple bots instantly.
- **Accessibility Support**: Optimized for visually impaired users with an interactive challenge option.
- **Cross-Platform Support**: Works on both desktop and mobile platforms.

## Architecture
1. **Stage 1 (Client-Side Plugin)**
   - Captures user interactions and browser parameters.
   - Uses a lightweight ML model (`logistic_regression_model.pkl`) for initial classification.
   - Sends suspicious users to the GIF-based challenge.
   - Non-suspicious users proceed to Stage 2.

2. **Stage 2 (Server-Side Analysis)**
   - Receives data from Stage 1 and runs advanced behavioral analysis.
   - Uses a heavyweight ML model (`rf_model.pkl`, `xgb_model.pkl`) to confirm classification.
   - Suspicious users face the GIF challenge; verified humans proceed to authentication.

## Installation
### Prerequisites
- **Frontend**: React.js, JavaScript, TypeScript
- **Backend**: Node.js, Express.js, MongoDB
- **ML Models**: Python, scikit-learn, XGBoost

## Usage
- Integrate the client-side plugin into web applications.
- Monitor logs for bot detection analysis.
- Configure GIF challenge settings as per security needs.



