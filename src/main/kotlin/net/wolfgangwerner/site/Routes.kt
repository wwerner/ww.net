package net.wolfgangwerner.site

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.reactive.function.server.ServerResponse
import org.springframework.web.reactive.function.server.router
import java.net.URI


@Configuration
class Routes {
    @Bean
    fun index() = router {
        GET("/") {
            ServerResponse.temporaryRedirect(
                    URI.create("/index.html")).build()
        }
    }

}


