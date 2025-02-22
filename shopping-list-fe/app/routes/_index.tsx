import type { MetaFunction } from "@remix-run/node";
import { listStub } from "~/stubs/lists";

export const meta: MetaFunction = () => {
  return [
    { title: "Shopping list" },
    {
      name: "description",
      content: "Various shopping lists for your convinience",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-start justify-center">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col items-center gap-2">
          <img src="/logo.svg" alt="Shopping list log" />

          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Start browsing lists, or create your own!
          </h1>
        </header>

        <ul className="flex flex-col items-center justify-center gap-4">
          {listStub.map(({ id, name, tags }) => (
            <li
              key={id}
              className="flex flex-row items-center gap-8 border rounded-2xl dark:border-gray-700 p-8"
            >
              <a
                className="text-blue-700 hover:underline dark:text-blue-500"
                href={"/"}
              >
                {name}
              </a>

              <p className="text-xs">{tags.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
