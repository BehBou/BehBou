
 //read URL parameters
 var IoTizeDevice;


 function getUrlArguments() {
    let sPageURL = decodeURIComponent(window.location.search.substring(1));
    let sURLVariables = sPageURL.split('&');
    
    return sURLVariables.reduce((map, param) => {
        console.log(param);
        let parts = param.split('=');
        let name = parts[0];
        let value = parts[1];
        map[name] = value;
        return map;
    }, {})
};

function loadIoTizeDevice() {
    IoTizeDevice = IoTizeDeviceClient.Device.IoTizeDevice;
    let urlParams = getUrlArguments();

    if ('mqtt' in urlParams){
        return loadMqttDevice(urlParams);
    }
    else if ('websocket' in urlParams){
        return loadWebSocketDevice(urlParams);
    }
    else {
        return loadWebviewDevice(urlParams);
    }
}

function loadWebviewDevice(){
    if (IoTizeDeviceComWebview.isIoTizeWebView()){
        return IoTizeDeviceComWebview.getInjectedIoTizeDevice();
    }
    else{
        throw new Error(`Application is not running inside a valid webview.`);
    }
}

function loadWebSocketDevice(urlParams) {
    if (typeof IoTizeDeviceComWebsocket === 'undefined'){
        throw new Error(`Please include library IoTizeDeviceComWebsocket`);
    }
    let url = urlParams.websocket;
    let protocol = new IoTizeDeviceComWebsocket.WebSocketProtocol({
        url: url
    });
    let device = IoTizeDevice.fromProtocol(protocol);
    return device;
}

function loadMqttDevice(urlParams) {
    if (typeof IoTizeDeviceComMqtt === 'undefined'){
        throw new Error(`Please include library IoTizeDeviceComMqtt`);
    }

    if (    !urlParams["serialnumber"]
            || !urlParams["uuid"]){
        throw new Error("Invalid parameters for mqtt connection.");
    } 
    let protocol = IoTizeDeviceComMqtt.MqttRelayProtocolFactory.create(
       urlParams["serialnumber"],
       urlParams["uuid"],
       urlParams["netkey"],
       urlParams["broker"]
    );
    return IoTizeDevice.fromProtocol(protocol);
}