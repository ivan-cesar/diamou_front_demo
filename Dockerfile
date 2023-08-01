# Étape 1 : Construire le code de production de l'application React
FROM node:18.16.0 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Étape 2 : Utiliser un serveur Web léger pour servir l'application construite
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html/ivan
EXPOSE 3022
CMD ["nginx", "-g", "daemon off;"]
