export const headers = {
 "Accept": "application/json",
 "Content-Type": "application/json"
}

export const header = {
 "Accept": "application/json"
}

// will create to a new websocket && points to our ActionCable server! 
// a global variable
// stays persistent and not refresh 
// defined as new websocket 
// create a new instance of ws route that we want to connect to
export const ws = new WebSocket('ws://localhost:3001/cable')