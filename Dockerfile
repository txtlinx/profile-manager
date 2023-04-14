FROM node:lts-alpine as builder
WORKDIR /app
COPY package*.json  .
RUN npm install --production --silent --ignore-scripts
COPY . .
ENV DISABLE_ESLINT_PLUGIN=true
ENV REACT_APP_HOME_MF_URL=https://banking.dbs-platform-dev.clouditauchile.cl/home
RUN npm run build

#runtime environment
FROM nginx:stable
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/ /etc/nginx/conf.d/
