import useSWR from "swr";

import { getFetcher } from "@/lib/fetcher";
import { Zone } from "@/types/zone";
import ApiCollectionResponse from "@/types/apiResponse";

export default function useZones() {
  const { data, error } = useSWR<ApiCollectionResponse<Zone>>("/zones", getFetcher);

  return {
    zonesById: data?.data,
    zones: data?.data.map(z => Object.values(z)[0]).flat() ?? [],
    isLoading: !data && !error,
    isError: error,
  };
}
