"use server"

import { revalidatePath } from "next/cache";





const urlProperties = "https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json"

const options = {
  method: "GET",
  headers: {
    accept: "application/json"
  }
}



export async function fetchAllPropsService() {
  try {
    const propsRes: Promise<[]> = await fetch(urlProperties, options).then(res => res.json())
    revalidatePath("/")
    console.log("PropertyService.fetchAllProps")
    return propsRes
  }
  catch (error: any) {
    throw new Error('Error fetching all Properties:', error.message)
  }
}


export async function arrayToPropertiesService(propsResponse: []) {

  let props: PropertyT[] = []

  propsResponse.forEach( (prop) => {
    props.push({
      id: prop["Id"],
      title: prop["Title"],
      location: prop["Location"],
      bedrooms: prop["Bedrooms"],
      bathrooms: prop["Bathrooms"],
      sale_price: prop["Sale Price"],
      date_listed: prop["DateListed"],
      parking: prop["Parking"],
      sqft: prop["Sqft"],
      year_built: prop["YearBuilt"],
    })
  })
  console.log("PropertyService.arrayToProperties")
  return props;
}








