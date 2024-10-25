# Personal Page

Welcome to the personal page of [Wang Mingyan](https://github.com/wamy272).

## Development Setup

This project requires `Node.js >= 22` and `pnpm` for dependency management.

### Step 1: Install `pnpm`

To install `pnpm` globally, run the following command:

```bash
npm install -g pnpm
```

### Step 2: Install Project Dependencies

Navigate to the root directory of the project and install dependencies using:

```bash
cd <project-root>
pnpm install
```

### Step 3: Start the Development Server

To start the development server locally on your desktop, use:

```bash
pnpm dev
```

For development on a local network (LAN), or if you want the server accessible from other devices on the same network, use:

```bash
pnpm dev --host
```

### Step 4: Access in Browser

- For local development, open: [http://localhost:5173](http://localhost:5173)
- For devices on the same LAN, use: `http://<your-ip>:5173`

### Deployment

The project uses **GitHub Actions** for continuous integration and deployment. A new build and deployment process is triggered automatically when changes are pushed to the `main` branch.
