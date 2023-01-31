const data = import.meta.glob("../data/members/*.json");
import { generateMemberEndpoint } from "../helpers/generateMemberEndpoint";
import {backend_url} from "../config.json"
var members = {};

const respose = await fetch(backend_url + "api/members/get-all-members");
const allMembers = await respose.json();

for (const member in allMembers) {
    members[allMembers[member].login] = await generateMemberEndpoint(allMembers[member]);
}

export async function get({ params, request }) {
  return {
    body: JSON.stringify(members),
  };
}
