// facebook messenger webook
app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'prova') {
    res.send(req.query['hub.challenge'])
  }
  res.send('Error, wrong token')
})
