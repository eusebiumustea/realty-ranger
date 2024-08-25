import { Property } from "@common/types";
export interface PropertiesListProps {
  loading: boolean;
  data: Property[] | null;
  error: string | null;
}
