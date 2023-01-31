import { generateMemberEndpoint } from "../../helpers/generateMemberEndpoint";
import { backend_url } from "../../config.json";

var members = {};
var memberLists = [];

const respose = await fetch(backend_url + "api/members/get-all-members");
const allMembers = await respose.json();

for (const member in allMembers) {
  memberLists.push(allMembers[member].login);
  const data = await generateMemberEndpoint(allMembers[member]);
  if (data) {
    members[allMembers[member].login] = data;
  }
}

export async function get({ params, request }) {
  const username = params.username;
  return {
    body: JSON.stringify(members[username]),
  };
}

export function getStaticPaths() {
  var pathList = [];
  for (const member of memberLists) {
    const path = {
      params: { username: member },
    };
    pathList.push(path);
  }
  return pathList;
}
