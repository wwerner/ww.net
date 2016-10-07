FROM java:8
VOLUME /tmp
ADD target/ww-net.jar app.jar
RUN bash -c 'touch /app.jar'
EXPOSE 8080
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","/app.jar"]
