"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
}

export function CharacterTable({ characters }: { characters: Character[] }) {
  const [filter, setFilter] = useState("");

  const filteredCharacters = characters.filter((character) =>
    character.status.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Species</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCharacters.map((character) => (
            <TableRow key={character.id}>
              <TableCell>{character.id}</TableCell>
              <TableCell>{character.name}</TableCell>
              <TableCell>{character.status}</TableCell>
              <TableCell>{character.species}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
