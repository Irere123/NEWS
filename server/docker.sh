#! /bin/bash

echo What is your build version
read $VERSION

docker build -t irere/news:$VERSION .