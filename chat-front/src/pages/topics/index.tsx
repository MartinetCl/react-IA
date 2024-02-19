/**
 * v0 by Vercel.
 * @see https://v0.dev/t/snwLGuLh1Bo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="">Acme Inc</span>
        </Link>
        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Choose a Quiz Topic</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border shadow-sm rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">Geography Quiz</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This quiz will test your knowledge of geography.</p>
              <Button className="mt-4">Start Quiz</Button>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">History Quiz</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This quiz will test your knowledge of history.</p>
              <Button className="mt-4">Start Quiz</Button>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">Science Quiz</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This quiz will test your knowledge of science.</p>
              <Button className="mt-4">Start Quiz</Button>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">Mathematics Quiz</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                This quiz will test your knowledge of mathematics.
              </p>
              <Button className="mt-4">Start Quiz</Button>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">Literature Quiz</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This quiz will test your knowledge of literature.</p>
              <Button className="mt-4">Start Quiz</Button>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">Art Quiz</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">This quiz will test your knowledge of art.</p>
              <Button className="mt-4">Start Quiz</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}

