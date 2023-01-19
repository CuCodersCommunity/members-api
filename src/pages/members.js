import memberLists from "../../data/members.json"

export async function get({params, request}) {
    return {
      body: JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/',
        member: memberLists
      }),
    };
  }