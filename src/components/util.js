import React from 'react'

export default function forMatCurrency(num) {

    return "$" + Number.parseFloat(num).toFixed(1);
}
