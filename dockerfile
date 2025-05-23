# Imagen base oficial de Node.js
FROM node:20

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa Express
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "src/server.js"]
