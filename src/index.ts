import {
    ProtocolVersion,
    Requests,
    VitreaClient
} from 'vitrea-client'


const client = VitreaClient.create({
    host:     '192.168.1.136',
    port:     11503,
    username: 'vitrea1',
    password: 'ps1',
})

await client.connect()

const count = await client.send(new Requests.RoomCount())