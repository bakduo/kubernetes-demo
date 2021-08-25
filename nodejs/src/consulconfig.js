/*
* © Copyright 2021 SfJwmy4A_test@oncosmos.com
* MIT License
*
*
*/

const Consul = require('consul');
const CONSUL_SERVER=process.env.CONSUL_SERVER || "";
const CONSUL_PORT=process.env.CONSUL_PORT || 8500;

class ConsulConfig {
    
    constructor () {
        
        this.consul = new Consul({
            host: CONSUL_SERVER,
            port: CONSUL_PORT,
            promisify: true,
        });

    }

    getAgent(){
        return this.consul.agent;
    }
}

module.exports = ConsulConfig;
