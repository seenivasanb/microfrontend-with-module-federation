import RemoteHeader from "@/components/RemoteHeader";
import { AssetGrid } from "@/components/AssetGrid";

export default function Home() {
  return (
    <main className={`min-h-screen p-24`}>
      <RemoteHeader />
      <AssetGrid />
    </main>
  );
}
