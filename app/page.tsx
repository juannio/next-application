import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Root page</span>
      <Link href='/about'>Hombre buscas</Link>
    </main>
  );
}
