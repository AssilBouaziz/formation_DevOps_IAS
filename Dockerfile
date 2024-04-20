FROM node:13-alpine
# set default dir so that next commands executes in /home/app dir
WORKDIR /app

# Copy everything from the current directory on the host to the /app directory in the container.
# This will copy all files including server.js, package.json, and the rest of the application's source code.
COPY . .

# will execute npm install in /home/app because of WORKDIR
RUN npm install

# Informs Docker that the container listens on the specified network port at runtime.
# EXPOSE does not make the ports of the container accessible to the host. To do that, you must use either the -p flag
# to publish a range of ports or the -P flag to publish all exposed ports when using docker run.
EXPOSE 3000

# no need for /home/app/server.js because of WORKDIR
CMD ["node", "server.js"]