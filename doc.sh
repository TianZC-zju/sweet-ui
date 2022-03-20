#!/bin/env bash

yarn doc
git add .
git commit -m "update"
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "update"
git push
git checkout -
