import prisma from "@/app/db";

function getTodos() {
  return prisma?.todo.findMany();
}

export default async function Home() {
  const Todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center">
        <span className="text-2xl">TODO</span>
        <button className="text-slate-300 border-slate-300 border px-2 py-1 rounded w-100 hover:bg-slate-700">
          New
        </button>
      </header>
      <section>
        <div className="container">
          {Todos?.map((todo) => (
            <h2 key={todo.id}>{todo.title}</h2>
          ))}
        </div>
      </section>
    </>
  );
}
