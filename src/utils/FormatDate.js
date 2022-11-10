/* eslint-disable prettier/prettier */
const formatDate = dates => {
    return new Date(dates).toLocaleDateString("pt-br", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"

    })
}

export default formatDate