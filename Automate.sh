#!/bin/bash 
git add .
read -p "commit message:" commit_message
git commit -m "$commit_message"
git push
