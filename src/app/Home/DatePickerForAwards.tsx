import { DatePicker } from "@/components/ui/datepicker";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function DatePickerForAwards() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const date = dateParam ? new Date(dateParam) : undefined;

  const handleDateChange = (date: Date | undefined) => {
    const formatDate = date ? format(date, "yyyy-MM-dd") : undefined;
    router.push(`/?date=${formatDate}`);
  };

  return (
    <div className="flex items-center justify-between">
      <DatePicker onSelect={handleDateChange} date={date} />
    </div>
  );
}
