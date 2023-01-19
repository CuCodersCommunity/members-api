import { expandMemberAPI } from "../../helpers/extendMemberAPI";

const data = import.meta.glob("../../data/members/*.json");
var members = {};
var memberLists = []


for (const path in data) {
  await data[path]().then((mod) => {
    members[mod.username] = expandMemberAPI(mod);
    memberLists.push(mod.username);
  });
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
