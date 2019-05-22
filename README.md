[![Build Status](https://travis-ci.org/wwerner/ww.net.svg?branch=master)](https://travis-ci.org/wwerner/ww.net)

# ww.net
Stuff that runs on wolfgang-werner.net.
Probably very boring for you.

This is just to play around with the following setup/process:
* Spring Boot Webflux App in Kotlin ~~Spring Boot App (w/ MVC and handlebars templating)~~
* Wrapped into a Docker Container w/ GraalVM, but deployed on heroku using the java build pack
* Built using Travis CI, but also on heroku
* ~~Run on AWS EC2~~ Heroku hobby dynos
* DNS ~~via AWS Route 53~~ CloudFlare
* ~~nginx as reverse proxy~~
* SSL using ~~letsencrypt certificates~~ CloudFlare
