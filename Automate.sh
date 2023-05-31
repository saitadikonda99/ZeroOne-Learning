#!/bin/bash 
git add .
read -p "commit message:" commit_message
git commit -m "$commit_message"
read -p "branch name:" branch_name
git push origin "$branch_name"
