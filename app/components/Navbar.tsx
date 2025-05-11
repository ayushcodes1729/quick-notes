import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="py-2 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-3xl font-semibold dark:text-white">
          <span className="font-extrabold text-4xl bg-slate-700 text-white px-2 mr-2">
            Q
          </span>
          QuickNotes
        </h1>
      </Link>
      <Link href="/create">
        <Button>Create Notes</Button>
      </Link>
    </nav>
  );
}
