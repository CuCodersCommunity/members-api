var users_data = {};

const allPosts = await import.meta.glob("../../../data/members/*.json");

for (const path in allPosts) {
  allPosts[path]().then((mod) => {
    const asd = mod.default;
    console.log(asd.user);
  });
}

export async function get({ params, request }) {
  const id = params.id;
  return {
    body: JSON.stringify(users_data[id]),
  };
}

export function getStaticPaths() {
  var pathList = [];

  for (const member of memberLists) {
    const path = {
      params: { id: member },
    };
    pathList.push(path);
  }
  return pathList;
}
