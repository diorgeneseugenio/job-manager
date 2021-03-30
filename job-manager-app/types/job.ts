import { Company } from "./company";

export interface Job {
  id: number;
  companyId: number;
  title: string;
  description: string;
  salary: number;
  benefits: string;
  skills: string;
  allowRemote: boolean;
  ended: boolean;
  company: Company;
  createdAt: string;
  updatedAt: string;
}
