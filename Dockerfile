FROM public.ecr.aws/docker/library/node:20

RUN mkdir /opt/app
COPY . /opt/app
WORKDIR /opt/app

RUN npm i --no-audit
RUN npm run build

CMD NODE_ENV=production npm run start:prod

