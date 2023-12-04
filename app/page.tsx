import prisma from "@/app/db";
import TodoItem from "./components/molecule/TodoItem";
import Link from "next/link";

function getTodos() {
  return prisma?.todo.findMany();
}

export default async function Home() {
  const Todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center">
        <span className="text-2xl">TODO</span>
        <Link
          href="/new"
          className="text-slate-300 border-slate-300 border px-2 py-1 rounded w-100 hover:bg-slate-700"
        >
          New
        </Link>
      </header>
      <section>
        <div className="container">
          {Todos?.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      </section>
    </>
  );
}
