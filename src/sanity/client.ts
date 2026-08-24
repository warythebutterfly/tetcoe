import { createClient } from "@sanity/client";
import { apiVersion, dataset, hasSanityConfig, projectId } from "./env";

let client: ReturnType<typeof createClient> | null = null;

export function getSanityClient() {
  if (!hasSanityConfig || !projectId) return null;

  if (!client) {
    client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });
  }

  return client;
}
