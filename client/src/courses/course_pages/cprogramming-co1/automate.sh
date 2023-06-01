#!/bin/bash

for folder in topic{1..12}; do
  mkdir -p "$folder"
  touch "$folder/Page.js" "$folder/Page.css"
done

