import { backend_url } from "../config.json";
import { generateMemberEndpoint } from "../helpers/generateMemberEndpoint";
var memberList = [];

const respose = await fetch(backend_url + "api/members/get-all-members");
const allMembers = await respose.json();

for (const member in allMembers) {
  const data = await generateMemberEndpoint(allMembers[member]);
  if (data) {
    memberList.push(allMembers[member].login);
  }
}

export async function get({ params, request }) {
  return {
    body: JSON.stringify(memberList),
  };
}
