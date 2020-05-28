# Multistage Docker compile
# Build stage
FROM node:12-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

COPY tsconfig.json ./
COPY .eslintrc.json ./
COPY rules ./rules
COPY src ./src
COPY public ./public
RUN yarn build


# Production stage
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
