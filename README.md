# Members API

This is a static api for CuCoders Community web site to mock github users api. Github user API have a request limit and por hour and our web site make a build proces and make a lot of request for each user, so we are going to mock the github user api to this end point.

## API endpoints


<code>GET</code> <code><b>/members-list</b></code> <code>(get a list with the members usernames)</code>

<code>GET</code> <code><b>/members-data</b></code> <code>(get a object with all members and members data)</code>

<code>GET</code> <code><b>/members-data/{username}</b></code> <code>(get a object with member data)</code>


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
