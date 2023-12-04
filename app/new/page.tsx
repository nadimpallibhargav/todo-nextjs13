import prisma from "@/app/db";
import { redirect } from "next/navigation";

async function AddNewTask(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("invalid Task");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default async function New() {
  return (
    <>
      <section>
        <div className="container">
          <form
            action={AddNewTask}
            name="todoform"
            className="flex justify-between items-center flex-col"
          >
            <input name="title" type="text" />
            <button
              type="submit"
              className="text-slate-300 border-slate-300 border px-2 py-1 rounded w-100 hover:bg-slate-700"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
