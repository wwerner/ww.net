FROM openjdk:8-jre-alpine
VOLUME /tmp
ADD target/ww-net.jar app.jar
RUN sh -c 'touch /app.jar'
EXPOSE 8080
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]