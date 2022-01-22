FROM fusuf/whatsasena:latest

RUN git clone https://github.com/isuwabrooo/queen-angella /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Africa/Harare
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
