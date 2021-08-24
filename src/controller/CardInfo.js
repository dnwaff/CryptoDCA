// return array of card props to populate 
// the portfolioCardView
export default function cardProps(info) {
    var {buyAmount, coinName, dateTo , dateFrom, details} = info
    dateTo = `${dateTo.getMonth() + 1}/${dateTo.getFullYear()}`;
    dateFrom = `${dateFrom.getMonth() + 1}/${dateFrom.getFullYear()}`;

    var results = []
    if (details.avgPrice !=='undefined'){
        results.push({
            category : 'Average Cost',
            text: `The average cost of ${coinName} starting from ${dateFrom} to ${dateTo} considering a monthly buy of ${buyAmount}`,
            result: details.avgPrice
        })
    }
    if (details.totalAmountPaid !=='undefined'){
        results.push({
            category : 'Total Amount Paid',
            text: `The total amount of money spent on ${coinName}. The baseline to determine how much profits you made`,
            result: details.totalAmountPaid
        })
    }
    if (details.totalCoins !=='undefined'){
        results.push({
            category : 'Total Coins',
            text: `The current amount of ${coinName} acquired from your monthly buys`,
            result: details.totalCoins
        })
    }

    if (details.totalValuation !=='undefined'){
        results.push({
            category : 'Valuation',
            text: `How much your current stack of ${coinName} are worth in the month of ${dateTo}`,
            result: details.totalValuation
        })
    }

    if (details.profit !=='undefined'){
        results.push({
            category : 'Profit',
            text: `The amount of money you have earned in total if you were to sell in the month of ${dateTo}`,
            result: details.profit
        })
    }

    if (details.percentGains !=='undefined'){
        results.push({
            category : 'Percent Gains',
            text: `The amount your ${coinName} have appreciated in value percentage wise`,
            result: details.percentGains
        })
    }

    return results
}

