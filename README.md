# Spotify Build Project

This project is a Spotify clone built using Next.js 14.0.3, React, Stripe for payment processing, Supabase for authentication and database, PostgreSQL as the database, and Tailwind CSS for styling.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project aims to replicate the core functionality of the Spotify application, providing users with a familiar interface for exploring and listening to music. It utilizes modern web development technologies to deliver a seamless user experience.

## Features

- User authentication with Supabase
- Real-time updates using Supabase for playlists and song playback
- Integration with Stripe for premium subscription payments
- PostgreSQL database for storing user data and playlists
- Responsive UI design with Tailwind CSS
- Next.js for server-side rendering and improved performance

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Arnaudband/spotify.git
   cd spotify
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root of the project and add the following variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anonymous-key
   STRIPE_PUBLIC_KEY=your-stripe-public-key
   ```

   Replace `your-supabase-url`, `your-supabase-anonymous-key`, and `your-stripe-public-key` with your actual Supabase URL, Supabase anonymous key, and Stripe public key.

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- Create a new account or log in using your existing account.
- Explore music, create playlists, and enjoy your favorite tracks.
- Upgrade to a premium account for additional features.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
