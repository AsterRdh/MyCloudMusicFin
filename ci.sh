#!/bin/bash
echo pull
git pull
echo pullFinsh
echo packageing
mvn clean package
echo packaged
