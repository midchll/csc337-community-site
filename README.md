# CSC337 Web Programming Group Project
## Communities R Us
This project uses Node.js with Express and MongoDB, installation and startup steps are below
-

### Project Structure
The structured project source can be viewed at https://github.com/midchll/csc337-community-site and is as follows:
```
.
├── public
│   ├── pages
│   │   ├── communities.html
│   │   ├── login.html
│   │   ├── posts.html
|   |   └── profile.html
│   ├── scripts
│   │   └── navbar.js
│   └── styles
│       ├── communities.css
│       ├── main.css
│       ├── navbar.css
│       └── posts.css
├── src
│   ├── db
│   │   ├── mongo.js
│   │   ├── communityQueries.js
│   │   ├── postQueries.js
│   │   └── userQueries.js
│   ├── routes
│   │   ├── auth.js
│   │   ├── communities.js
│   │   └── posts.js
│   └── testing
│       └── insertDocs.js
├── main.js
├── index.html
├── package.json
└── package-lock.json
```

### Required Packagess
_(This project contains a package.json, dependencies can be installed with `npm i`)_\
*Runtime: requires Node.js ^24.15.0
- express: ^5.2.1 `npm install express@^5.2.1`
- express-session: ^1.19.0 `npm install express-session@^1.19.0`
- mongodb: ^7.2.0 `npm install mongodb@^7.2.0`

### Startup
1. Install required packages listed above
2. Run database seeding script (optional) `node src/testing/insertDocs.js`\
This inserts some mock accounts and other data into the database for demonstration purposes
3. Start server `node main.js`\
The app will be accessible at http://localhost:8080
