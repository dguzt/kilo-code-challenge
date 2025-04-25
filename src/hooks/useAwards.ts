import useSWR from "swr";

import { getFetcher } from "@/lib/fetcher";
import { Award } from "@/types/award";
import ApiCollectionResponse from "@/types/apiResponse";

export default function useAwards({
  date = "",
  zone = "",
}: {
  date?: string;
  zone?: string;
}) {
  const { data, error } = useSWR<ApiCollectionResponse<Award>>(
    `/awards?date=${date}&zone=${zone}`,
    getFetcher
  );

  return {
    awards: data?.data.map((a) => Object.values(a)[0]).flat() ?? [],
    isLoading: !data && !error,
    isError: error,
  };
}


export function useAward(awardId: number) {
  const { data, error } = useSWR<Record<string, Award>>(
    `/awards/${awardId}`,
    getFetcher
  );

  return {
    award: data?.[awardId],
    isLoading: !data && !error,
    isError: error,
  };
}
