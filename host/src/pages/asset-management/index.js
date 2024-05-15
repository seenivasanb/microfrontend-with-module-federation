import Link from "next/link";
import { Suspense, lazy, useEffect, useState } from "react";

const AssetGrid =
  typeof window !== "undefined"
    ? lazy(() => import("asset-management/grid"))
    : null;

export default function AssetManagement() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section>
      <h2 className="text-xl font-bold">Asset Details</h2>
      {isClient && (
        <Suspense fallback="Loading Grid">
          <AssetGrid />
        </Suspense>
      )}

      <Link href="/" className="text-teal-600 font-bold">
        Back To Home
      </Link>
    </section>
  );
}
