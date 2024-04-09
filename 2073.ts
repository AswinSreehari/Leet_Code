function timeRequiredToBuy(tickets: number[], k: number): number {
    return tickets.reduce((acc,ticket, i) => Math.min(i <= k ? tickets[k] : tickets[k] - 1, ticket) + acc, 0)

};