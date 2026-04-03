# Architecture Diagram

Two long-running containers (`app`, `mongo`) are defined in Compose. Database seeding is not a third container: `db/init/init.js` is mounted into the MongoDB image’s `/docker-entrypoint-initdb.d` and runs **once** when the data volume is empty.

```mermaid
flowchart TD
    user[User / Browser] --> app[Node.js App Container<br/>Express web server]
    app -->|MongoDB driver| mongo[MongoDB Container<br/>database fruits-db / collection fruits]

    subgraph compose [Docker Compose services]
        app
        mongo
    end

    subgraph fruitsNet [Docker network fruits-net]
        app
        mongo
    end

    init[db/init/init.js on host] -.->|read-only volume to docker-entrypoint-initdb.d<br/>first start only when data volume is empty| mongo
```
