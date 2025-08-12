/**
 *
 * @param endpoint - directory path of the json file  (eg. /json/education-details.json)
 */
export async function getJSONData<T>(endpoint: string): Promise<T | []> {
  // try {
  const res = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: T = await res.json();

  return result;
}
