const data = import.meta.glob("../data/members/*.json");
var memberList = [];

for (const path in data) {
  await data[path]().then((mod) => {
    memberList.push(mod.username);
  });
}

export async function get({ params, request }) {
  return {
    body: JSON.stringify(memberList),
  };
}
