export function dateFormatter(createdDate, author) {
    const formattedDate = new Date(createdDate).toLocaleDateString("en-GB")
    return `Posted on ${formattedDate} by ${author}`
}