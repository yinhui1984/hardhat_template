#!/usr/bin/env sh

# get the first argument as ProjectName
ProjectName=$1

if [ -z "$ProjectName" ]; then
  echo "Please provide a project name"
  exit 1
fi


CurrentDir=$(pwd)
ProjectFullPath=${CurrentDir}/${ProjectName}

if [ -d "$ProjectFullPath" ]; then
  echo "Project already exists: " ${ProjectFullPath}  ", please use another one"
  exit 1
fi

# create the project
mkdir -p ${ProjectFullPath}

cp -avf /Users/zhouyinhui/blockchain/projects/hardhat_project_template/templatefiles/ ${ProjectFullPath}

code ${ProjectFullPath}