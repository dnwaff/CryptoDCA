const { api } = require('./tickerRequests.js')
const {pfr} = require('./portfolioReturns.js')

class QueryApi {

    constructor(apiObject= api){
        // make this an interface
        this._api = new apiObject()
        this.coins = this._api.getCoins()
    }

    get Coins(){
        return this.coins
    }

}

export async function getCoins(amount = 20){
    const api = new QueryApi()
    var coins = await api.Coins
    coins = coins.slice(0,amount)
    coins = coins.map((coin) => coin.split(/-(.+)/))
    return coins
}

export async function getTransactionDetails(tradeHistory){
    const {dateTo, dateFrom, amount, coinTicker} = tradeHistory

    const api = new QueryApi()
    api._api.setCoin(coinTicker)
    const transactions = pfr.transactions(dateFrom, dateTo, amount)
    const tickerHistory = await api._api.raw_prices(transactions)
    const transactionDetails = pfr.portfolio(transactions, tickerHistory)
    const transactionInfo = pfr.portfolioInfo(transactionDetails)
    console.log(transactionDetails)
    console.log(transactionInfo)
    return transactionInfo
}
