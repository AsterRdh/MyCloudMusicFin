#!/bin/bash
git pull
mvn clean package
java -jar target/cloudmusic-0.0.1-SNAPSHOT.jar
