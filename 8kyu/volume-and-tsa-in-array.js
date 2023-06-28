// display total surface area and volume of a box in array


function getSize(width, height, depth) {
    let totalSurfaceArea = (2* depth * width) +( 2 * depth * height)+ (2 * height * width)
    let volume = width * depth * height
    let arr = [totalSurfaceArea, volume]
    return arr
}