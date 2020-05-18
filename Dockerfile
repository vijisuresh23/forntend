FROM node:latest as build
WORKDIR /app
COPY . ./
RUN yarn
ARG ENVIRONMENT
ENV REACT_APP_ENVIRONMENT $ENVIRONMENT
RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]