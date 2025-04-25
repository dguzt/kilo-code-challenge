"use client";

import useZones from "@/hooks/useZones";
import ClearAllFiltersButton from "./ClearFiltersButton";
import ZonesListItem from "./ZonesListItem";

export default function ZonesList() {
  const { zones, isLoading: zonesIsLoading } = useZones();


  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mt-5">Zones:</h1>
        <ClearAllFiltersButton />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {zonesIsLoading && <div>Loading...</div>}
        {zones?.map((zone) => (
          <ZonesListItem key={zone.zone_id} zone={zone} />
        ))}
      </div>
    </div>
  );
}