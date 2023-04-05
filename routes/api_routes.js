const router = require('express');

router();
const fruits = ['orange', 'apple', 'grape', 'kiwi'];

router.get('/api/fruits', (client_request, server_response) => {
    server_response.send(fruits);
});

module.exports = router;