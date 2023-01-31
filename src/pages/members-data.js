import { generateMemberEndpoint } from "../helpers/generateMemberEndpoint";
import { backend_url } from "../config.json";
var members = {};

const respose = await fetch(backend_url + "api/members/get-all-members");
const allMembers = await respose.json();

for (const member in allMembers) {
  const data = await generateMemberEndpoint(allMembers[member]);
  if (data) {
    members[allMembers[member].login] = data;
  }
}

export async function get({ params, request }) {
  return {
    body: JSON.stringify(members),
  };
}
