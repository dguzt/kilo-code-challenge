import useZones from "@/hooks/useZones";
import { Award } from "@/types/award";
import { TentTree, Calendar, Users } from "lucide-react";

export default function AwardListItem({ award }: { award: Award }) {
  const { zones } = useZones();
  const zone = zones?.find((zone) => zone.zone_id === award.zone_id);

  return (
    <div className="grid grid-cols-3 gap-2 p-2 border rounded-md">
      <p className="font-bold">award {award.award_id}</p>
      <div className="flex items-center gap-2">
        <TentTree className="w-4 h-4" />
        zone: {zone?.name}
      </div>
      <p>pref: {award.pref}</p>
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        date: {award.entry}
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        people: {award.size}
      </div>
    </div>
  );
}

