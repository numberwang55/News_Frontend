export function dateFormatter(createdDate, author) {
    const formattedDate = new Date(createdDate).toLocaleDateString("en-GB")
    return `Posted ${formattedDate} by ${author}`
}