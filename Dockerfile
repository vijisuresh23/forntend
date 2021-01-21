ARG REGISTRY_URI
FROM ${REGISTRY_URI}/node:latest as build

WORKDIR /app
COPY . ./
RUN yarn
ARG ENVIRONMENT
ARG PUBLIC_HOSTNAME_AND_PORT
ARG IS_EC2
ENV REACT_APP_ENVIRONMENT $ENVIRONMENT
ENV PUBLIC_HOSTNAME_AND_PORT $PUBLIC_HOSTNAME_AND_PORT
ENV IS_EC2 $IS_EC2
RUN yarn build

FROM ${REGISTRY_URI}/nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]