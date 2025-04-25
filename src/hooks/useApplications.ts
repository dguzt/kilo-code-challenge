import useSWR from "swr";

import { getFetcher } from "@/lib/fetcher";
import { Zone } from "@/types/zone";
import ApiCollectionResponse from "@/types/apiResponse";
import { Application } from "@/types/application";
import { Award } from "@/types/award";

export default function useApplicationsByAward(award?: Award) {
  const { data, error } = useSWR<ApiCollectionResponse<Application>>(award ? `/applications?zoneId=${award.zone_id}&date=${award.entry}` : null, getFetcher);

  return {
    applicationsById: data?.data,
    applications: data?.data.map(z => Object.values(z)[0]).flat() ?? [],
    isLoading: !data && !error,
    isError: error,
  };
}
