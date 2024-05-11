"use server"

import { arrayToPropertiesService, fetchAllPropsService } from "@/app/property/service";
import { revalidatePath } from "next/cache";





export async function fetchAllProps(): Promise<PropertyT[]> {

  const resp: [] = await fetchAllPropsService()
  const props: PropertyT[] = await arrayToPropertiesService(resp)
  revalidatePath("/")
  return props
}
