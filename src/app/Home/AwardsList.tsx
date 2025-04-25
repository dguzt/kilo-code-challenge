"use client";

import useAwards from "@/hooks/useAwards";
import DatePickerForAwards from "./DatePickerForAwards";
import AwardsListItem from "./AwardsListItem";
import { useSearchParams } from "next/navigation";

export default function AwardsList() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date") ?? "";
  const { awards, isLoading: awardsIsLoading } = useAwards({ date: dateParam });

  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Awards:</h1>
        <DatePickerForAwards />
      </div>
      {awardsIsLoading && <div>Loading...</div>}
      {awards?.map((award) => (
        <AwardsListItem key={award.award_id} award={award} />
      ))}
    </div>
  );
}
