FROM maven:3.6.1-jdk-11-slim as builder
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src/ /build/src/
RUN mvn package


FROM oracle/graalvm-ce:latest

VOLUME /tmp
COPY --from=builder /build/target/ww-net.jar app.jar
RUN sh -c 'touch /app.jar'
EXPOSE 8080
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]