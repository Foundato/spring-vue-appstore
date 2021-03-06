# ---------------------
# Backend Build
# ---------------------
FROM maven:3.6-jdk-13 as BUILD

COPY src /usr/app/src
COPY pom.xml /usr/app

WORKDIR /usr/app

RUN mvn -f pom.xml -Djar.finalName=app -DskipTests clean package

# ---------------------
# Runtime Container
# ---------------------
FROM openjdk:13-jdk-alpine

ENV APP_HOME=/app
ENV STAGE="prod"
RUN adduser --system --no-create-home --disabled-password --ingroup root app
COPY --chown=app:root --from=BUILD /usr/app/target/*.jar $APP_HOME/app.jar

WORKDIR $APP_HOME

USER app

ENV MAX_MEM_PERCENT="80.0"
CMD java -XX:MaxRAMPercentage=${MAX_MEM_PERCENT} -Dspring.profiles.active=$STAGE -jar app.jar
