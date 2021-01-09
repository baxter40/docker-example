FROM node:14.2.0-alpine as build

WORKDIR /app

COPY ./FrontEnd/package*.json ./

RUN npm i -g @angular/cli@11.0.3
RUN npm i

COPY ./FrontEnd/ ./

RUN npm run build-prod

FROM nginx:1.15.8-alpine

COPY --from=build /app/dist/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
