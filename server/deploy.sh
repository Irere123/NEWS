#! /bin/bash

heroku container:login
heroku container:push --app web
heroku container:release --app web