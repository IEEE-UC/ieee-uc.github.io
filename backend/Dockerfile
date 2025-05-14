FROM node:18.18

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npx prisma generate

# Add a build step to compile TypeScript to JavaScript
RUN npm run build

EXPOSE 3000

CMD ["npm","run", "start"]