/*import Image from "next/image";

export default function Home() {
  return (
    <main className="items-center justify-between">
      <section className="min-h-screen pg-48 bg-slate-300">
        <nav className="py-5 mb-5 flex justify-between bg-blue-700 rounded-md">
          <h1 className="text-2xl ml-40"><a href="#">JP.me</a></h1>
          <ul className="flex items-center mr-40">
            <li className="px-5" ><a href="#">About</a></li>
            <li className="px-5"><a href="#">Projects</a></li>
            <li className="px-5"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
*/
// pages/_app.js

import RootLayout from "./layout";

export default function App() {
  return (
    <RootLayout />
  );
}
