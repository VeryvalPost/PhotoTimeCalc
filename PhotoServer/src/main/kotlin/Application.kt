package veryval.timecalculate

import io.ktor.serialization.jackson.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import veryval.timecalculate.plugins.configureCORS
import veryval.timecalculate.plugins.configureRouting




fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0", module = Application::module).start(wait = true)
}

fun Application.module(){
    install(ContentNegotiation) {
        jackson() //
    }
    configureRouting()
    configureCORS()
}

