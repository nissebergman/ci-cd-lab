import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Dever!</h1>
      <Link href="/home/about">About</Link>
    </div>
  );
}
