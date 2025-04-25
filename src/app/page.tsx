import ZonesList from "./Home/ZonesList";
import AwardsList from "./Home/AwardsList";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 container mx-auto">
      <ZonesList />
      <AwardsList />
    </div>
  );
}
