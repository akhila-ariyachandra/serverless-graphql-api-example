# Serverless GraphlQL API Example

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/V7V5ZOMO)

[Example Deployment](https://serverless-graphql-api-example-five-gamma.now.sh/api/graphql)

A serverless GraphQL API built with TypeScript and MongoDB

The explaination of the API can my found on my [blog](https://akhilaariyachandra.com/create-a-serverless-api-with-typescript-graphql-and-mongodb).

## Local Development

The [Now CLI](https://zeit.co/download) will need be downloaded, installed and logged into.

After that create a `.env` file and add the `DB_PATH` environment variable with the database URI.

```
DB_PATH=mongodb://<user>:<password>@ds123456.mlab.com:54321/example-db
```

Finally run

```shell
now dev
```

## Deploying to [Zeit](https://zeit.co/)

First upload the database path as an [Environment Variable](https://vercel.com/blog/environment-variables-ui).

```shell
now env add
```

Name the variable `DB_PATH` and make sure you make to available for all three environments (**Production**, **Preview** and **Development**).

All that's let to do is deploying to now.

```shell
now
```
