const data = import.meta.glob("../data/members/*.json");
import { expandMemberAPI } from "../helpers/extendMemberAPI";
var members = {};

for (const path in data) {
  await data[path]().then((mod) => {
    members[mod.username] = expandMemberAPI(mod);
  });
}

export async function get({ params, request }) {
  return {
    body: JSON.stringify(members),
  };
}
