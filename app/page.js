import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="./week-2" className="hover:text-green-400 hover:underline">Week 2 - Assignment</Link>
      </p>
      <p>
        <Link href="./week-3" className="hover:text-green-400 hover:underline">Week 3 - Assignment</Link>
      </p>
      <p>
        <Link href="./week-4" className="hover:text-green-400 hover:underline">Week 4 - Assignment</Link>
      </p>
      <p>
        <Link href="./week-5" className="hover:text-green-400 hover:underline">Week 5 - Assignment</Link>
      </p>
      <p>
        <Link href="./week-6" className="hover:text-green-400 hover:underline">Week 6 - Assignment</Link>
      </p>
      <p>
        <Link href="./week-7" className="hover:text-green-400 hover:underline">Week 7 - Assignment</Link>
      </p>
      <p>
        <Link href="./week-8" className="hover:text-green-400 hover:underline">Week 8 - Assignment</Link>
      </p>
    </main>
  );
}
