export let api_url = ''
let api_version = '1'
export let ws_url = ''

const dev = false

if(dev){
    api_url = `http://10.0.0.160:8000/${api_version}`
}

else {
    api_url = `http://26.173.19.176:8000/${api_version}`
}


if(dev){
    ws_url = `ws://10.0.0.160:8000`
}

else {
   ws_url = 'ws://26.173.19.176:8000'
}
