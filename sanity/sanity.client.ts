import { createClient, type ClientConfig } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
};

const client = createClient(config);

export default client;