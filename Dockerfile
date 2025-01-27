FROM nginx

# just for console server address message
RUN apk add --no-cache bash

COPY /wordpress-scrape /var/share/nginx/html
COPY info.json /var/share/nginx/html
EXPOSE 8080