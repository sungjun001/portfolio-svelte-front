#!/bin/bash

# 설치된 패키지의 목록을 가져옵니다.
packages=$(npm ls --parseable --depth=0 | awk -F/ '{print substr($0, index($0, $9))}')

# 각 패키지에 대해 'npm show <package> engines'를 실행합니다.
for package in $packages
do
  echo "Package: $package"
  echo "Engines:"
  npm show "$package" engines
  echo ""
done
