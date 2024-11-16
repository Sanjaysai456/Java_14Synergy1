import { Link } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p>
        This is a public page meant to contain a contact form and other related contact details.
      </p>
      <ul>
        <li>
          <Link to="/">Return to Index</Link>
          <UserButton />
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </>
  )
}