// app/footer.tsx

// Import necessary modules
import Link from 'next/link';
// import { FaGithub, FaTwitter } from 'react-icons/fa';

// Define the Footer component
export default function Footer() {
  return (
    <footer>
      {/* First section of the footer */}
      <div>
        {/* Display your name and the current year */}
        <p>Your Name &copy; {new Date().getFullYear()}</p>
      </div>
      {/* Second section of the footer */}
      <div>
        {/* Provide a link to your Twitter profile */}
        <a href="https://twitter.com/your-username">
          Connect on Twitter
        </a>
      </div>
    </footer>
  );
}