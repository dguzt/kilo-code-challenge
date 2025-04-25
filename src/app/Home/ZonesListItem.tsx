import { Zone } from "@/types/zone";
import { Checkbox } from "@/components/ui/checkbox";

export default function ZonesListItem({ zone }: { zone: Zone }) {
  return (
    <div className="flex items-center gap-2 p-2 border rounded-md">
      <Checkbox id={zone.zone_id.toString()} />
      <label htmlFor={zone.zone_id.toString()}>
        {zone.zone_id} - {zone.name}
      </label>
    </div>
  );
}
