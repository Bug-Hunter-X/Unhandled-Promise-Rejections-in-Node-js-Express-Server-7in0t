# Unhandled Promise Rejections in Node.js Express Server

This repository demonstrates a common issue in Node.js Express servers: unhandled promise rejections.  The `bug.js` file contains a server that simulates a 5-second delay before responding.  Clients with short timeout settings might experience issues. The `bugSolution.js` file shows how to properly handle potential errors and timeouts.