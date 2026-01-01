# Stage 1: Build the Angular application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

ARG AUTH_DOMAIN
ARG AUTH_CLIENT_ID
# In your build script, use sed to replace placeholders in environment.prod.ts
RUN sed -i "s|YOUR_DOMAIN|$AUTH_DOMAIN|g" src/environments/environment.prod.ts
RUN sed -i "s|YOUR_CLIENT_ID|$AUTH_CLIENT_ID|g" src/environments/environment.prod.ts
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/erp-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]