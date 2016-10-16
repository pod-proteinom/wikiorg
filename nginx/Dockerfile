FROM nginx
RUN mkdir -p /etc/nginx/logs
COPY ./nginx.conf /etc/nginx/
COPY ./public/ /var/www/public/
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]