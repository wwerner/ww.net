# Stage 1: Build application jar
# * Download dependencies into separate layer for better caching
# * Assemble jar
# Notes:
#   Somehow requires to build as root, due to missing access to 'libnative-platform.so'
#   and issues when setting gradle opts
# TODO: try --chown=gradle:gradle next
FROM gradle:5.4.1-jdk11-slim as builder

USER root
WORKDIR /home/gradle
COPY gradle ./gradle
COPY build.gradle settings.gradle gradle.properties ./
ENV GRADLE_OPTS "-Dorg.gradle.daemon=false -Dorg.gradle.internal.launcher.welcomeMessageEnabled=false -Dorg.gradle.configureondemand=true"
RUN gradle getDeps
COPY src src
RUN gradle assemble
RUN ls -l build/libs


# Stage 2: Build native GraalVM image
# See resources/META-INF/native-image for details
FROM oracle/graalvm-ce:latest as imager

RUN gu install native-image
COPY --from=builder /home/gradle/build/libs/wwnet-*.jar /app.jar
RUN native-image --no-server -cp /app.jar
RUN ls -l


# Stage 3: The actual application container
FROM frolvlad/alpine-glibc

EXPOSE 8080
VOLUME /tmp
COPY --from=imager /wwnet /wwnet
EXPOSE 8080
ENTRYPOINT ["/wwnet"]
