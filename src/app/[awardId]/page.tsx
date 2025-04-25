"use client";

import useApplicationsByAward from "@/hooks/useApplications";
import { useAward } from "@/hooks/useAwards";

export default function ApplicationsPage() {
  // TODO: get the awardId from the url
  const { award, isLoading: awardIsLoading } = useAward(1);
  const { applications, isLoading: applicationsIsLoading } = useApplicationsByAward(award);

  if (awardIsLoading || applicationsIsLoading) return <div>Loading...</div>;

  return (<div>Applications {award?.award_id} - application for the award: {applications.length}</div>);
}
