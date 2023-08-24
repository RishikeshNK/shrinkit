# ShrinkIt

ShrinkIt URL shortner built using [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), and [React](https://react.dev). Your links, trimmed and ready to share, in an instant.

## Getting Started

### Dependencies

- [Node.js](https://nodejs.org/en/download/package-manager/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Usage

To get started with ShrinkIt, follow the steps below:

1. Clone the repository.

```bash
git clone git@github.com:RishikeshNK/shrinkit.git
cd shrinkit
```

2. Install the necessary dependencies by running `npm install` in `client` and `server`.

```bash
cd client
npm install
cd ../server
npm install
```

3. Configure the `.env` file by following the template in `.env.example` in `server`. See [Setting up the environment](#setting-up-the-environment).

4. Run the application by running the `client` and the `server`.

```bash
cd client
npm run dev
```

```bash
cd server
npm start
```

### Setting up the environment

1. Create a new file called `.env` or copy the `.env.example` and rename it to `.env` in the `server` folder.

```bash
cd server
cp .env.example .env
```

2. Complete the file to add your environment variables.
