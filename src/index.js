const app = rquire('./app')

const main = async() => {
    app.listen(3000);
    console.log('Server port: ', 3000)
}

main()