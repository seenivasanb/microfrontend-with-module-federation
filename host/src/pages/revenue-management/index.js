import { Suspense, lazy, useEffect, useState } from "react";

const RevenueGrid =
  typeof window !== "undefined"
    ? lazy(() => import("revenue-management/grid"))
    : null;

export default function RevenueManagement() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section>
      <h2 className="text-xl font-bold">Revenue Details</h2>
      {isClient && (
        <Suspense fallback="Loading Grid">
          <RevenueGrid />
        </Suspense>
      )}
    </section>
  );
}
