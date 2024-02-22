
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PaymentApi } from 'market_place';
import { Instance } from './GateWay/base';

const Transaction = () => {
    const { id } = useParams();
    console.log(id);
    const payment = new PaymentApi(Instance)
    const [transaction, setTransaction] = useState(null);

    useEffect(() => {
        payment.handleTransactionApiV1TransactionTxIdPost(id, (error, data, response) => {
            if (error) {
                console.error(error)
            } else {
                console.log("setTransaction", data)
                setTransaction(data)
            }
        })
    }, [])

    return (
        transaction != null && "Ждем транзакцию..."
    );

};

export default Transaction;
