import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2" className="hover:text-green-400 hover:underline">Week 2 - Assignment</Link>
    </main>
  );
}
