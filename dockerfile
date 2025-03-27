# Utilitza la darrera imatge base de Nginx alpine
FROM nginx:1.25.4-alpine

# Elimina la configuració per defecte de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia tots els arxius HTML des de la carpeta local 'html' al directori web de Nginx
COPY html/ /usr/share/nginx/html/

# Exposa el port 80 per defecte de Nginx
EXPOSE 80