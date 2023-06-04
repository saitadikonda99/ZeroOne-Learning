#!/bin/zsh

echo "Enter the commit message : "
read message

echo "Enter the branch name : "
read branch

git add .

git commit -m "$message"

git push origin "$branch"

