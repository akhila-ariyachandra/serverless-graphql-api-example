# Serverless GraphlQL API Example

[Example Deployment](https://serverless-graphql-api-example-five-gamma.now.sh/api/graphql)

A serverless GraphQL API built with TypeScript and MongoDB

The explaination of the API can my found on my [blog](https://akhilaariyachandra.com/create-a-serverless-api-with-typescript-graphql-and-mongodb).

## Local Development

The [Vercel CLI](https://vercel.com/download) will need be downloaded, installed and logged into.

After that create a `.env` file and add the `DB_PATH` environment variable with the database URI.

```
DB_PATH=mongodb://<user>:<password>@ds123456.mlab.com:54321/example-db
```

Then link it to a Vercel project.

```shell
vercel link
```

Finally run

```shell
vercel dev
```

## Deploying to [Vercel](https://vercel.com/home)

First upload the database path as an [Environment Variable](https://vercel.com/blog/environment-variables-ui).

```shell
vercel env add
```

Name the variable `DB_PATH` and make sure you make to available for all three environments (**Production**, **Preview** and **Development**).

Then all that’s left to do is to deploy to Vercel.

```shell
vercel
```
