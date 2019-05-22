package net.wolfgangwerner.site

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.ServerResponse

@Configuration
class Routes {
    val index = ServerResponse
        .ok()
        .contentType(MediaType.TEXT_HTML)
        .syncBody(
            ClassPathResource("static/index.html"))

    @Bean
    fun router() = org.springframework.web.reactive.function.server.router {
        GET("/") { index }
        GET("/**") { index }
    }
}