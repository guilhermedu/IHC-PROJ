# Road Buddy

Road Buddy is a ride-sharing app built using React Native and Expo. This README file provides instructions on how to set up and run the project on your local machine.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the App](#running-the-app)
4. [Troubleshooting](#troubleshooting)
5. [Contributing](#contributing)
6. [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later) or Yarn (v1.x or later)
- Expo CLI (v4.x or later)

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/road-buddy.git
   cd road-buddy
Install dependencies:
If you are using npm:

bash
Copiar código
npm install
If you are using Yarn:

bash
Copiar código
yarn install
Install Expo CLI globally (if not already installed):

bash
Copiar código
npm install -g expo-cli
graphql
Copiar código

Ensure there are no extra spaces or incorrect indentation before the triple backticks that denote the beginning and end of code blocks. This should render correctly on GitHub. 

Here's the full README.md for you to copy and paste:

```markdown
# Road Buddy

Road Buddy is a ride-sharing app built using React Native and Expo. This README file provides instructions on how to set up and run the project on your local machine.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the App](#running-the-app)
4. [Troubleshooting](#troubleshooting)
5. [Contributing](#contributing)
6. [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14.x or later)
- npm (v6.x or later) or Yarn (v1.x or later)
- Expo CLI (v4.x or later)

## Installation

Follow these steps to set up the project:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/road-buddy.git
   cd road-buddy
Install dependencies:
If you are using npm:

bash
Copiar código
npm install
If you are using Yarn:

bash
Copiar código
yarn install
Install Expo CLI globally (if not already installed):

bash
Copiar código
npm install -g expo-cli
Running the App
Start the Expo development server:

bash
Copiar código
expo start
Run the app on your device or emulator:

For Android, scan the QR code with the Expo Go app.
For iOS, scan the QR code with the Camera app or Expo Go app.
Alternatively, you can run the app on an emulator/simulator:

For Android:

bash
Copiar código
expo start --android
For iOS:

bash
Copiar código
expo start --ios
Troubleshooting
Here are some common issues and solutions:

Expo CLI not recognized:
Ensure that you have installed Expo CLI globally. Try running:

bash
Copiar código
npm install -g expo-cli
App not starting on emulator:
Make sure your emulator is running and properly configured. You may need to restart the emulator or your development server.

Dependencies issues:
Delete the node_modules folder and reinstall dependencies:

bash
Copiar código
rm -rf node_modules
npm install
