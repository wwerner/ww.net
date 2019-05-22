package net.wolfgangwerner.site

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.core.io.ClassPathResource
import org.springframework.web.reactive.function.server.RouterFunctions
import org.springframework.web.reactive.function.server.ServerResponse
import org.springframework.web.reactive.function.server.RouterFunction



@SpringBootApplication
class SiteApplication

fun main(args: Array<String>) {
	runApplication<SiteApplication>(*args)
}
