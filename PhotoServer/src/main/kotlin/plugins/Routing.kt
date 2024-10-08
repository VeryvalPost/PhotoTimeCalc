package veryval.timecalculate.plugins

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.request.*
import veryval.timecalculate.DTO.CalculationInput
import veryval.timecalculate.service.*

fun Application.configureRouting() {

    routing {
        post("/calculate") {
            val input = call.receive<CalculationInput>()
            val result = calculate(input)

            // Отправляем результат обратно на frontend
            call.respond(mapOf("result" to result))
        }
    }
}
