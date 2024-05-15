import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h2 className="text-xl font-bold mb-5">Dashboard</h2>
      <p>
        Try to click on either the{" "}
        <Link href="/revenue-management" className="text-teal-600 font-bold">
          Asset Management
        </Link>{" "}
        or{" "}
        <Link href="/revenue-management" className="text-teal-600 font-bold">
          Revenue Management
        </Link>{" "}
        options to dynamically render a remote application component.
      </p>
    </section>
  );
}
