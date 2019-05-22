package net.wolfgangwerner.site

import io.micronaut.runtime.Micronaut

object Application {

    @JvmStatic
    fun main(args: Array<String>) {
        Micronaut.build()
            .packages("net.wolfgangwerner.site")
            .mainClass(Application.javaClass)
            .start()
    }
}