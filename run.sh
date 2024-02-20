npm install --prefix ./chat-api 
npm install --prefix ./chat-front 

npm --prefix ./chat-api run start &
npm --prefix ./chat-front run build &
npm --prefix ./chat-front run start
