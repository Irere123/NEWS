#! /bin/bash

heroku container:login
heroku container:push --app=api-news-graphql web
heroku container:release --app=api-news-graphql web