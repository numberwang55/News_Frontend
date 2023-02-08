export function dateFormatter(createdDate) {
    const formattedDate = new Date(createdDate).toLocaleDateString("en-GB")
    return `Posted on ${formattedDate}`
}