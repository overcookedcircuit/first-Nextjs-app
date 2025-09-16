// app/nav/nav.tsx
"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full bg-white dark:bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            MySite
          </Link>

          {/* Nav Links */}
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/art"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                Art
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
