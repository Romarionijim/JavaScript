function willGetPhone(isMomHappy) {
    const promise = new Promise((resolve, reject) => {
        if (isMomHappy === true) {
            let phone = {
                company: 'onePlus 3',
                color: 'grey steele',
            }
            resolve(`I got the ${phone.company} phone in ${phone.color} color`)
        } else {
            reject('mom is not happy!')
        }
    }).then((result) => console.log(result)).catch((error) => console.log(error))
}


// askMom(false)


//async await
async function askMom() {
    try {
        await willGetPhone();
    } catch (error) {
        console.log('mom is not happy')
    }
}

(async () => {
    await askMom();
})



