import Link from 'next/link';

export default function Pagination() {
  return (
    <nav
      className="flex justify-center pt-16"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <ul className="-m-1 inline-flex flex-wrap text-sm font-medium">
        <li className="m-1">
          <span className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-4 text-gray-500">
            Prev
          </span>
        </li>
        <li className="m-1">
          <Link
            href="#"
            className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
          >
            1
          </Link>
        </li>
        <li className="m-1">
          <Link
            href="#"
            className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
          >
            2
          </Link>
        </li>
        <li className="m-1">
          <Link
            href="#"
            className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
          >
            3
          </Link>
        </li>
        <li className="m-1">
          <span className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-500">
            ...
          </span>
        </li>
        <li className="m-1">
          <Link
            href="#"
            className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-2 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
          >
            12
          </Link>
        </li>
        <li className="m-1">
          <Link
            href="#"
            className="min-w-10 inline-flex h-10 items-center justify-center rounded-full bg-gray-800 px-4 text-gray-300 transition-colors duration-150 ease-in-out hover:bg-purple-600"
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
