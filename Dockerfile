# NestJS uygulaması için temel Node.js görüntüsünü kullanın
FROM node:18

# Uygulamanın çalışacağı dizini belirleyin
WORKDIR /app

# package.json ve package-lock.json dosyalarını çalışma dizinine kopyalayın
COPY package*.json ./

# Bağımlılıkları yükleyin
RUN npm install

# Uygulama dosyalarını kopyalayın
COPY . .

# Uygulama için port ayarlayın
EXPOSE 3000

# Uygulamayı başlatın
CMD ["npm", "run", "start"]
