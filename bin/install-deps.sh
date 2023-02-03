#!/bin/bash
# Install script

echo "Installing node package dependencies..."

npm i -D autoprefixer \
  @babel/core \
  @babel/preset-env \
  babel-loader \
  clean-webpack-plugin \
  copy-webpack-plugin \
  babel-plugin-import  \
  css-loader \
  css-minimizer-webpack-plugin \
  html-webpack-plugin \
  html-webpack-tags-plugin \
  mini-css-extract-plugin \
  nodemon \
  postcss \
  postcss-loader \
  postcss-preset-env \
  purgecss-webpack-plugin \
  resolve-url-loader \
  sass \
  sass-loader \
  terser-webpack-plugin \
  ts-loader \
  typescript \
  webpack-dev-server \
  webpack \
  webpack-cli \
  webpack-merge \
  webpack-nano \
  webpack-plugin-serve

  echo "All done!  You're good to go!" && exit