import { CharacterTable } from "@/components/CharacterTable";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/characters");
  const data = await res.json();

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Rick and Morty Task</h1>
      <CharacterTable characters={data.results} />
    </main>
  );
}
