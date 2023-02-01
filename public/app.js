const axios = require('axios').default;

function deleteUser(e){
    axios.delete('/delete', {
// source take from e
        data: source
    });
}

