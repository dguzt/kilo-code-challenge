"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ClearAllFiltersButton() {
  const router = useRouter();

  const handleClearAllFilters = () => {
    router.push("/");
  };

  return <Button variant="outline" onClick={handleClearAllFilters}>Clear all filters</Button>;
}
