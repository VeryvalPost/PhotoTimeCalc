package veryval.timecalculate.service

import veryval.timecalculate.DTO.CalculationInput


fun calculate(input: CalculationInput): Double {

    val sensor = input.sensor ?: throw IllegalArgumentException("Sensor type is missing")
    val aperture = input.aperture ?: throw IllegalArgumentException("Aperture is missing")
    val focus = input.focus ?: throw IllegalArgumentException("Focus is missing")
    val pixel = input.pixel ?: throw IllegalArgumentException("Pixel size is missing")


    /* Shutter Speed = Accuracy * (16.856 * Lens Aperture + 0.0997 * Focal Length + 13.713 * Pixel Size) / (Focal Length * cos(Declination))

 */

    fun shutterSpeed(sensorCrop: Double) =
        200 * (16.856 * aperture + 0.0997 * focus * sensorCrop + 13.713 * pixel) / (focus * sensorCrop * 1)


    val result = when (sensor) {
        "Medium format" -> shutterSpeed(0.6)
        "Full frame" -> shutterSpeed(1.0)
        "APC" -> shutterSpeed(1.5)
        "APC (Cannon)" -> shutterSpeed(1.6)
        "3/4" -> shutterSpeed(2.0)
        "1 inch" -> shutterSpeed(2.7)
        else -> 0.0
    }


    return result


}