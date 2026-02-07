import { StatItem } from "@/types";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaCheckCircle,
} from "react-icons/fa";

export const SUMMARY_STATS: StatItem[] = [
  { value: 800, suffix: "+", label: "Students Placed", icon: FaGraduationCap },
  { value: 15, suffix: "+", label: "Years Experience", icon: FaCalendarAlt },
  {
    value: 500,
    suffix: "+",
    label: "Partner Universities",
    icon: FaUniversity,
  },
  { value: 98, suffix: "%", label: "Visa Success Rate", icon: FaCheckCircle },
];
