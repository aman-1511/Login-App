# Authentication Component with React + Vite

A modern, responsive authentication component built with React and Vite, featuring a clean and professional design. This component includes user registration, login, and OTP verification functionality.

## Features

- User Registration with First Name and Last Name fields
- Phone number input with country code selection
- Password input with show/hide functionality
- OTP verification system
- Terms and Conditions acceptance
- Responsive design for all screen sizes
- Modern UI with smooth transitions
- Built with React + Vite for optimal performance

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Project Structure

```
src/
  ├── components/
  │   └── auth/
  │       ├── Auth.css
  │       └── [Other auth component files]
  └── [Other project files]
```

## Environment Setup

1. Create a `.env` file in the root directory:
```
VITE_API_URL=your_api_url_here
```

2. Add any other environment variables your project needs

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

